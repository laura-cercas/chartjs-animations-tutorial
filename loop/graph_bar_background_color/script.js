const data = {
    labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        data: [65, 59, 80, 81, 26, 55, 40],
        backgroundColor: 'red',
    }]

};

const config = {
    type: 'bar',
    data: data,
    options: {
        animations: {
            backgroundColor: {
                type: 'color',
                duration: 2000,
                easing: 'linear',
                from: 'blue',
                to: 'red',
                loop: true
            }
        },
        plugins: {
            legend:{
                display:false
            }
        }
    },

};

const graph = document.querySelector("#graph");
new Chart(graph, config);