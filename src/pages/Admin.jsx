import { useState } from "react";

import { useNavigate }
from "react-router-dom";

function Admin() {

  const navigate = useNavigate();

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  // ADMIN LOGIN
  function handleAdminLogin() {

    if (
      phone === "9999999999"
      &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "admin",
        "true"
      );

      alert(
        "Admin Login Successful"
      );

      navigate("/admin-dashboard");

    } else {

      alert(
        "Invalid Admin Credentials"
      );

    }
  }

  return (

    <div className="premium-auth-page">

      {/* GLOW */}

      <div className="auth-glow auth-glow-1"></div>

      <div className="auth-glow auth-glow-2"></div>

      {/* LEFT SIDE */}

      <div className="premium-auth-left">

        <p className="auth-mini-text">
          Maa Durga Admin
        </p>

        <h1>

          Control
          <br />

          Everything.

        </h1>

        <p className="auth-description">

          Manage rewards, gifts,
          scans, customers and
          analytics through the
          premium admin dashboard.

        </p>

        {/* FEATURE ROW */}

        <div className="auth-feature-row">

          <div className="auth-feature-card">

            <h3>
              Reward Control
            </h3>

            <p>
              Create and manage
              reward systems easily.
            </p>

          </div>

          <div className="auth-feature-card">

            <h3>
              Live Analytics
            </h3>

            <p>
              Monitor user activity
              and redemption data.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="premium-auth-right">

        <div className="premium-auth-box">

          <div className="auth-top">

            <h2>
              Admin Login
            </h2>

            <p>
              Access the secure
              management dashboard.
            </p>

          </div>

          {/* INPUTS */}

          <div className="premium-input-group">

            <input
              type="text"
              placeholder="Admin Phone"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="premium-auth-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="premium-auth-input"
            />

          </div>

          {/* BUTTON */}

          <button
            className="premium-auth-btn"
            onClick={handleAdminLogin}
          >

            Access Dashboard

          </button>

        </div>

      </div>

    </div>

  );
}

export default Admin;