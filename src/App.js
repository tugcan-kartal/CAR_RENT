import HeroSection from "./features/HeroSection";
import Navbar from "./features/Navbar";

function App() {
  return (
    <div className="App">
      <div className="bg-[url('./static/wallpaper.jpg')] bg-left h-screen">
        <Navbar />   
        <HeroSection />   
      </div>
    </div>
  );
}

export default App;
