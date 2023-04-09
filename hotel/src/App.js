import './App.css';
import Header from './components/header';
// import Banner from './components/banner';
import Booking from './components/booking';
import About from './components/about';
import Footer from './components/footer';
import CarouselImages from './components/carousel-img';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselImages/>
      {/* <Banner/> */}
      <About/>
      <Booking />
      <Footer/>
    </div>
  );
}

export default App;
