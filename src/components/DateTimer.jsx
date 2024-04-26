import { useState, useEffect } from "react";
import "../styles/DateTimer.css"
function DateTimer() {
  const [dateInfo, setDateInfo] = useState("");
  const [timer, setTimer] = useState("");

  const currentTimer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = getDayOfWeek(date.getDay());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours > 12 ? String(hours - 12).padStart(2, "0") : hours;
    setDateInfo(`${year}.${month}.${day}(${dayOfWeek})`);
    setTimer(`${period} ${formattedHours}:${minutes}`);
  };

  const getDayOfWeek = (dayIndex) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[dayIndex];
  };

  useEffect(() => {
    const intervalId = setInterval(currentTimer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Header-container" style={{borderBottom:'none'}}>
      <div className="day_time">
        <div className="date-info">{dateInfo}</div>
        <div className="timer">{timer}</div>
      </div>
    </div>
  );
}

export default DateTimer;