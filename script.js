const baubles = document.querySelectorAll("li");
const maxX = 35; 
const maxY = 40; 
const baublesLength = baubles.length;

baubles.forEach((bauble, i) => {
    const y = Math.pow(i / baublesLength, 0.5) * maxY * 2 - maxY;
    const x = Math.pow((maxX * i) / baublesLength, 0.5) * 5.5 * (i % 2 === 0 ? 1 : -1);
    const r = Math.random();

    bauble.style.setProperty("--x", `${x}vmin`);
    bauble.style.setProperty("--y", `${y}vmin`);
    bauble.style.setProperty("--r", `${r}turn`);
    bauble.style.setProperty("--s", Math.random() * 0.875 + 0.125);

    const randomVal = Math.random();
    
    if (randomVal > 0.5) {
        // --- TUS FRASES ACTUALIZADAS ---
        const frases = ["Loviu", "Mon Cherie", "Merry", "Christmas"];
        const textoElegido = frases[Math.floor(Math.random() * frases.length)];
        const colorAleatorio = `hsl(${Math.random() * 360}, 100%, 75%)`;
        
        bauble.innerHTML = `<span class="texto-brillante" style="color: ${colorAleatorio}">${textoElegido}</span>`;
    } else {
        // --- TUS 4 FOTOS ---
        const misFotos = ["Ivan.jpg", "Rin.jpg", "luka.jpg", "jooyeon.jpg"];
        const fotoElegida = misFotos[Math.floor(Math.random() * misFotos.length)];
        bauble.innerHTML = `<img src="${fotoElegida}" alt="foto">`;
    }

    bauble.animate({ opacity: [1, 1, 0.3] }, {
        duration: 2000 + Math.random() * 3000,
        iterations: Infinity,
        direction: "alternate",
        delay: Math.random() * -16000,
        easing: "ease-in"
    });

    bauble.animate({ transform: ["rotateX(1turn) rotateY(2turn)"] }, {
        duration: 7000 + Math.random() * 13000,
        iterations: Infinity,
        direction: "alternate",
        delay: Math.random() * -16000,
        easing: "ease-in",
        composite: "add"
    });
});