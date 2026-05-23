import { useState } from "react";

import { useNavigate }
from "react-router-dom";

import { supabase }
from "../firebase/supabase";

function Login() {

  const navigate = useNavigate();

  const [isSignup, setIsSignup] =
    useState(false);

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  // SIGNUP
  async function handleSignup() {

    if (!name || !phone || !password) {

      alert("Please fill all fields");

      return;

    }

    // existing user
    const {
      data: existingUser
    } =
      await supabase
        .from("users")
        .select("*")
        .eq("phone", phone)
        .single();

    if (existingUser) {

      alert(
        "Phone already registered"
      );

      return;

    }

    // create account
    const { error } =
      await supabase
        .from("users")
        .insert([
          {
            name,
            phone,
            password,
            coins: 0
          }
        ]);

    if (error) {

      alert(error.message);

      console.log(error);

    } else {

      alert(
        "Account created successfully"
      );

      setIsSignup(false);

      setName("");

      setPhone("");

      setPassword("");

    }
  }

  // LOGIN
  async function handleLogin() {

    if (!phone || !password) {

      alert("Fill all fields");

      return;

    }

    const {
      data,
      error
    } =
      await supabase
        .from("users")
        .select("*")
        .eq("phone", phone)
        .eq("password", password)
        .single();

    if (error || !data) {

      alert("Invalid credentials");

    } else {

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      alert("Login successful");

      navigate("/dashboard");

    }
  }

  return (

    <div className="premium-auth-page">

      {/* BACKGROUND GLOW */}

      <div className="auth-glow auth-glow-1"></div>

      <div className="auth-glow auth-glow-2"></div>

      {/* LEFT SIDE */}

      <div className="premium-auth-left">

        <p className="auth-mini-text">
          Maa Durga Rewards
        </p>

        <h1>

          Rewards
          <br />

          Reimagined.

        </h1>

        <p className="auth-description">

          A premium digital reward
          experience built for modern
          shopping and smart redemption.

        </p>

        <div className="auth-feature-row">

          <div className="auth-feature-card">

            <h3>
              Instant Rewards
            </h3>

            <p>
              Scan and earn
              within seconds.
            </p>

          </div>

          <div className="auth-feature-card">

            <h3>
              Smart Wallet
            </h3>

            <p>
              Track and redeem
              reward coins easily.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="premium-auth-right">

        <div className="premium-auth-box">

          <div className="auth-top">

            <h2>

              {isSignup
                ? "Create Account"
                : "Welcome Back"}

            </h2>

            <p>

              {isSignup
                ? "Create your premium rewards account"
                : "Login to continue your reward journey"}

            </p>

          </div>

          {/* INPUTS */}

          <div className="premium-input-group">

            {isSignup && (

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="premium-auth-input"
              />

            )}

            <input
              type="text"
              placeholder="Phone Number"
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
            onClick={
              isSignup
                ? handleSignup
                : handleLogin
            }
          >

            {isSignup
              ? "Create Account"
              : "Login"}

          </button>

          {/* SWITCH */}

          <p
            className="premium-switch-auth"
            onClick={() =>
              setIsSignup(!isSignup)
            }
          >

            {isSignup
              ? "Already have account? Login"
              : "Don't have account? Create Account"}

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;