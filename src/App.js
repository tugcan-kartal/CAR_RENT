import BookCarView from "./features/BookCarView";
import HeroSection from "./features/HeroSection";
import Navbar from "./features/Navbar";
import PlanTrip from "./features/PlanTrip";
import VehicleModels from "./features/VehicleModels";

function App() {
  return (
    <div className="App">
      <div className="bg-[url('./static/wallpaper.jpg')] bg-left h-screen">
        <Navbar />   
        <HeroSection />   
      </div>
      <BookCarView />
      <PlanTrip />
      <VehicleModels />
    </div>
  );
}

export default App;
