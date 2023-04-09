import img1 from './../images/hotel1.jpg';
import img11 from './../images/hotel11.jpg';
import img2 from './../images/hotel2.jpg';
import img3 from './../images/hotel3.png';
import img4 from './../images/hotel4.jpg';
import img5 from './../images/hotel5.jpg';
import './banner.css';

function Banner() {
  return (
    // <div className="">
    //   <div className="">
    //     <img src={logo} className="banner-img" alt="banner" />
    //   </div>
    // </div>


    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={img11} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img3} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img4} alt="Fourth slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img5} alt="Fifth slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* <span class="sr-only">Previous</span> */}
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        {/* <span class="sr-only">Next</span> */}
      </a>
    </div>



  );
}

export default Banner;
