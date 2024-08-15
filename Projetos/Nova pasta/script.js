document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalSpan = document.getElementsByClassName("close")[0];
    const saveBtn = document.getElementById("saveBtn");
    const timezoneSelect = document.getElementById("timezoneSelect");
    const timeDisplay = document.getElementById("time");
  
    // Open modal
    openModalBtn.onclick = function () {
      modal.style.display = "block";
    };
  
    // Close modal
    closeModalSpan.onclick = function () {
      modal.style.display = "none";
    };
  
    // Close modal by clicking outside it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  
    // Update time based on selection
    saveBtn.onclick = function () {
      const selectedTimezone = timezoneSelect.value;
      const currentTime = new Date().toLocaleString("en-US", {
        timeZone: selectedTimezone,
      });
      timeDisplay.textContent = `Current time in ${selectedTimezone}: ${currentTime}`;
      modal.style.display = "none";
    };
  });
  