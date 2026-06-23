import { useState, useEffect } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function getImages() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10",
        );
        const data = await res.json();
        console.log(data);
        setSlides(data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    }

    getImages();
  }, []);
  return (
    <section className="sliderSec">
      <div className="container">
        <div className="slider">
          <button
            className="prev"
            disabled={currentSlide <= 0}
            onClick={() =>
              setCurrentSlide(
                currentSlide > 0 ? currentSlide - 1 : currentSlide,
              )
            }
          >
            <FaChevronLeft />
          </button>
          <div
            className="sliderContainer"
            style={{ transform: `translateX(calc(100% * ${-currentSlide}))` }}
          >
            {slides.map((slide) => {
              const id = slide.id - 1;
              return (
                <div className="sliderItem" key={id}>
                  <img
                    src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
                    alt={slide.title}
                  />
                  {/* <img src={slide.url} alt={slide.title} /> */}
                  <div className="sliderContent">
                    <p>{id + 1}</p>
                    <h4>{slide.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="sliderDots">
            <ul>
              {slides.map((slide) => {
                const id = slide.id - 1;
                return (
                  <li
                    key={id}
                    className={currentSlide == id ? "active" : ""}
                    onClick={() => setCurrentSlide(id)}
                  >
                    {id + 1}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className="next"
            disabled={currentSlide >= slides.length - 1}
            onClick={() =>
              setCurrentSlide(
                currentSlide < slides.length - 1
                  ? currentSlide + 1
                  : currentSlide,
              )
            }
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
