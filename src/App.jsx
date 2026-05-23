import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

// ADMIN IMPORTS
import Admin from "./pages/Admin";

import AdminDashboard
from "./pages/AdminDashboard";

function App() {

  return (

    <HashRouter>

      <div className="app">

        {/* HEADER */}
        <header className="header">

          <div className="logo-section">

            <img
              src="/logo.png"
              alt="Maa Durga Variety Store"
              className="logo"
            />

            <div>

              <h1>
                Maa Durga Variety Store
              </h1>

              <p>
                Everything You Need,
                All In One Place
              </p>

            </div>

          </div>

          <nav>

            <Link to="/">
              Home
            </Link>

            <Link to="/rewards">
              Rewards
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/login">
              Login
            </Link>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/admin">
              Admin
            </Link>

          </nav>

        </header>

        {/* ROUTES */}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/rewards"
            element={<Rewards />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* ADMIN ROUTES */}

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />

        </Routes>

      </div>

    </HashRouter>

  );
}

export default App;