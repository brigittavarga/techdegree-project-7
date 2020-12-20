const emailToggle = document.querySelector('.email-toggle input');
const profileToggle = document.querySelector(".profile-toggle input");
const toggleOff = document.querySelectorAll('.off');
const toggleOn = document.querySelector(".on");

emailToggle.addEventListener('click', () =>  {
  if (emailToggle.checked) {
    toggleOff[0].style.display = 'none';
  } else {
    toggleOff[0].style.display = '';
  }
});
profileToggle.addEventListener("click", () => {
    if (profileToggle.checked) {
        toggleOff[1].style.display = "none";
    } else {
        toggleOff[1].style.display = "";
    }
});