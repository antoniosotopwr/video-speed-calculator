"use strict";
const btn = document.querySelector(".btn--calc-time");
try {
  btn.addEventListener("click", function () {
    let minutes = Number(document.getElementById("duration-minutes").value);
    const select = document.getElementById("video-speed");
    let selectedSpeed = Number(select.options[select.selectedIndex].value);
    const inputTimeSaved = document.getElementById("time-saved");
    const lblTimeSaved = document.getElementById("lblTimeSaved");

    const calcTimeSaved = function(minutes,selectedSpeed){
      let newDuration = (minutes/selectedSpeed);
      let timeSaved = minutes - newDuration ;
      return [newDuration,timeSaved];
    }

    if (minutes === 0) {
      console.log("Please fill the minutes");
      // Add a label to notify the error
    } else {
      const [newDuration,timeSaved] = calcTimeSaved(minutes,selectedSpeed);
      document.querySelector(".input-show-time-saved").value =  Math.round(timeSaved) + " minutes";
      document.querySelector(".input-show-new-duration").value =  Math.round(newDuration) + " minutes";
    }
  });
} catch (err) {
  console.error(err);
}
