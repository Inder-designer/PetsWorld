import React from "react";
import Countdown from "react-countdown";

const TimerCountdown = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown finished!</span>;
    } else {
      return (
        <div className="tpcoundown__countdown">
          <span className="cdown days">
            <span className="time-count">{days}</span> <p>Days</p>
          </span>
          <span className="cdown hour">
            <span className="time-count">{hours}</span> <p>Hour</p>
          </span>
          <span className="cdown minutes">
            <span className="time-count">{minutes}</span> <p>Minute</p>
          </span>
          <span className="cdown second">
            <span className="time-count">{seconds}</span> <p>Second</p>
          </span>
        </div>
      );
    }
  };

  return <Countdown date={new Date(date)} renderer={renderer} />;
};

export default TimerCountdown;
