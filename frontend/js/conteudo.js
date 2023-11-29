const titulo = document.querySelector("#titulo")
const video = document.querySelector("#video")
const conteudo = document.querySelector("#conteudo")

function logo() {
    const tituloEstrutura = '<h1>Sobre Nós</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/sobre_nos.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function fila() {
    const tituloEstrutura = '<h1>Fila</h1>'
    const videoEstrutura = '<iframe width="560" height="315" src="https://www.youtube.com/embed/f_pHNMwIMWU?si=x60W4kUhPiHwKB37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    const texto = fetch('estruturas/fila.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function filaCircular() {
    const tituloEstrutura = '<h1>Fila Circular</h1>'
    const videoEstrutura = '<iframe width="560" height="315" src="https://www.youtube.com/embed/f_pHNMwIMWU?si=x60W4kUhPiHwKB37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    const texto = fetch('estruturas/fila_circular.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function pilha() {
    const tituloEstrutura = '<h1>Pilha</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/pilha.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function bubbleSort() {
    const tituloEstrutura = '<h1>Bubble Sort</h1>'
    const videoEstrutura = '<iframe width="560" height="315" src="https://www.youtube.com/embed/f_pHNMwIMWU?si=x60W4kUhPiHwKB37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    const texto = fetch('estruturas/bubble_sort.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function insertionSort() {
    const tituloEstrutura = '<h1>Insertion Sort</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/insertion_sort.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function margeSort() {
    const tituloEstrutura = '<h1>Marge Sort</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/marge_sort.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function quickSort() {
    const tituloEstrutura = '<h1>Quick Sort</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/quick_sort.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function selectionSort() {
    const tituloEstrutura = '<h1>Selection Sort</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/selection_sort.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}

function tabelaHash() {
    const tituloEstrutura = '<h1>Tabela Hash</h1>'
    const videoEstrutura = ''
    const texto = fetch('estruturas/tabela_hash.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('conteudo').innerHTML = data;
    });
    titulo.innerHTML = tituloEstrutura
    video.innerHTML = videoEstrutura
    conteudo.innerHTML = texto
}