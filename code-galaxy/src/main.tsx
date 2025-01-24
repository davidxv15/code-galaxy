import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return <div className="text-center text-xl">Hello, Template!</div>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
