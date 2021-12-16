const dataNumbers = [15.64, 108.44, 107.65, 106.09, 16.91, 80.08, 166.62, 226.32, 174.91, 150.81, 195.60, 186.02, 137.65, 133.16, 180.09, 176.28, 166.47, 180.09, 180.26, 144.69, 128.65, 119.02, 102.93, 65.07];
for(let i = 0; i < dataNumbers.length; i += 1){
   const dataNumber = dataNumbers[i];

   const normalizedNumbers = Math.round(dataNumbers[i])/10;
   
   dataNumbers[i] = normalizedNumbers;
   console.log(dataNumbers[i]);   

}

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00:00 - 01:00', '01:00 - 02:00', '02:00 - 03:00', '03:00 - 04:00', '04:00 - 05:00', '06:00 - 07:00', '08:00 - 09:00', '10:00 - 11:00' , '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00', '22:00 - 23:00' ],
        datasets: [{
            label: 'Day Ahead Price',
            data: dataNumbers,
            backgroundColor: [
                'rgb(2, 137, 122)',
            ],
            borderColor: [
                'rgb(6, 150, 122)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


