document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-cambiar');
    const clasesColores = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
    let contador = 0;

    btn.addEventListener('click', function() {
        // Remueve clases anteriores
        document.body.classList.remove('color-1', 'color-2', 'color-3', 'color-4', 'color-5');
        
        const claseAleatoria = clasesColores[Math.floor(Math.random() * clasesColores.length)];
        document.body.classList.add(claseAleatoria);
        contador++;
        btn.textContent = `¡Clic #${contador}! Cambia de nuevo`;
    });
});
