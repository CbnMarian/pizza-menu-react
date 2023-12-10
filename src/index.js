import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      {" "}
      <h1>Hello</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <img src="/pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
