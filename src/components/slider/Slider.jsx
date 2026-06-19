import { useState } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            <div className="sliderItem">
              <img src="https://picsum.photos/id/17/2500/1667.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 1</h4>
                <p>Slider Description 1</p>
              </div>
            </div>
            <div className="sliderItem">
              <img src="https://picsum.photos/id/11/2500/1667.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 2</h4>
                <p>Slider Description 2</p>
              </div>
            </div>
            <div className="sliderItem">
              <img src="https://picsum.photos/id/12/2500/1667.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 3</h4>
                <p>Slider Description 3</p>
              </div>
            </div>
            <div className="sliderItem">
              <img src="https://picsum.photos/id/13/2500/1667.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 4</h4>
                <p>Slider Description 4</p>
              </div>
            </div>
          </div>
          <button
            className="next"
            disabled={currentSlide >= 3}
            onClick={() =>
              setCurrentSlide(
                currentSlide < 3 ? currentSlide + 1 : currentSlide,
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
