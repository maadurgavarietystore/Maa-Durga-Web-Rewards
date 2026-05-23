import { useState } from "react";

import emailjs
from "@emailjs/browser";

function Contact() {

  const [userEmail, setUserEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [isSending, setIsSending] =
    useState(false);

  const faqs = [

    {
      question:
        "How do reward points work?",

      answer:
        "Customers receive reward points after purchasing selected products and entering reward codes."
    },

    {
      question:
        "Can reward codes be reused?",

      answer:
        "No. Every reward code can only be used once."
    },

    {
      question:
        "How can I redeem gifts?",

      answer:
        "Collected reward coins can be redeemed directly from the rewards dashboard."
    },

    {
      question:
        "How can I contact support?",

      answer:
        "You can use the support form below to directly contact our store support team."
    }

  ];

  // SEND EMAIL

  async function handleSendMessage() {

    if (!userEmail || !message) {

      alert(
        "Please fill all fields"
      );

      return;

    }

    try {

      setIsSending(true);

      await emailjs.send(

        "service_37h8eqc",

        "template_usi28pc",

        {

          user_email: userEmail,

          message: message

        },

        "FYJ7CuthDyNmpDcHj"

      );

      alert(
        "Message sent successfully"
      );

      setUserEmail("");

      setMessage("");

      setIsSending(false);

    } catch (error) {

      console.log(error);

      alert(
        "Failed to send message"
      );

      setIsSending(false);

    }

  }

  return (

    <div className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-hero-glow"></div>

        <div className="contact-hero-content">

          <p className="contact-mini">

            CONTACT US

          </p>

          <h1>

            Let's Connect.

          </h1>

          <p>

            Need support, have questions,
            or want to know more about
            Maa Durga Rewards?
            We're here to help you.

          </p>

        </div>

      </section>

      {/* CONTACT INFO */}

      <section className="contact-section">

        <div className="contact-grid">

          <div className="contact-card">

            <h3>
              Store Address
            </h3>

            <p>

              Maa Durga Variety Store
              <br />
              Diwan Mohalla Dulhi Ghat,
              Patna, Bihar, India

            </p>

          </div>

          <div className="contact-card">

            <h3>
              Phone Number
            </h3>

            <p>

              +91 9999999999

            </p>

          </div>

          <div className="contact-card">

            <h3>
              Store Email
            </h3>

            <p>

              maadurgastore@gmail.com

            </p>

          </div>

        </div>

      </section>

      {/* SOCIAL */}

      <section className="contact-section">

        <div className="social-box">

          <p className="contact-mini">

            FOLLOW US

          </p>

          <h2>

            Connect On Instagram

          </h2>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram-button"
          >

            Instagram

          </a>

        </div>

      </section>

      {/* FAQ */}

      <section className="contact-section">

        <div className="faq-heading">

          <p className="contact-mini">

            FAQ

          </p>

          <h2>

            Frequently Asked
            Questions

          </h2>

        </div>

        <div className="faq-grid">

          {faqs.map((item, index) => (

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

      {/* SUPPORT FORM */}

      <section className="contact-section">

        <div className="support-box">

          <p className="contact-mini">

            SUPPORT

          </p>

          <h2>

            Describe Your Problem

          </h2>

          <p className="support-text">

            Enter your email address
            and explain your issue.
            Our support team will
            contact you soon.

          </p>

          <input
            type="email"
            placeholder="Your Gmail Address"
            className="support-input"
            value={userEmail}
            onChange={(e) =>
              setUserEmail(e.target.value)
            }
          />

          <textarea
            placeholder="Describe your problem..."
            className="support-textarea"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          ></textarea>

          <button
            className="support-button"
            onClick={handleSendMessage}
          >

            {isSending
              ? "Sending..."
              : "Send Message"}

          </button>

        </div>

      </section>

    </div>

  );
}

export default Contact;