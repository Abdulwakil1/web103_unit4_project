import React from "react";
import "../App.css";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      {/* TOP ROW */}
      <div className="nav-top">
        <h1>Bolt Bucket 🏎️</h1>
        <div className="nav-top-buttons">
          <a href="/" role="button" className="btn-primary">
            Customize
          </a>
          <a href="/customcars" role="button" className="btn-primary">
            View Cars
          </a>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="nav-bottom">
        <div className="nav-bottom-left">
          <label className="checkbox-container">
            <input type="checkbox" />
            <span>Convertible</span>
          </label>

          <button className="btn-ghost">Exterior</button>
          <button className="btn-ghost">Roof</button>
          <button className="btn-ghost">Wheels</button>
          <button className="btn-ghost">Interior</button>
        </div>

        <div className="nav-input-group">
          <input type="text" placeholder="My New Car" />
          <button className="btn-create">Create</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
