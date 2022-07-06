const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];



const dataset1 = {
    label: "Dataset 1",
    data: [65, 59, 80, 81, 26, 55, 40],
    borderColor: 'rgba(248, 37, 37, 0.8)',
    fill: false,
    animations: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
    }
};

const dataset2 = {
    label: "Dataset 2",
    data: [40, 60, 50, 77, 54, 30, 40],
    borderColor: 'rgba(69, 248, 84, 0.8)',
    fill: false,
    tension: 0.1
};

const dataset3 = {
    label: "Dataset 3",
    data: [10, 80, 40, 30, 20, 44, 40],
    borderColor: 'rgba(69, 140, 248, 0.8)',
    fill: false,
    tension: 0.1
};

const data = {
    labels: labels,
    datasets: [dataset1,dataset2,dataset3]
};

const config = {
    type: 'line',
    data: data,
};

const graph = document.querySelector("#graph");
new Chart(graph, config);