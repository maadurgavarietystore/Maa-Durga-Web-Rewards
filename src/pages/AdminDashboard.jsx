import {
  useState,
  useEffect
} from "react";

import { useNavigate }
from "react-router-dom";

import { supabase }
from "../firebase/supabase";

function AdminDashboard() {

  const navigate = useNavigate();

  const isAdmin =
    localStorage.getItem("admin");

  // STATES

  const [totalCodes, setTotalCodes] =
    useState("");

  const [generatedCodes, setGeneratedCodes] =
    useState([]);

  const [allCodes, setAllCodes] =
    useState([]);

  const [totalUsers, setTotalUsers] =
    useState(0);

  const [usedCodes, setUsedCodes] =
    useState(0);

  const [totalRedemptions,
    setTotalRedemptions] =
    useState(0);

  const [totalGifts, setTotalGifts] =
    useState(0);

  // SECURITY

  if (!isAdmin) {

    return (

      <div className="admin-access">

        <h1>
          Access Denied
        </h1>

      </div>

    );

  }

  // FETCH DATA

  async function fetchAnalytics() {

    // USERS

    const {
      data: usersData
    } =
      await supabase
        .from("users")
        .select("*");

    setTotalUsers(
      usersData?.length || 0
    );

    // CODES

    const {
      data: codesData
    } =
      await supabase
        .from("reward_codes")
        .select("*");

    setAllCodes(codesData || []);

    // USED

    const used =
      codesData?.filter(
        (item) => item.is_used
      );

    setUsedCodes(
      used?.length || 0
    );

    // GIFTS

    const {
      data: giftsData
    } =
      await supabase
        .from("gifts")
        .select("*");

    setTotalGifts(
      giftsData?.length || 0
    );

    // REDEMPTIONS

    const {
      data: redemptionData
    } =
      await supabase
        .from("redemption_history")
        .select("*");

    setTotalRedemptions(
      redemptionData?.length || 0
    );
  }

  // AUTO FETCH

  useEffect(() => {

    fetchAnalytics();

  }, []);

  // GENERATE CODES

  async function generateRewardCodes() {

    if (!totalCodes) {

      alert(
        "Enter number of codes"
      );

      return;

    }

    const codesArray = [];

    for (
      let i = 0;
      i < Number(totalCodes);
      i++
    ) {

      const randomCode =
        "MDVS" +
        Math.floor(
          1000 +
          Math.random() * 9000
        );

      codesArray.push({

        code: randomCode,

        is_used: false,

        points: 1

      });

    }

    const { error } =
      await supabase
        .from("reward_codes")
        .insert(codesArray);

    if (error) {

      alert(error.message);

      return;

    }

    setGeneratedCodes(codesArray);

    alert(
      `${totalCodes} codes generated`
    );

    fetchAnalytics();
  }

  return (

    <div className="modern-admin-page">

      {/* TOPBAR */}

      <div className="modern-admin-topbar">

        <div>

          <p className="admin-label">
            Maa Durga Rewards
          </p>

          <h1>
            Admin Dashboard
          </h1>

        </div>

        <button
          className="modern-logout-btn"
          onClick={() => {

            localStorage.removeItem(
              "admin"
            );

            navigate("/admin");

          }}
        >

          Logout

        </button>

      </div>

      {/* ANALYTICS */}

      <div className="modern-analytics-grid">

        <div className="modern-stat-card">

          <h2>
            {totalUsers}
          </h2>

          <p>
            Total Users
          </p>

        </div>

        <div className="modern-stat-card">

          <h2>
            {allCodes.length}
          </h2>

          <p>
            Total Codes
          </p>

        </div>

        <div className="modern-stat-card">

          <h2>
            {usedCodes}
          </h2>

          <p>
            Used Codes
          </p>

        </div>

        <div className="modern-stat-card">

          <h2>
            {totalRedemptions}
          </h2>

          <p>
            Redemptions
          </p>

        </div>

      </div>

      {/* GENERATOR */}

      <div className="modern-admin-section">

        <div className="section-top">

          <div>

            <h2>
              Generate Reward Codes
            </h2>

            <p>
              Create reward codes instantly
            </p>

          </div>

        </div>

        <div className="modern-generator">

          <input
            type="number"
            placeholder="Enter number of reward codes"
            value={totalCodes}
            onChange={(e) =>
              setTotalCodes(e.target.value)
            }
            className="modern-admin-input"
          />

          <button
            className="generate-modern-btn"
            onClick={generateRewardCodes}
          >

            Generate Codes

          </button>

        </div>

      </div>

      {/* GENERATED CODES */}

      {generatedCodes.length > 0 && (

        <div className="modern-admin-section">

          <div className="section-top">

            <h2>
              Generated Codes
            </h2>

          </div>

          <div className="generated-codes-grid">

            {generatedCodes.map(
              (item, index) => (

                <div
                  key={index}
                  className="generated-code-box"
                >

                  {item.code}

                </div>

              )
            )}

          </div>

        </div>

      )}

      {/* TABLE */}

      <div className="premium-table-section">

        <div className="premium-table-header">

          <div>

            <p className="table-mini-text">
              REWARD DATABASE
            </p>

            <h2>
              Reward Code Activity
            </h2>

          </div>

          <div className="table-stats-box">

            Total:
            {" "}
            {allCodes.length}

          </div>

        </div>

        <div className="premium-table-wrapper">

          <table className="premium-table">

            <thead>

              <tr>

                <th>
                  Reward Code
                </th>

                <th>
                  Points
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {allCodes.map(
                (item) => (

                  <tr
                    key={item.id}
                  >

                    <td className="code-column">

                      {item.code}

                    </td>

                    <td>

                      {item.points || 1}

                    </td>

                    <td>

                      <span
                        className={
                          item.is_used
                            ? "status-used"
                            : "status-unused"
                        }
                      >

                        {item.is_used
                          ? "Used"
                          : "Unused"}

                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;