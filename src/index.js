import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        imageName="pizzas/funghi.jpg"
        price={14}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        imageName="pizzas/spinaci.jpg"
        price={20}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        imageName="pizzas/margherita.jpg"
        price={12}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.imageName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 5}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()} We're Currently Open!</p>
    </footer>
  );
}

//React version 18
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
