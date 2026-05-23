import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="modern-homepage">

      {/* HERO SECTION */}

      <section className="ultra-hero-section">

        <div className="hero-noise"></div>

        <div className="floating-glow glow-one"></div>
        <div className="floating-glow glow-two"></div>

        <div className="ultra-hero-left">

          <p className="hero-mini-text">
            Maa Durga Variety Store
          </p>

          <h1>
            Everything
            <br />
            You Need.
            <br />
            All In One Place.
          </h1>

          <p className="hero-main-description">
            Discover a modern shopping experience with
            Maa Durga Variety Store. Buy quality stationery,
            gifts, daily essentials and unlock premium
            reward benefits directly from our website.
          </p>

          <div className="hero-button-group">

            <Link to="/rewards">

              <button className="hero-main-btn">
                Explore Rewards
              </button>

            </Link>

            <Link to="/login">

              <button className="hero-outline-btn">
                Login / Signup
              </button>

            </Link>

          </div>

        </div>

        {/* RIGHT VISUAL */}

        <div className="ultra-hero-right">

          <div className="hero-phone-card">

            <div className="phone-top-bar"></div>

            <div className="hero-phone-content">

              <div className="reward-coin-box">

                <span>
                  250+
                </span>

                <p>
                  Reward Coins
                </p>

              </div>

              <div className="phone-feature-card">

                <h3>
                  Instant Rewards
                </h3>

                <p>
                  Scan reward codes and
                  collect loyalty points.
                </p>

              </div>

              <div className="phone-feature-card">

                <h3>
                  Premium Gifts
                </h3>

                <p>
                  Redeem coins for exciting
                  rewards and offers.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WEBSITE INTRO */}

      <section className="website-intro-section">

        <div className="intro-heading-box">

          <p className="section-mini-title">
            ABOUT OUR WEBSITE
          </p>

          <h2>
            A modern loyalty platform
            designed for our customers.
          </h2>

        </div>

        <div className="intro-grid">

          <div className="intro-card">

            <h3>
              Smart Reward System
            </h3>

            <p>
              Purchase selected products from
              our store and unlock exclusive
              reward points instantly.
            </p>

          </div>

          <div className="intro-card">

            <h3>
              Easy To Use
            </h3>

            <p>
              Create your account, enter reward
              codes and redeem gifts through a
              premium and modern experience.
            </p>

          </div>

          <div className="intro-card">

            <h3>
              Customer Loyalty
            </h3>

            <p>
              We value our customers and reward
              them with exciting benefits,
              offers and loyalty gifts.
            </p>

          </div>

        </div>

      </section>

      {/* REWARD SHOWCASE */}

      <section className="reward-showcase-section">

        <div className="reward-showcase-left">

          <p className="section-mini-title">
            REWARD EXPERIENCE
          </p>

          <h2>
            Shop.
            <br />
            Scan.
            <br />
            Earn Rewards.
          </h2>

          <p>
            Our loyalty system allows customers
            to collect reward points using unique
            reward codes available on selected
            products purchased from our store.
          </p>

          <Link to="/rewards">

            <button className="hero-main-btn">
              View Rewards Page
            </button>

          </Link>

        </div>

        <div className="reward-showcase-right">

          <div className="reward-big-card">

            <h3>
              Premium Loyalty Benefits
            </h3>

            <ul>

              <li>
                ✔ Instant reward points
              </li>

              <li>
                ✔ Exciting gift redemption
              </li>

              <li>
                ✔ Special customer benefits
              </li>

              <li>
                ✔ Modern digital experience
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* ACCOUNT SECTION */}

      <section className="account-cta-section">

        <div className="account-cta-box">

          <p className="section-mini-title">
            GET STARTED
          </p>

          <h2>
            Create your account
            and start earning.
          </h2>

          <p>
            Join our digital rewards platform
            today and unlock premium loyalty
            benefits directly from our store.
          </p>

          <div className="hero-button-group">

            <Link to="/login">

              <button className="hero-main-btn">
                Create Account
              </button>

            </Link>

            <Link to="/login">

              <button className="hero-outline-btn">
                Login Now
              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* ABOUT CTA */}

      <section className="about-preview-section">

        <div className="about-preview-left">

          <p className="section-mini-title">
            OUR STORY
          </p>

          <h2>
            Built on trust,
            service and
            customer loyalty.
          </h2>

          <p>
            Maa Durga Variety Store was founded
            with the vision of providing quality
            products with honest pricing and a
            modern shopping experience.
          </p>

          <Link to="/about">

            <button className="hero-main-btn">
              About Our Store
            </button>

          </Link>

        </div>

        <div className="about-preview-right">

          <div className="about-image-box">

            <span>
              Maa Durga
              <br />
              Variety Store
            </span>

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="contact-preview-section">

        <div className="contact-preview-box">

          <p className="section-mini-title">
            NEED HELP?
          </p>

          <h2>
            Contact our support team.
          </h2>

          <p>
            Have questions about rewards,
            redemption or our products?
            Our support team is here to help.
          </p>

          <Link to="/contact">

            <button className="hero-main-btn">
              Contact Us
            </button>

          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="premium-home-footer">

        <h2>
          Maa Durga Variety Store
        </h2>

        <p>
          Diwan Mohalla Dulhi Ghat,
          Patna, Bihar
        </p>

        <div className="footer-socials">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram-icon-button"
          >
            📸
          </a>

        </div>

      </footer>

    </div>

  );
}

export default Home;