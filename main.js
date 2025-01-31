const div = $('<div>Hello World.</div>');

const body = $('body');

body.append(div);

div.on('click', function() {
    alert('Hello World');
});

const config = {
    type: 'line',
    data: data,
    options: {}
};

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);