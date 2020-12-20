const emailToggle = document.querySelector('.toggle input');
const toggleOff = document.querySelector('.off');

emailToggle.addEventListener('click', () =>  {
  if (emailToggle.checked) {
    toggleOff.style.display = 'none';
  } else {
    toggleOff.style.display = '';
  }
}); 