import Header from "./components/Header";
import Footer from "./components/Footer";
// import Hello from "./components/Hello";
import ProfileCard from "./components/ProfileCard";
import avatar from "./components/ryan-spencer-c-NEiPIxpYI-unsplash.jpg";   // <--- correct import

function App() {
  return (
    <div className="App" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", padding: 16 }}>
      <Header />
      <main style={{ marginTop: 16 }}>
        {/* <Hello /> */}
        <div style={{ marginTop: 16 }}>
          <ProfileCard
            name="Vatsal Agarwal"
            role="Frontend Developer"
            bio="Building interactive UIs with React."
            avatarUrl={avatar}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
