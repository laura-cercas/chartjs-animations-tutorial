const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

const dataset1 = {
    label: "Dataset 1",
    data: [50, 20, 40, 60, 80, 100],
    borderColor: 'rgba(248, 37, 37, 0.8)',
    backgroundColor: 'rgba(255,0,0,0.29)',
    order:1,
    animations: {
        borderWidth: {
            duration: 1000,
            easing: 'linear',
            from: 10,
            to: 1,
            loop: true
        }
    }
};

const dataset2 = {
    label: "Dataset 2",
    data: [80, 90, 40, 50, 70, 90],
    borderColor: 'rgba(69,200,248,0.8)',
    backgroundColor: 'rgba(0,255,234,0.31)',
    type: 'line',
    order:0
};

const graph = document.querySelector("#graph");

const data = {
    labels: labels,
    datasets: [dataset1,dataset2]
};

const config = {
    type: 'bar',
    data: data,
};

new Chart(graph, config);