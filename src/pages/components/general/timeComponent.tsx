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

    // 초기 날짜 업데이트
    updateCurrentDate();

    // 1분마다 날짜 업데이트
    const intervalId = setInterval(updateCurrentDate, 60000);

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const weekDate = now.toLocaleDateString("en-AU", {
        weekday: "long",
      });
      const time = now.toLocaleTimeString("en-AU", {
        hour12: false, // 12시간 형식 사용 안 함
        hour: "2-digit",
        minute: "2-digit",
      });

      const currentDateTime = weekDate + " | " + time;
      setCurrentWeekDate(currentDateTime);
    };

    // 초기 시간 업데이트
    updateCurrentTime();

    // 1분마다 시간 업데이트
    const intervalId = setInterval(updateCurrentTime, 60000);

    // 컴포넌트가 언마운트될 때 interval 정리
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
