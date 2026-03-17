import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Styles/SectionPage.css";

const items = [
  {
    q: "Do you offer free shipping?",
    a: "Shipping is free above a cart value threshold (you can tune it later).",
  },
  {
    q: "Can I cancel an order?",
    a: "Cancellation is available until the order is packed/shipped.",
  },
  {
    q: "How do I contact support?",
    a: "Open Customer Support for FAQs and contact options.",
  },
];

export default function Faq() {
  return (
    <>
      <Navbar />
      <main className="section-page">
        <div className="section-hero">
          <div>
            <h1>FAQ</h1>
            <p>Common questions and answers.</p>
          </div>
        </div>

        <section className="section-block">
          <div className="section-title">Frequently asked questions</div>
          <div className="section-list">
            {items.map((it) => (
              <div key={it.q} className="section-list-item">
                <div className="section-list-title">{it.q}</div>
                <div className="section-list-subtitle">{it.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

