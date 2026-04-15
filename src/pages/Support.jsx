import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Styles/SectionPage.css";

const faqs = [
  { q: "Where is my order?", a: "Go to Orders to track shipment status and delivery updates." },
  { q: "How do I return an item?", a: "Open Orders → select item → choose Return/Exchange." },
  { q: "How do refunds work?", a: "Refunds are processed after pickup/verification to your original payment method." },
];

export default function Support() {
  return (
    <>
      <Navbar />
      <main className="section-page">
        <div className="section-hero">
          <div>
            <h1>Customer Support</h1>
            <p>Help center, FAQs and contact options.</p>
          </div>
        </div>

        <section className="section-block">
          <div className="section-title">Quick help</div>
          <div className="section-list">
            {faqs.map((f) => (
              <div key={f.q} className="section-list-item">
                <div className="section-list-title">{f.q}</div>
                <div className="section-list-subtitle">{f.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

