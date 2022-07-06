const data = {
    labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
    }]

};

const config = {
    type: 'bar',
    data: data,
    options: {
        animations: {
            borderWidth: {
                duration: 1000,
                easing: 'linear',
                from: 10,
                to: 1,
                loop: true
            }
        }
    }
};

const graph = document.querySelector("#graph");
new Chart(graph, config);