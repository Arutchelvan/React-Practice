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
              <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 1</h4>
                <p>Slider Description 1</p>
              </div>
            </div>
            <div className="sliderItem">
              <img src="https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 2</h4>
                <p>Slider Description 2</p>
              </div>
            </div>
            <div className="sliderItem">
              <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 3</h4>
                <p>Slider Description 3</p>
              </div>
            </div>
            <div className="sliderItem">
              <img src="https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_1280.jpg" />
              <div className="sliderContent">
                <h4>Slider Title 4</h4>
                <p>Slider Description 4</p>
              </div>
            </div>
          </div>
          <div className="sliderDots">
            <ul>
              <li
                className={currentSlide == 0 ? "active" : ""}
                onClick={() => setCurrentSlide(0)}
              ></li>
              <li
                className={currentSlide == 1 ? "active" : ""}
                onClick={() => setCurrentSlide(1)}
              ></li>
              <li
                className={currentSlide == 2 ? "active" : ""}
                onClick={() => setCurrentSlide(2)}
              ></li>
              <li
                className={currentSlide == 3 ? "active" : ""}
                onClick={() => setCurrentSlide(3)}
              ></li>
            </ul>
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
