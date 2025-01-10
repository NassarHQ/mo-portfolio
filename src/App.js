import HeroSection from "./components/HeroSection";
import NavigationSection from "./components/NavigationSection";
import AboutSection from "./sections/AboutSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <NavigationSection />
      <AboutSection />
    </div>
  );
}

export default App;