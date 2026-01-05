document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-cambiar');
    const colores = ['#f0f8ff', '#fff0f5', '#f5f5dc', '#e6e6fa', '#f0fff0', '#ffe4e1', '#e0ffff'];
    let contador = 0;

    btn.addEventListener('click', function() {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
        contador++;
        btn.textContent = `¡Clic #${contador}! Cambia de nuevo`;
