import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Styles/SectionPage.css";

export default function Settings() {
  return (
    <>
      <Navbar />
      <div className="settings-page">
        <div className="settings-page-content">
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Personal information</h2>
              <p className="text-gray-600 mb-2">Name, email, phone</p>
            </div>
          </div>
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Saved addresses</h2>
              <p className="text-gray-600 mb-2">Add/manage delivery addresses</p>
            </div>
          </div>
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Notifications</h2>
              <p className="text-gray-600 mb-2">Order updates & offers</p>
            </div>
          </div>
        </div>
      </div>
      <main className="section-page settings-page bg-gray-100 min-h-screen ">
        <div className="section-hero settings-page-hero">
          <div>
            <h1>Account Settings</h1>
            <p>Profile, address, notifications and privacy controls (can be wired to backend later).</p>
          </div>
        </div>

        <section className="section-block settings-page-content">
          <div className="section-title">Settings</div>
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Personal information</h2>
              <p className="text-gray-600 mb-2">Name, email, phone</p>
            </div>
          </div>
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Saved addresses</h2>
              <p className="text-gray-600 mb-2">Add/manage delivery addresses</p>
            </div>
          </div>
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Notifications</h2>
              <p className="text-gray-600 mb-2">Order updates & offers</p>
            </div>
          </div>
          <div className="settings-page-content-item">
            <div className="settings-page-content-item-text">
              <h2 className="text-xl font-semibold mb-2 settings-page-content-item-text-title">Privacy</h2>
              <p className="text-gray-600 mb-2">Data & security preferences</p>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

