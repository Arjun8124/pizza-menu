import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
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
  const pizzas = pizzaData;
  // const pizzas = [];
  const num = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {num > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our special stone oven , all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Currently working on our Menu. Thank you for your patience</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { soldOut, photoName, name, ingredients, price } = pizzaObj;
  // if (soldOut) return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  let isOpen;
  if (currentHour >= openHour && currentHour <= closeHour) isOpen = true;
  else isOpen = false;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>
          Sorry we are closed right now.You can find us open from {openHour}:00
          to {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>Hey!! We are open right now! Visit us or order from us online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
