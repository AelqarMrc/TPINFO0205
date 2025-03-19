const ctx = document.getElementById('myChart');

let backgroundColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)'
];
let borderColors = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)'
];

const xValue = Array.from({length:10}, (_, i)=>2000+i)
, yValue = Array.from({length:6}, (_, i)=>3+i)


new Chart(ctx, {
  type: 'line',
  data: {
    labels: xValue,
      datasets: [{
      label: '# of Votes',
      data: yValue,
      borderWidth: 1,
      backgroundColor: backgroundColors, 
      borderColor : borderColors,
      
    }]
  },
  options: {
    plugins: {
      title: {
          display: true,
          text: "Consommation de margarine comparée au taux de divorce aux États-Unis",
          padding : {
            top : 30,
            bottom : 10
          },
          position : 'bottom'          
        },
        scales: {
          y: {
            beginAtZero: false
          },
        }
    }
  }
  
});
