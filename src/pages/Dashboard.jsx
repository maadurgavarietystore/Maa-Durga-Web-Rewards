import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate }
from "react-router-dom";

import Webcam
from "react-webcam";

import { supabase }
from "../firebase/supabase";

import Tesseract
from "tesseract.js";

function Dashboard() {

  const navigate = useNavigate();

  const webcamRef = useRef(null);

  // current user
  const storedUser =
    localStorage.getItem("user");

  const user =
    storedUser
      ? JSON.parse(storedUser)
      : null;

  // reward input
  const [rewardCode, setRewardCode] =
    useState("");

  // gifts
  const [gifts, setGifts] =
    useState([]);

  // scanning state
  const [isScanning, setIsScanning] =
    useState(false);

  // no user
  if (!user) {

    return (
      <div className="dashboard">
        <h2>No User Found</h2>
      </div>
    );

  }

  // LIVE CAMERA OCR
  async function scanCodeFromCamera() {

    try {

      setIsScanning(true);

      // capture image
      const imageSrc =
        webcamRef.current.getScreenshot();

      if (!imageSrc) {

        alert(
          "Camera image not captured"
        );

        setIsScanning(false);

        return;

      }

      // OCR detect
      const {
        data: { text }
      } =
        await Tesseract.recognize(
          imageSrc,
          "eng"
        );

      // clean text
      const cleanedText =
        text
          .replace(/\s/g, "")
          .trim();

      // autofill reward input
      setRewardCode(cleanedText);

      alert(
        `Detected Code: ${cleanedText}`
      );

      setIsScanning(false);

    } catch (err) {

      console.log(err);

      alert(
        "Failed to scan code"
      );

      setIsScanning(false);

    }
  }

  // FETCH GIFTS
  async function fetchGifts() {

    const { data, error } =
      await supabase
        .from("gifts")
        .select("*");

    if (error) {

      alert(error.message);

      return;

    }

    setGifts(data);
  }

  // AUTO FETCH
  useEffect(() => {

    fetchGifts();

  }, []);

  // CLAIM REWARD
  async function handleRewardClaim() {

    try {

      if (!rewardCode) {

        alert(
          "Please enter reward code"
        );

        return;

      }

      // find reward code
      const {
        data,
        error
      } =
        await supabase
          .from("reward_codes")
          .select("*")
          .eq("code", rewardCode)
          .single();

      // invalid
      if (error || !data) {

        alert("Invalid reward code");

        return;

      }

      // already used
      if (data.is_used) {

        alert("Code already used");

        return;

      }

      // dynamic points
      const rewardPoints =
        Number(data.points || 1);

      // updated coins
      const updatedCoins =
        Number(user.coins || 0)
        + rewardPoints;

      // update user
      const {
        error: userError
      } =
        await supabase
          .from("users")
          .update({
            coins: updatedCoins
          })
          .eq("id", user.id);

      if (userError) {

        alert(
          JSON.stringify(userError)
        );

        return;

      }

      // mark reward used
      const {
        error: rewardError
      } =
        await supabase
          .from("reward_codes")
          .update({
            is_used: true
          })
          .eq("id", data.id);

      if (rewardError) {

        alert(
          JSON.stringify(rewardError)
        );

        return;

      }

      // wallet history
      const {
        error: historyError
      } =
        await supabase
          .from("wallet_history")
          .insert([
            {
              user_id: null,
              transaction_type:
                "Reward Claimed",
              points: rewardPoints,
              reward_code: rewardCode,
              product_name:
                "Maa Durga Product"
            }
          ]);

      if (historyError) {

        alert(
          JSON.stringify(historyError)
        );

        return;

      }

      // update local user
      const updatedUser = {
        ...user,
        coins: updatedCoins
      };

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      alert(
        `${rewardPoints} coins added successfully`
      );

      navigate("/dashboard");

      window.location.reload();

    } catch (err) {

      alert(
        JSON.stringify(err)
      );

      console.log(err);

    }
  }

  // REDEEM GIFT
  async function redeemGift(gift) {

    // insufficient balance
    if (
      Number(user.coins)
      <
      Number(gift.required_coins)
    ) {

      alert(
        "Not enough coins"
      );

      return;

    }

    // remaining coins
    const remainingCoins =
      Number(user.coins)
      -
      Number(gift.required_coins);

    // update user coins
    const { error } =
      await supabase
        .from("users")
        .update({
          coins: remainingCoins
        })
        .eq("id", user.id);

    if (error) {

      alert(error.message);

      return;

    }

    // redemption history
    await supabase
      .from("redemption_history")
      .insert([
        {
          user_name: user.name,
          gift_name: gift.gift_name,
          coins_used:
            gift.required_coins
        }
      ]);

    // update local storage
    const updatedUser = {
      ...user,
      coins: remainingCoins
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert(
      `${gift.gift_name} redeemed successfully`
    );

    window.location.reload();
  }

  return (

    <div className="apple-dashboard">

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-left">

          <p className="hero-mini">
            Maa Durga Rewards
          </p>

          <h1 className="hero-title">

            Welcome,
            <br />

            {user.name}

          </h1>

          <p className="hero-description">

            Scan reward codes,
            collect coins and
            redeem premium gifts
            with a seamless experience.

          </p>

        </div>

        {/* COIN DISPLAY */}

        <div className="hero-right">

          <div className="coin-display">

            <span>
              {user.coins}
            </span>

          </div>

          <p className="coin-label">
            Reward Coins
          </p>

        </div>

      </section>

      {/* SCANNER */}

      <section className="scanner-section">

        <div className="scanner-header">

          <p className="section-tag">
            Scanner
          </p>

          <h2>

            Scan your reward
            code instantly.

          </h2>

        </div>

        {/* INPUT */}

        <input
          type="text"
          placeholder="Enter Reward Code"
          value={rewardCode}
          onChange={(e) =>
            setRewardCode(e.target.value)
          }
          className="apple-input"
        />

        {/* CAMERA */}

        <div className="camera-container">

          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{
              width: "100%",
              borderRadius: "40px"
            }}
          />

        </div>

        {/* BUTTONS */}

        <div className="apple-button-row">

          <button
            className="apple-btn"
            onClick={scanCodeFromCamera}
            disabled={isScanning}
          >

            {isScanning
              ? "Scanning..."
              : "Scan Code"}

          </button>

          <button
            className="apple-btn secondary-btn-apple"
            onClick={handleRewardClaim}
          >

            Claim Reward

          </button>

        </div>

      </section>

      {/* GIFTS */}

      <section className="gift-section">

        <div className="gift-header">

          <p className="section-tag">
            Premium Rewards
          </p>

          <h2>
            Redeem Gifts
          </h2>

        </div>

        <div className="gift-grid">

          {gifts.map((gift) => (

            <div
              key={gift.id}
              className="gift-card-apple"
            >

              <div>

                <h3>
                  {gift.gift_name}
                </h3>

                <p>

                  {gift.required_coins}
                  {" "}
                  Coins Required

                </p>

              </div>

              <button
                className="gift-btn"
                onClick={() =>
                  redeemGift(gift)
                }
              >

                Redeem

              </button>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <section className="footer-section">

        <button
          className="logout-btn-apple"
          onClick={() => {

            localStorage.removeItem(
              "user"
            );

            navigate("/login");

          }}
        >

          Logout

        </button>

      </section>

    </div>

  );
}

export default Dashboard;