import { useEffect, useState, useCallback } from "react";
import { AngleLeftIcon, AngleRightIcon } from "../assets/svg";

// import { AsyncImage } from "loadable-image";
// import { Blur } from "transitions-kit";

export function Tooltip({ message, children }) {
  return (
    <div className="group relative w-3/4 h-auto">
      {children}
      <span className="absolute top-40 right-24 min-w-[15vw] p-2 pl-8 text-left text-[2rem] font-medium max-w-1/2 text-white text-wrap scale-0 transition-all rounded bg-[rgb(0,0,0,0)] group-hover:scale-100 group-hover:bg-[rgb(0,0,0,0.6)] duration-500 rounded-[1rem]">
        {message}
      </span>
    </div>
  );
}
const DEFAULTS = {
  CHANGE_SLIDE_IN: 4,
};

const Slider = ({ images, label }) => {
  // const imgs = [img1, img2, img3]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(DEFAULTS.CHANGE_SLIDE_IN);
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false);

  const togglePaused = (v) => {
    setPaused((paused) =>
      v !== undefined && !(v instanceof Event) ? !!v : !paused
    );
  };
  const toggleHold = (v) => {
    setHold((hold) => (v !== undefined && !v.target ? !!v : !hold));
  };

  const clearControls = () => {
    setPaused(false);
    setHold(false);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images?.length - 1 : prevIndex - 1
    );
    clearControls();
  };
  const goToNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
    setSecondsLeft(DEFAULTS.CHANGE_SLIDE_IN);
    clearControls();
  }, [images]);

  const evaluateSecondsLeft = useCallback(() => {
    if (!paused) {
      setSecondsLeft((prev) => --prev);
      if (secondsLeft <= 0 && !hold) goToNextImage();
    }
  }, [secondsLeft, paused, hold, goToNextImage]);

  useEffect(() => {
    if (images.length > 1) {
      const timeoutId = setInterval(evaluateSecondsLeft, 1000);
      return () => clearInterval(timeoutId);
    }
  }, [currentIndex, images.length, evaluateSecondsLeft]);

  return (
    <div className="mb-32">
      <div
        className="section flex relative w-full rounded-[3rem] mb-10"
        onMouseEnter={() => togglePaused(true)}
        onMouseOut={() => togglePaused(false)}
      >
        {images?.length > 1 && (
          <button
            className="bg-[rgb(255,255,255,0.7)] p-3 rounded-full h-min absolute left-16 top-2/4 reset z-10"
            onClick={goToPreviousImage}
            aria-label="Previous Image"
          >
            <AngleLeftIcon />
          </button>
        )}

        <img
          loading="lazy"
          src={images[currentIndex]?.ImageURL || images[currentIndex]}
          alt={`${currentIndex + 1} out of ${
            images.length
          } images for the ${label} section`}
          className="w-full sm:h-[65rem] h-[50rem] object-cover rounded-[2.5rem]"
          onClick={toggleHold}
        />

        {/* <AsyncImage
          src={images[currentIndex]?.ImageURL || images[currentIndex]}
          alt={`${currentIndex + 1} out of ${
            images.length
          } images for the ${label} section`}
          className="w-full sm:h-[65rem] h-[50rem] object-cover rounded-[2.5rem]"
          Transition={Blur}
          onClick={toggleHold}
        /> */}

        {images[currentIndex]?.ImageLabel &&
        !images[currentIndex].ImageLabel?.includes?.("http") ? (
          <div
            className="absolute bottom-0 py-10 flex justify-end w-full max-h-60 min-h-28 antialiased bg-gradient-to-br from-[rgb(255,255,255,0)] via-[#0000] via-10% to-[#000A] rounded-b-[2.5rem]"
            onClick={toggleHold}
          >
            <Tooltip message={images[currentIndex].ImageLabel}>
              <p className="pr-28 text-right line-clamp-2 text-[3rem] text-[#ffffff] font-medium text-shadow-lg text-pretty">
                {images[currentIndex].ImageLabel}
              </p>
            </Tooltip>
          </div>
        ) : (
          <></>
        )}

        {images?.length > 1 && (
          <button
            className="bg-[rgb(255,255,255,0.7)] p-3 rounded-full h-min absolute right-16 top-2/4 reset"
            onClick={goToNextImage}
            aria-label="Next Image"
          >
            <AngleRightIcon />
          </button>
        )}
      </div>
      <div className="flex flexCol justify-between">
        <h3 className="text-[#030C05] text-[3rem] font-medium">{label}</h3>
        <p
          className="text-[1.6rem] text-[#aaaaaa] font-medium lg:mr-10 antialiased"
          onClick={hold ? toggleHold : undefined}
        >
          ({currentIndex + 1} of {images.length}
          {paused && !hold ? " - paused" : ""}
          {hold ? (
            <>
              <span className=""> - click to resume</span>
            </>
          ) : (
            ""
          )}
          )
        </p>
      </div>
    </div>
  );
};

export default Slider;
