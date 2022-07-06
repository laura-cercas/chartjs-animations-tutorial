const data = {
    labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(157,135,227)',
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    }
};

const graph = document.querySelector("#graph");
new Chart(graph, config);