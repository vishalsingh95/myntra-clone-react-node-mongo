import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { toast } from "react-toastify";

import "./Styles/SectionPage.css";

export default function Feedback() {
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    toast.success("Thanks! Feedback submitted.");
    setMessage("");
    setRating(5);
  };

  return (
    <>
      <Navbar />
      <main className="section-page">
        <div className="section-hero">
          <div>
            <h1>Feedback</h1>
            <p>Tell us what to improve. Later we can store this in your backend.</p>
          </div>
        </div>

        <section className="section-block">
          <div className="section-title">Submit feedback</div>
          <form className="section-form" onSubmit={submit}>
            <label className="section-label">
              Rating
              <select
                className="section-input"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <label className="section-label">
              Message
              <textarea
                className="section-input section-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your feedback..."
                rows={5}
              />
            </label>

            <button className="section-primary" type="submit">
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

