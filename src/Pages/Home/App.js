import './App.css'
import About from '../../Molecules/About/About';
import Footer from '../../Molecules/Footer/Footer';
import Header from '../../Molecules/Header/Header';
import HeroSection from '../../Molecules/HeroSection/HeroSection';
import Highlights from '../../Molecules/Highlights/Highlightgs';
import Testimonials from '../../Molecules/Testimonials/Testimonial';

function App() {
  return (
    <div className="App flex flex-col bg-white">
      <Header></Header>
      <main>
        <HeroSection></HeroSection>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;