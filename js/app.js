const emailToggle = document.querySelector('.email-toggle input');
const profileToggle = document.querySelector(".profile-toggle input");
const toggleOff = document.querySelector('.off');
const toggleOn = document.querySelector(".on");

emailToggle.addEventListener('click', () =>  {
  if (emailToggle.checked) {
    toggleOff.style.display = 'none';
  } else {
    toggleOff.style.display = '';
  }
});

profileToggle.addEventListener("click", () => {
    if (profileToggle.checked) {
        toggleOff.style.display = "none";
    } else {
        toggleOff.style.display = "";
    }
});
