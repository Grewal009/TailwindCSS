import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1 className="m-5 text-4xl font-semibold text-green-600 hover:text-pink-600 ">
        Hello TailwindCSS
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
