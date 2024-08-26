window.onload = function() {
    setTimeout(function() {
        document.querySelector('.container').classList.add('move-together');
        startTerminalAnimation();
    }, 1000);
};

function startTerminalAnimation() {
    const terminal = document.getElementById('terminal');
    const hiddenInput = document.getElementById('hiddenInput');
    const commands = [
        "C:\\Users\\User> python r!ft.py",
        "Initialisation...",
        "Chargement des modules...",
        "Connexion aux services...",
        "Cliquez sur votre touche 'Entrée' pour continuer >"
    ];
    let i = 0;
    const typingSpeed = 75; // Vitesse de saisie

    hiddenInput.focus();

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
    const hiddenInput = document.getElementById('hiddenInput');
    const cursor = document.querySelector('.blink-cursor');

    hiddenInput.addEventListener('input', function(event) {
        terminal.innerHTML = terminal.innerHTML.replace(cursor.outerHTML, "") + hiddenInput.value;
        terminal.innerHTML += cursor.outerHTML;
    });

    hiddenInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
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
    const typingSpeed = 25; // Vitesse pour la description

    function typeDescription() {
        if (i < description.length) {
            terminal.innerHTML += description.charAt(i);
            i++;
            setTimeout(typeDescription, typingSpeed);
        } else {
            terminal.innerHTML += '\n';
            displaySkills();
        }
    }

    typeDescription();
}

function displaySkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    const skills = [
        { name: "HTML", level: 1 },
        { name: "CSS", level: 0.9 },
        { name: "JavaScript", level: 0.87 },
        { name: "Python", level: 93 },
        { name: "Rust", level: 0.6 }
    ];

    let delay = 0;

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <div class="skill-label">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-bar-fill" style="--level: ${skill.level};"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);

        // Ajoute un délai pour que les jauges apparaissent une à une
        setTimeout(() => {
            skillElement.querySelector('.skill-bar-fill').classList.add('animate');
        }, delay);

        delay += 2500; // 2.5s de délai entre chaque jauge
    });
}
