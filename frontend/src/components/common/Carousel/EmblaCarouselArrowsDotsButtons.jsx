import React from "react";

export const DotButton = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={"embla__dot".concat(selected ? " embla__dot--selected" : "")}
      type="button"
      onClick={onClick}
    />
  );
};

export const PrevButton = (props) => {
  const { enabled, onClick ,size} = props;

  return (
    <button
      className={`embla__button embla__button--prev ${size}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className="flickity-button-icon" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
        ></path>
      </svg>
    </button>
  );
};

export const NextButton = (props) => {
  const { enabled, onClick,size } = props;

  return (
    <button
      className={`embla__button embla__button--next ${size}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className="flickity-button-icon" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </button>
  );
};
