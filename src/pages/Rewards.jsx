function Rewards() {

  const faqData = [

    {
      question:
        "How do reward points work?",

      answer:
        "Buy selected Maa Durga products and enter the reward code from the product packaging to instantly earn reward coins."
    },

    {
      question:
        "How can I redeem gifts?",

      answer:
        "Once you collect enough reward coins, you can redeem exciting gifts directly from your dashboard."
    },

    {
      question:
        "Can reward codes be reused?",

      answer:
        "No. Every reward code is unique and can only be used once."
    },

    {
      question:
        "Do reward points expire?",

      answer:
        "Currently your reward points do not expire and remain safely stored in your account."
    }

  ];

  return (

    <div className="rewards-page">

      {/* HERO */}

      <section className="rewards-hero">

        <div className="rewards-glow"></div>

        <div className="rewards-hero-content">

          <p className="rewards-mini">

            MAA DURGA REWARDS

          </p>

          <h1>

            Earn Rewards
            <br />
            Every Purchase.

          </h1>

          <p className="rewards-description">

            Experience a premium loyalty ecosystem
            where every product purchase unlocks
            exciting benefits, coins and exclusive gifts.

          </p>

          <div className="rewards-buttons">

            <button className="rewards-primary-btn">

              Start Earning

            </button>

            <button className="rewards-secondary-btn">

              Explore Rewards

            </button>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="rewards-section">

        <div className="rewards-heading">

          <p>
            REWARD PROCESS
          </p>

          <h2>

            How Reward
            <br />
            System Works

          </h2>

        </div>

        <div className="rewards-grid">

          <div className="reward-card">

            <span>01</span>

            <h3>
              Buy Products
            </h3>

            <p>

              Purchase selected products
              from Maa Durga Variety Store.

            </p>

          </div>

          <div className="reward-card">

            <span>02</span>

            <h3>
              Scan Code
            </h3>

            <p>

              Scan or enter the reward
              code printed on products.

            </p>

          </div>

          <div className="reward-card">

            <span>03</span>

            <h3>
              Earn Coins
            </h3>

            <p>

              Reward points are instantly
              added to your wallet.

            </p>

          </div>

          <div className="reward-card">

            <span>04</span>

            <h3>
              Redeem Gifts
            </h3>

            <p>

              Use your reward coins
              to unlock premium gifts.

            </p>

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="rewards-section">

        <div className="rewards-heading">

          <p>
            LOYALTY BENEFITS
          </p>

          <h2>

            Premium Benefits
            <br />
            For Loyal Customers

          </h2>

        </div>

        <div className="benefits-grid">

          <div className="benefit-box">

            <h3>
              Instant Rewards
            </h3>

            <p>

              Earn coins instantly
              after successful scans.

            </p>

          </div>

          <div className="benefit-box">

            <h3>
              Premium Gifts
            </h3>

            <p>

              Unlock exciting rewards
              and exclusive gift items.

            </p>

          </div>

          <div className="benefit-box">

            <h3>
              Fast Redemption
            </h3>

            <p>

              Redeem gifts quickly
              without complicated process.

            </p>

          </div>

          <div className="benefit-box">

            <h3>
              Secure System
            </h3>

            <p>

              Safe and transparent
              reward tracking system.

            </p>

          </div>

        </div>

      </section>

      {/* REWARD TIERS */}

      <section className="rewards-section">

        <div className="rewards-heading">

          <p>
            REWARD TIERS
          </p>

          <h2>

            Unlock Better
            <br />
            Reward Levels

          </h2>

        </div>

        <div className="tiers-grid">

          <div className="tier-card">

            <h3>
              Silver
            </h3>

            <h1>
              100+
            </h1>

            <p>

              Beginner level rewards
              and loyalty benefits.

            </p>

          </div>

          <div className="tier-card premium-tier">

            <h3>
              Gold
            </h3>

            <h1>
              500+
            </h1>

            <p>

              Premium gifts and
              faster redemption access.

            </p>

          </div>

          <div className="tier-card">

            <h3>
              Platinum
            </h3>

            <h1>
              1000+
            </h1>

            <p>

              Exclusive customer rewards
              and bonus gifts.

            </p>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="rewards-section">

        <div className="rewards-heading">

          <p>
            FAQ
          </p>

          <h2>

            Frequently Asked
            <br />
            Questions

          </h2>

        </div>

        <div className="faq-grid">

          {faqData.map((item, index) => (

            <div
              key={index}
              className="faq-card"
            >

              <h3>
                {item.question}
              </h3>

              <p>
                {item.answer}
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>

  );
}

export default Rewards;