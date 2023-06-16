import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Header from "./components/Header";
import CartOverview from "./components/CartOverview";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <CartOverview />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
