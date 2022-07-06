const data = {
    datasets: [{
        label: 'Dataset',
        data: [{x: 20,y: 30,r: 15}, {x: 25, y: 24, r: 10}, {x: 28, y: 20, r: 10}, {x: 30, y: 16, r: 15}, {x: 40, y: 10, r: 10}, {x: 50, y: 20, r: 10},],
        backgroundColor: 'rgb(255, 99, 132)'
    }]

};

const config = {
    type: 'bubble',
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