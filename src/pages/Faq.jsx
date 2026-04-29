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

const brandPartnerships = [
  { q: "How can I partner with Myntra?", a: "Sell on Myntra: Sell your brand’s products on India's biggest fashion destination." },
  { q: "How to send your brand to Myntra?", a: "Log in to Myntra Brand Portal → complete brand profile, upload collection → submit for review." },
  { q: "How do I contact support?", a: "Open Customer Support for FAQs and contact options." },
];

const becomeInfluencer = [
  { q: "How can I partner with Myntra?", a: "Sell on Myntra: Sell your brand’s products on India's biggest fashion destination." },
  { q: "How to send your brand to Myntra?", a: "Log in to Myntra Brand Portal → complete brand profile, upload collection → submit for review." },
  { q: "How do I contact support?", a: "Open Customer Support for FAQs and contact options." },
];

const partnerWithUs = [
  { q: "How can I partner with Myntra?", a: "Sell on Myntra: Sell your brand’s products on India's biggest fashion destination." },
  { q: "How to send your brand to Myntra?", a: "Log in to Myntra Brand Portal → complete brand profile, upload collection → submit for review." },
  { q: "How do I contact support?", a: "Open Customer Support for FAQs and contact options." },
];

const legal = [
  { q: "Returns & Refunds", a: "Most items can be returned within 30 days. Check item eligibility on product pages." },
  { q: "Privacy Policy", a: "Your data is encrypted and protected. We share it only with service partners as needed." },
  { q: "Terms of Use", a: "By using Myntra, you agree to our T&Cs. Read full version for details." },
];


export default function Faq() {
  return (
    <>
      <Navbar />
      <main className="section-page item-text-bg min-h-screen">
        <div className="section-hero item-text-bg min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-2">FAQ</h1>
            <p className="text-gray-600 mb-4">Common questions and answers.</p>
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

