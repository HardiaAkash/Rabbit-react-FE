import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const [timeOut, setTimeOut] = useState(5); // Initialize countdown
  const navigate = useNavigate(); // React Router's navigate function

  // Countdown and automatic redirect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOut((prev) => prev - 1);
    }, 1000);

    // Redirect to home when countdown reaches 0
    if (timeOut === 0) {
      navigate("/");
    }

    // Cleanup interval
    return () => clearInterval(interval);
  }, [timeOut, navigate]);

  // Manual redirect on button click
  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl text-center mt-20 font-bold">
        Requested resource not found
      </h1>
      <p>You'll be redirected in {timeOut} seconds</p>
      <button
        onClick={handleRedirect}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home Now
      </button>
    </div>
  );
}

export default Notfound;
