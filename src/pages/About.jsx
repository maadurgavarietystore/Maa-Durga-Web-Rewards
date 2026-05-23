function About() {

  const features = [

    {
      title: "Instant Reward Scanning",
      desc:
        "Scan reward codes instantly using our modern reward platform."
    },

    {
      title: "Secure Loyalty System",
      desc:
        "Transparent and secure reward tracking for every customer."
    },

    {
      title: "Premium Reward Gifts",
      desc:
        "Redeem exciting gifts, shopping benefits and surprise rewards."
    },

    {
      title: "Digital Experience",
      desc:
        "Connecting offline shopping with a modern digital ecosystem."
    }

  ];

  return (

    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-glow"></div>

        <div className="about-hero-content">

          <p className="about-mini-title">

            ABOUT MAA DURGA

          </p>

          <h1>

            Built On Trust.
            <br />
            Powered By Loyalty.

          </h1>

          <p className="about-description">

            Maa Durga Variety Store is more than just
            a store. It is a trusted shopping destination
            built with customer relationships, quality
            service and a modern loyalty ecosystem.

          </p>

        </div>

      </section>

      {/* STORE HISTORY */}

      <section className="about-section">

        <div className="about-grid">

          <div className="about-text">

            <p className="section-mini">

              OUR STORE

            </p>

            <h2>

              Everything You Need,
              <br />
              All In One Place.

            </h2>

            <p>

              Maa Durga Variety Store is a trusted
              local shop located in Diwan Mohalla
              Dulhi Ghat, Patna. Our aim is to
              provide customers with a wide range
              of useful products in one convenient
              place.

              <br /><br />

              We offer quality stationery items,
              gifts and everyday essentials that
              help make daily life easier.

              <br /><br />

              At Maa Durga Variety Store,
              we believe in honest prices,
              good service and building
              long term relationships
              with our customers.

            </p>

          </div>

          <div className="about-visual-card">

            <h3>

              Trusted By
              <br />
              Local Customers

            </h3>

          </div>

        </div>

      </section>

      {/* WHY REWARDS */}

      <section className="about-section">

        <div className="about-grid reverse-grid">

          <div className="about-visual-card">

            <h3>

              Rewarding Loyal Customers

            </h3>

          </div>

          <div className="about-text">

            <p className="section-mini">

              WHY REWARDS

            </p>

            <h2>

              Bringing Offline
              <br />
              Shopping Online

            </h2>

            <p>

              Our loyalty system was created
              to appreciate customers who
              continuously trust our store.

              <br /><br />

              By combining offline shopping
              with digital rewards, we provide
              a smarter and more engaging
              customer experience.

            </p>

          </div>

        </div>

      </section>

      {/* FOUNDER */}

      <section className="about-section">

        <div className="founder-card">

          <p className="section-mini">

            FOUNDER & OWNER

          </p>

          <h2>

            Indrajeet Kumar Rajak

          </h2>

          <p>

            Maa Durga Variety Store was founded
            with the aim of providing quality
            stationery and daily use products
            at honest prices.

            <br /><br />

            Our goal is to make shopping
            simple, affordable and reliable
            for every customer.

            <br /><br />

            Committed to quality,
            affordability and customer trust.

          </p>

        </div>

      </section>

      {/* FEATURES */}

      <section className="about-section">

        <div className="about-heading">

          <p className="section-mini">

            PLATFORM FEATURES

          </p>

          <h2>

            Modern Loyalty
            <br />
            Experience

          </h2>

        </div>

        <div className="features-grid">

          {features.map((item, index) => (

            <div
              key={index}
              className="feature-premium-card"
            >

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* STORE GALLERY */}

      <section className="about-section">

        <div className="about-heading">

          <p className="section-mini">

            STORE EXPERIENCE

          </p>

          <h2>

            Inside Our
            <br />
            Store

          </h2>

        </div>

        <div className="store-gallery">

          <div className="gallery-card">
            Store View
          </div>

          <div className="gallery-card">
            Product Collection
          </div>

          <div className="gallery-card">
            Customer Experience
          </div>

        </div>

      </section>

      {/* VISION */}

      <section className="about-section">

        <div className="vision-card">

          <p className="section-mini">

            OUR VISION

          </p>

          <h2>

            Creating The Future
            <br />
            Of Smart Loyalty

          </h2>

          <p>

            Our mission is to continuously
            improve customer experience
            through rewards, innovation
            and trusted service.

          </p>

        </div>

      </section>

      {/* LOCATION */}

      <section className="about-section">

        <div className="about-heading">

          <p className="section-mini">

            VISIT OUR STORE

          </p>

          <h2>

            Store Location

          </h2>

        </div>

        <div className="location-card">

          <h3>

            Maa Durga Variety Store

          </h3>

          <p>

            Diwan Mohalla Dulhi Ghat,
            Patna, Bihar, India

          </p>

          <a
            href="https://maps.app.goo.gl/zqHDnuLH2oMJUZP99"
            target="_blank"
            rel="noreferrer"
            className="map-button"
          >

            Open In Google Maps

          </a>

        </div>

      </section>

    </div>

  );
}

export default About;