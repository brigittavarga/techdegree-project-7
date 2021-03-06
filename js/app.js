const emailToggle = document.querySelector('.email-toggle input');
const profileToggle = document.querySelector(".profile-toggle input");
const toggleOff = document.querySelectorAll('.off');
const toggleOn = document.querySelector(".on");
const alertBanner = document.getElementById("alert");

const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");

const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send");

const trafficNavLink = document.getElementById("traffic-nav-links");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
  label: '# of Hits',
  data: [75, 115, 175, 125, 225, 200, 100],
  backgroundColor: '#7477BF',
  borderWidth: 1
  }]
  };
  const dailyOptions = {
  scales: {
  yAxes: [{
  ticks: {
  beginAtZero:true
  }
  }]
  },
  legend : {
  display: false
  }
  }

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
  });

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
  data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
  2500],
  backgroundColor: 'rgba(116, 119, 191, .3)',
  borderWidth: 1,
  }]
  };

  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    };

    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData,
      options: trafficOptions
    });
    
    const mobileData = {
      labels: ["Desktop", "Tablet", "Phones"],
      datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
      ]
      }]
      };

const mobileOptions = {
  legend: {
  position: 'right',
  labels: {
  boxWidth: 20,
  fontStyle: 'bold'
  }
  }
  }

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
  });

alertBanner.innerHTML = 
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<a href="#"><p class="alert-banner-close">x</p></a>
</div>
`;

alertBanner.addEventListener("click", e => {
  const element = e.target;
  if( element.classList.contains("alert-banner-close" )) {
    alertBanner.style.display = "none";
  }
});

send.addEventListener("click", () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

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

trafficNavLink.addEventListener("click", function(e) {
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add("active");
  if( e.target.textContent === "Hourly") {
    // render hourly chart
    trafficChart.data.datasets[0].data = [5400, 8000, 3000, 8000, 15000, 17500, 12500, 18500, 22500, 15000,
      25000];
  } else if ( e.target.textContent === "Daily" ){
    // render daily chart
    trafficChart.data.datasets[0].data = [6750, 9600, 3400, 9100, 19000, 21500, 23500, 28500, 39500, 41000,
      25000];
  } else if ( e.target.textContent === "Weekly" ) {
  // render weekly chart    
  trafficChart.data.datasets[0].data = [12000, 12250, 6000, 9500, 10000, 12000, 29000, 30000, 39600, 47000,
    85000];
  } else if ( e.target.textContent === "Monthly" ) {
  // render monthly chart
  trafficChart.data.datasets[0].data = [16000, 22250, 8000, 9900, 19000, 17500, 32500, 32500, 49500, 51000,
    25000];
  }
  trafficChart.update();
});