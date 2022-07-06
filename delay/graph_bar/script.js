const data = {
    labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'Dataset',
        data: [65, 59, 80, 81, 26, 55, 40],
        backgroundColor: 'rgb(75, 192, 192)',
    }]

};

const config = {
    type: 'bar',
    data: data,
    options: {
        animation: {
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data') {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
};

const graph = document.querySelector("#graph");
new Chart(graph, config);