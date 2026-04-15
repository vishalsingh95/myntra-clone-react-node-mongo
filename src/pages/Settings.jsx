import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Styles/SectionPage.css";

export default function Settings() {
  return (
    <>
      <Navbar />
      <main className="section-page">
        <div className="section-hero">
          <div>
            <h1>Account Settings</h1>
            <p>Profile, address, notifications and privacy controls (can be wired to backend later).</p>
          </div>
        </div>

        <section className="section-block">
          <div className="section-title">Settings</div>
          <div className="section-list">
            <div className="section-list-item">
              <div className="section-list-title">Personal information</div>
              <div className="section-list-subtitle">Name, email, phone</div>
            </div>
            <div className="section-list-item">
              <div className="section-list-title">Saved addresses</div>
              <div className="section-list-subtitle">Add/manage delivery addresses</div>
            </div>
            <div className="section-list-item">
              <div className="section-list-title">Notifications</div>
              <div className="section-list-subtitle">Order updates & offers</div>
            </div>
            <div className="section-list-item">
              <div className="section-list-title">Privacy</div>
              <div className="section-list-subtitle">Data & security preferences</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

