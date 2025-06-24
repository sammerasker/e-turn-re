import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/80 mb-4">Oops! Page not found</p>
        <a href="/" className="text-[#FF9F1C] hover:text-[#FF9F1C]/80 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
