"use strict";
const btn = document.querySelector(".btn--calc-time");
try {
  btn.addEventListener("click", function () {
    let lblDuration = Number(document.getElementById("duration-minutes").value);
    const select = document.getElementById("video-speed");
    let selectedSpeed = Number(select.options[select.selectedIndex].value);
    const inputTimeSaved = document.getElementById("time-saved");
    const lblTimeSaved = document.getElementById("lblTimeSaved");

    if (lblDuration === 0) {
      console.log("Please fill the minutes");
    } else {
      console.log(lblDuration);
      console.log(selectedSpeed);
      console.log("hello1");
      // document.querySelector(".show-time").textContent = lblDuration ;
      document.querySelector(".input-show-time").value = selectedSpeed ;
      console.log(lblDuration);
      console.log(selectedSpeed);
      console.log("hello2");
    }
  });
} catch (err) {
  console.error(err);
}
