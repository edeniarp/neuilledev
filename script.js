window.onload = function() {
    setTimeout(function() {
        document.querySelector('.container').classList.add('move-together');
        startTerminalAnimation();
    }, 1000);
};

function startTerminalAnimation() {
    const terminal = document.getElementById('terminal');
    const commands = [
        "C:\\Users\\User> python r!ft.py",
        "Initialisation...",
        "Chargement des modules...",
        "Connexion aux services...",
        "Tapez 'Enter' pour entrer >"
    ];
    let i = 0;
    let typingSpeed = 100;

    function typeCommand() {
        if (i < commands.length) {
            let command = commands[i];
            let j = 0;

            function typeLetter() {
                if (j < command.length) {
                    terminal.innerHTML += command.charAt(j);
                    j++;
                    setTimeout(typeLetter, typingSpeed);
                } else {
                    terminal.innerHTML += '\n';
                    i++;
                    setTimeout(typeCommand, typingSpeed);
                }
            }

            typeLetter();
        } else {
            terminal.innerHTML += '<span class="blink-cursor"></span>';
            enableInput();
        }
    }

    typeCommand();
}

function enableInput() {
    const terminal = document.getElementById('terminal');
    const cursor = document.querySelector('.blink-cursor');
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            terminal.innerHTML = ''; // Efface le contenu
            cursor.remove();
            displayDescription();
        }
    });
}

function displayDescription() {
    const terminal = document.getElementById('terminal');
    const description = "Je suis un développeur passionné avec une expertise en développement web full-stack. J'ai une solide expérience en JavaScript, Python, et des frameworks comme React et Django. Mon approche consiste à résoudre des problèmes complexes avec des solutions simples et efficaces. J'aime travailler sur des projets innovants et collaborer avec des équipes dynamiques pour créer des applications web de haute qualité.";
    let i = 0;
    let typingSpeed = 50;

    function typeDescription() {
        if (i < description.length) {
            terminal.innerHTML += description.charAt(i);
            i++;
            setTimeout(typeDescription, typingSpeed);
        } else {
            terminal.innerHTML += '\
