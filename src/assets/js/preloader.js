/**
 * Custom SVG Preloader
 * Fixed version to ensure SVG visibility during preloader time
 * Version 1.5.1
 */
(function() {
    // DEBUG - Log when script starts to execute
    console.log("CSP Preloader Script Executing");
    
    // Create preloader immediately before anything else loads
    function createPreloader() {
        // Check if cspSettings exists, if not use defaults
        if (typeof cspSettings === "undefined") {
            console.error("CSP Settings not found - using defaults");
            window.cspSettings = {
                backgroundColor: "#ffffff",
                minimumTime: 2000,
                svgUrl: ""
            };
        }
        
        // Record exact start time
        const startTime = new Date().getTime();
        console.log("CSP Start Time:", startTime);
        
        // Force body to be hidden during load
        document.documentElement.style.visibility = "hidden";
        
        // Create preloader container
        const preloader = document.createElement("div");
        preloader.id = "csp-preloader";
        preloader.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background-color: ${cspSettings.backgroundColor || "#ffffff"} !important;
            z-index: 2147483647 !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            visibility: visible !important;
            opacity: 1 !important;
            transition: opacity 1s ease-out !important;
        `;
        
        // Add a placeholder loading indicator
        const loadingIndicator = document.createElement("div");
        loadingIndicator.className = "csp-loading-indicator";
        loadingIndicator.style.cssText = `
            font-size: 24px;
            color: #333;
            position: absolute;
            z-index: 2;
            opacity: 1;
            transition: opacity 0.3s ease;
        `;
        loadingIndicator.textContent = "Loading...";
        preloader.appendChild(loadingIndicator);
        
        // Add a container for the SVG that will be shown once SVG is loaded
        const svgContainer = document.createElement("div");
        svgContainer.className = "csp-svg-container";
        svgContainer.style.cssText = `
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        preloader.appendChild(svgContainer);
        
        // Make preloader the very first element in body
        if (document.body) {
            document.body.insertBefore(preloader, document.body.firstChild);
        } else {
            // If body doesn't exist yet, wait for it and then insert
            document.addEventListener("DOMContentLoaded", function() {
                document.body.insertBefore(preloader, document.body.firstChild);
            });
        }
        
        // Force preloader to be visible
        preloader.style.visibility = "visible";
        preloader.style.display = "flex";
        
        // Track if SVG has been loaded and displayed
        let svgLoaded = false;
        
        // Load the SVG if URL is provided
        if (cspSettings.svgUrl) {
            console.log("CSP: Starting to load SVG from:", cspSettings.svgUrl);
            
            // Use fetch for better error handling
            fetch(cspSettings.svgUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load SVG: ${response.status}`);
                    }
                    return response.text();
                })
                .then(svgContent => {
                    console.log("CSP: SVG content fetched, length:", svgContent.length);
                    
                    // First parse the SVG to properly handle it
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
                    const svgElement = svgDoc.documentElement;
                    
                    if (svgElement.tagName.toLowerCase() !== 'svg') {
                        throw new Error("Parsed content is not a valid SVG");
                    }
                    
                    // Important: Set preserveAspectRatio for better sizing
                    svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
                    
                    // Apply initial styling to SVG element
                    svgElement.style.cssText = `
                        max-width: 60% !important;
                        max-height: 60% !important;
                        display: block !important;
                    `;
                    
                    // Only ensure the SVG itself is visible, not its children
                    svgElement.style.display = "block";
                    
                    // Add to container and immediately show it
                    svgContainer.innerHTML = "";
                    svgContainer.appendChild(svgElement);
                    console.log("CSP: SVG added to container, making visible");
                    
                    // Hide loading indicator
                    loadingIndicator.style.opacity = "0";
                    setTimeout(() => {
                        loadingIndicator.style.display = "none";
                    }, 300);
                    
                    // Make SVG container visible immediately
                    svgContainer.style.opacity = "1";
                    svgLoaded = true;
                })
                .catch(error => {
                    console.error("CSP SVG Load Error:", error);
                    loadingIndicator.textContent = "Loading...";
                    svgLoaded = true; // Continue despite error
                });
        } else {
            // No SVG URL provided
            loadingIndicator.textContent = "Loading...";
            svgLoaded = true; // Continue anyway
        }
        
        // Function to remove preloader when conditions are met
        function removePreloader() {
            // Get current time to calculate elapsed time
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;
            console.log("CSP Elapsed Time:", elapsedTime, "Min Time:", cspSettings.minimumTime, "SVG Loaded:", svgLoaded);
            
            // Check if minimum time has elapsed and SVG is loaded
            if (elapsedTime >= cspSettings.minimumTime && svgLoaded) {
                console.log("CSP: Conditions met to remove preloader");
                
                // Make document visible before starting transition
                document.documentElement.style.visibility = "visible";
                
                // FIXED FADEOUT: Force a reflow before applying the transition
                // This ensures the browser registers the element before transitioning
                preloader.style.opacity = "1";
                preloader.offsetHeight; // Force reflow
                
                // Set transition BEFORE changing opacity for browsers to properly animate
                preloader.style.transition = "opacity 1s ease-out";
                
                // Add a small delay to ensure transition is registered
                setTimeout(function() {
                    // Now change the opacity for fade effect
                    preloader.style.opacity = "0";
                    
                    // Remove element after transition completes
                    setTimeout(function() {
                        if (preloader.parentNode) {
                            console.log("CSP Preloader Removed");
                            preloader.parentNode.removeChild(preloader);
                        }
                    }, 1050); // Slightly longer than transition time to ensure completion
                }, 20); // Short delay to ensure transition is applied
            } else {
                // If not ready yet, check again in a short while
                const remainingTimeForMin = Math.max(0, cspSettings.minimumTime - elapsedTime);
                const checkAgainTime = svgLoaded ? remainingTimeForMin : 100;
                
                console.log("CSP Not ready to remove:", (svgLoaded ? "SVG loaded" : "SVG not loaded"), 
                            "Time remaining:", remainingTimeForMin + "ms", 
                            "Checking again in:", checkAgainTime + "ms");
                
                setTimeout(removePreloader, checkAgainTime);
            }
        }
        
        // Start the process of checking when to remove the preloader
        setTimeout(removePreloader, 100);
        
        // Wait for page to load
        window.addEventListener("load", function() {
            console.log("CSP Window Load Event Fired");
            // Don't remove immediately, just initiate a check
            setTimeout(removePreloader, 100);
        });
        
        // Fallback: ensure preloader is removed after max time to prevent it getting stuck
        setTimeout(function() {
            if (document.getElementById("csp-preloader")) {
                console.warn("CSP Force Removing Preloader After Timeout");
                svgLoaded = true;
                removePreloader();
            }
        }, cspSettings.minimumTime + 5000);
    }
    
    // Execute preloader creation immediately
    createPreloader();
})();
