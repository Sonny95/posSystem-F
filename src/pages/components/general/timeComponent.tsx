import React, { useEffect, useState } from "react";
function TimeComponent() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentWeekDate, setCurrentWeekDate] = useState("");
  useEffect(() => {
    const updateCurrentDate = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
      setCurrentDate(date);
    };

    // update date
    updateCurrentDate();

    // update every 1 minutes
    const intervalId = setInterval(updateCurrentDate, 60000);

    // organize interval when component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const weekDate = now.toLocaleDateString("en-AU", {
        weekday: "long",
      });
      const time = now.toLocaleTimeString("en-AU", {
        hour12: false, // for 24 hours
        hour: "2-digit",
        minute: "2-digit",
      });

      const currentDateTime = weekDate + " | " + time;
      setCurrentWeekDate(currentDateTime);
    };

    // update time
    updateCurrentTime();

    // update time every one minutes
    const intervalId = setInterval(updateCurrentTime, 60000);

    // organize interval when component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="h-[19px] flex">
        <p style={{ fontWeight: "bold mr-4" }}> {currentDate}</p>
        <p>{currentWeekDate}</p>
      </div>
    </div>
  );
}

export default TimeComponent;
