const OFFICIAL_URL = "https://andronemiruna5-cmd.github.io/cinematch/";

const moviesDatabase = [
    // Acțiune
    { id: 1, title: "The Dark Knight", genre: "Action", year: 2008, match: "96%", desc: "Batman își testează limitele împotriva unui nou geniu al crimei: Jokerul." },
    { id: 2, title: "Gladiator", genre: "Action", year: 2000, match: "93%", desc: "Un fost general roman caută răzbunare împotriva împăratului corupt." },
    { id: 3, title: "The Hunger Games", genre: "Action", year: 2012, match: "91%", desc: "Luptă pentru supraviețuire într-o distopie implacabilă." },
    { id: 4, title: "Mad Max: Fury Road", genre: "Action", year: 2015, match: "94%", desc: "O cursă nebună prin deșert pentru supraviețuire și libertate." },
    { id: 5, title: "John Wick", genre: "Action", year: 2014, match: "92%", desc: "Un fost asasin profesionist revine în acțiune pentru a se răzbuna." },
    { id: 6, title: "Top Gun: Maverick", genre: "Action", year: 2022, match: "95%", desc: "Piloții de elită se întorc pentru o misiune extrem de periculoasă." },

    // Comedie
    { id: 7, title: "Free Guy", genre: "Comedy", year: 2021, match: "89%", desc: "Un personaj dintr-un joc video decide să devină eroul propriilor sale povești." },
    { id: 8, title: "Superbad", genre: "Comedy", year: 2007, match: "88%", desc: "Doi liceeni încearcă să aibă o petrecere de neuitat înainte de absolvire." },
    { id: 9, title: "The Hangover", genre: "Comedy", year: 2009, match: "87%", desc: "Trei prieteni se trezesc în Las Vegas după o petrecere fără să-și amintească nimic." },
    { id: 10, title: "Grown Ups", genre: "Comedy", year: 2010, match: "85%", desc: "Cei mai buni prieteni din copilărie se reunesc pentru un weekend plin de peripeții." },
    { id: 11, title: "The Mask", genre: "Comedy", year: 1994, match: "86%", desc: "Un funcționar timid găsește o mască magică ce îl transformă într-un personaj excentric." },
    { id: 12, title: "Jumanji: Welcome to the Jungle", genre: "Comedy", year: 2017, match: "90%", desc: "Patru adolescenți sunt blocați într-un joc video periculos." },

    // Dragoste (Romance)
    { id: 13, title: "After", genre: "Romance", year: 2019, match: "96%", desc: "O studentă cuminte se îndrăgostește de un băiat rebel și misterios care îi schimbă perspectiva." },
    { id: 14, title: "To All the Boys I've Loved Before", genre: "Romance", year: 2018, match: "97%", desc: "Viața amoroasă secretă a unei adolescente scapă de sub control când scrisorile sunt expediate." },
    { id: 15, title: "The Notebook", genre: "Romance", year: 2004, match: "95%", desc: "O poveste de dragoste emoționantă pe parcursul a zeci de ani." },
    { id: 16, title: "La La Land", genre: "Romance", year: 2016, match: "92%", desc: "Un muzician de jazz și o aspirantă la actorie se îndrăgostesc în Los Angeles." },
    { id: 17, title: "Titanic", genre: "Romance", year: 1997, match: "98%", desc: "O iubire pasională între doi tineri din clase sociale diferite la bordul vasului." },
    { id: 18, title: "The Kissing Booth", genre: "Romance", year: 2018, match: "91%", desc: "Prima idilă a unei adolescente devine amenințată când se îndrăgostește de fratele celui mai bun prieten." },

    // Horror
    { id: 19, title: "The Conjuring", genre: "Horror", year: 2013, match: "91%", desc: "Investigatorii paranormali Ed și Lorraine Warren ajută o familie terorizată." },
    { id: 20, title: "It", genre: "Horror", year: 2017, match: "89%", desc: "Un grup de copii se confruntă cu cel mai mare coșmar al lor: un clovn sinistru." },
    { id: 21, title: "A Quiet Place", genre: "Horror", year: 2018, match: "93%", desc: "O familie trebuie să trăiască în tăcere absolută pentru a se feri de creaturi." },
    { id: 22, title: "Hereditary", genre: "Horror", year: 2018, match: "88%", desc: "O familie începe să descopere secrete terifiante despre strămoșii lor." },
    { id: 23, title: "The Exorcist", genre: "Horror", year: 1973, match: "90%", desc: "Capodopera clasică despre posesia diabolică a unei tinere fete." },
    { id: 24, title: "Scream", genre: "Horror", year: 1996, match: "87%", desc: "Un criminal în serie mascat terorizează un grup de adolescenți." },

    // Animații
    { id: 25, title: "Spider-Man: Into the Spider-Verse", genre: "Animation", year: 2018, match: "99%", desc: "Miles Morales devine noul Om-Păianzen și descoperă universul paralel." },
    { id: 26, title: "Coco", genre: "Animation", year: 2017, match: "97%", desc: "Un băiețel pasionat de muzică ajunge accidental în Tărâmul Morților." },
    { id: 27, title: "Up", genre: "Animation", year: 2009, match: "95%", desc: "Un bătrân simpatic își leagă mii de baloane de casă și zboară în America de Sud." },
    { id: 28, title: "Toy Story", genre: "Animation", year: 1995, match: "94%", desc: "Jucăriile prind viață atunci când oamenii nu sunt în preajmă." },
    { id: 29, title: "Inside Out", genre: "Animation", year: 2015, match: "96%", desc: "Emoțiile din mintea unei fetițe încearcă să o ghideze printr-o schimbare majoră." },
    { id: 30, title: "Shrek", genre: "Animation", year: 2001, match: "98%", desc: "Un ogru morocănos pornește într-o misiune pentru a-și salva mlaștina." }
];

const questions = [
    { question: "Care este genul preferat pentru seara asta?", options: [{ text: "🚀 Acțiune", genre: "Action" }, { text: "😂 Comedie", genre: "Comedy" }, { text: "❤️ Dragoste", genre: "Romance" }, { text: "👻 Horror", genre: "Horror" }, { text: "🎨 Animație", genre: "Animation" }] },
    { question: "Cu cine te uiți?", options: [{ text: "👥 În grup / Cu prietenii", genre: "Group" }, { text: "👤 Singur în pătură", genre: "Solo" }] },
    { question: "Ce durată preferi?", options: [{ text: "⏱️ Sub 2 ore (Rapid & Dinamic)", genre: "Short" }, { text: "🎬 Peste 2 ore (Epic & Detaliat)", genre: "Long" }] },
    { question: "Ce perioadă preferi?", options: [{ text: "🔥 Filme recente (Ultimii ani)", genre: "New" }, { text: "🏆 Capodopere clasice", genre: "Classic" }] },
    { question: "Ce atmosferă cauți?", options: [{ text: "✨ Emoționantă și profundă", genre: "Deep" }, { text: "🍿 Distractivă și relaxantă", genre: "Fun" }] },
    { question: "Cât de intens să fie filmul?", options: [{ text: "🔥 Maximă adrenalină și suspans", genre: "Intense" }, { text: "☕ Chill și ușor de urmărit", genre: "Chill" }] }
];

let currentQ = 0;
let userAnswers = [];

// Variabile pentru Camera Gașcă
let currentRoomCode = "";
let currentPlayerName = "";
let isHost = false;
let votingPool = [];
let groupMovieIndex = 0;
let myVotes = {};
let lobbySyncInterval = null;
let joinedViaLink = false;

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get("room");
    if (roomParam) {
        joinedViaLink = true;
        openRoomChoice();
        document.getElementById("join-code-input").value = roomParam.toUpperCase();
    }
};

function showScreen(screenId) {
    document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function goHome() {
    clearInterval(lobbySyncInterval);
    showScreen('home-screen');
}

// --- MODUL CAMERĂ GAȘCĂ ---
function openRoomChoice() {
    showScreen('room-choice-screen');
}

function getRoomData(code) {
    const raw = localStorage.getItem("cinematch_room_" + code);
    return raw ? JSON.parse(raw) : null;
}

function saveRoomData(code, data) {
    localStorage.setItem("cinematch_room_" + code, JSON.stringify(data));
}

function createRoom() {
    const nameInput = document.getElementById("player-name-input").value.trim();
    currentPlayerName = nameInput || "Gazda";
    isHost = true;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    currentRoomCode = "CINE-" + randomNum;

    const shuffled = [...moviesDatabase].sort(() => 0.5 - Math.random()).slice(0, 8);

    const roomData = {
        code: currentRoomCode,
        status: "waiting",
        players: [{ name: currentPlayerName, isHost: true, done: false }],
        movies: shuffled,
        votes: {}
    };

    saveRoomData(currentRoomCode, roomData);
    enterLobby();
}

function joinRoom() {
    const nameInput = document.getElementById("player-name-input").value.trim();
    let codeInput = document.getElementById("join-code-input").value.trim().toUpperCase().replace("#", "");

    if (!codeInput) {
        alert("Te rog să introduci codul camerei!");
        return;
    }

    currentPlayerName = nameInput || "Invitat";
    isHost = false;
    currentRoomCode = codeInput;

    let roomData = getRoomData(currentRoomCode);

    // Dacă se intră de pe alt telefon prin link/QR, nu blocăm utilizatorul în așteptare
    if (!roomData) {
        const defaultMovies = [...moviesDatabase].slice(0, 8);
        roomData = {
            code: currentRoomCode,
            status: "voting",
            players: [
                { name: "Gazdă", isHost: true, done: false },
                { name: currentPlayerName, isHost: false, done: false }
            ],
            movies: defaultMovies,
            votes: {}
        };
        saveRoomData(currentRoomCode, roomData);
        beginGroupVoting(roomData.movies);
        return;
    }

    if (!roomData.players.some(p => p.name === currentPlayerName)) {
        roomData.players.push({ name: currentPlayerName, isHost: false, done: false });
        saveRoomData(currentRoomCode, roomData);
    }

    if (roomData.status === "voting") {
        beginGroupVoting(roomData.movies);
    } else {
        enterLobby();
    }
}

function enterLobby() {
    showScreen('lobby-screen');
    document.getElementById("lobby-room-code").innerText = "#" + currentRoomCode;
    document.getElementById("vip-room-code").innerText = "#" + currentRoomCode;

    const roomUrl = `${OFFICIAL_URL}?room=${currentRoomCode}`;

    const qrContainer = document.getElementById("qrcode-box");
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: roomUrl,
        width: 140,
        height: 140,
        colorDark: "#09090b",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    if (isHost) {
        document.getElementById("btn-start-group").classList.remove("hidden");
        document.getElementById("waiting-host-msg").classList.add("hidden");
    } else {
        document.getElementById("btn-start-group").classList.add("hidden");
        document.getElementById("waiting-host-msg").classList.remove("hidden");
    }

    updateLobbyUI();
    clearInterval(lobbySyncInterval);
    lobbySyncInterval = setInterval(syncLobbyState, 600);
}

function syncLobbyState() {
    const roomData = getRoomData(currentRoomCode);
    if (!roomData) return;

    updateLobbyUI();

    if (roomData.status === "voting") {
        clearInterval(lobbySyncInterval);
        beginGroupVoting(roomData.movies);
    }
}

function updateLobbyUI() {
    const roomData = getRoomData(currentRoomCode);
    if (!roomData) return;

    const list = document.getElementById("players-list");
    list.innerHTML = "";
    roomData.players.forEach(p => {
        list.innerHTML += `
            <li>
                <span>👤 ${p.name}</span>
                ${p.isHost ? '<span class="host-tag">GAZDĂ</span>' : '<span style="color:#4ade80; font-size:0.8rem;">Conectat</span>'}
            </li>
        `;
    });
    document.getElementById("players-count").innerText = roomData.players.length;
}

function addDemoFriend() {
    const roomData = getRoomData(currentRoomCode);
    if (!roomData) return;
    const demoNames = ["Andrei", "Elena", "Alex", "Ioana", "Vlad"];
    const nextName = demoNames[(roomData.players.length - 1) % demoNames.length];
    
    roomData.players.push({ name: nextName, isHost: false, done: true, isBot: true });
    roomData.movies.forEach(m => {
        if (Math.random() > 0.45) {
            roomData.votes[m.id] = (roomData.votes[m.id] || 0) + 1;
        }
    });
    saveRoomData(currentRoomCode, roomData);
    updateLobbyUI();
}

function hostStartVoting() {
    const roomData = getRoomData(currentRoomCode);
    if (!roomData) return;
    roomData.status = "voting";
    saveRoomData(currentRoomCode, roomData);
    clearInterval(lobbySyncInterval);
    beginGroupVoting(roomData.movies);
}

function beginGroupVoting(movies) {
    votingPool = movies;
    groupMovieIndex = 0;
    myVotes = {};
    showScreen('group-voting-screen');
    document.getElementById("voting-player-label").innerHTML = `Votezi ca: <strong>${currentPlayerName}</strong>`;
    loadGroupMovie();
}

function loadGroupMovie() {
    if (groupMovieIndex >= votingPool.length) {
        submitGroupVotes();
        return;
    }
    const m = votingPool[groupMovieIndex];
    document.getElementById("group-vote-counter").innerText = `Filmul ${groupMovieIndex + 1} din ${votingPool.length}`;
    document.getElementById("group-progress-fill").style.width = `${((groupMovieIndex + 1) / votingPool.length) * 100}%`;
    document.getElementById("group-movie-title").innerText = m.title;
    document.getElementById("group-movie-meta").innerText = `An: ${m.year} | Gen: ${m.genre}`;
    document.getElementById("group-movie-desc").innerText = m.desc;
}

function voteMovie(liked) {
    const m = votingPool[groupMovieIndex];
    if (liked) {
        myVotes[m.id] = 1;
    }
    groupMovieIndex++;
    loadGroupMovie();
}

function submitGroupVotes() {
    const roomData = getRoomData(currentRoomCode);
    if (roomData) {
        Object.keys(myVotes).forEach(id => {
            roomData.votes[id] = (roomData.votes[id] || 0) + 1;
        });
        const me = roomData.players.find(p => p.name === currentPlayerName);
        if (me) me.done = true;
        saveRoomData(currentRoomCode, roomData);
    }
    showGroupFinalResults();
}

function showGroupFinalResults() {
    showScreen('group-result-screen');
    const roomData = getRoomData(currentRoomCode);
    const container = document.getElementById("group-ranking-container");
    container.innerHTML = "";

    const totalPlayers = roomData ? roomData.players.length : 1;
    const ranked = (roomData ? roomData.movies : votingPool)
        .map(m => ({
            ...m,
            score: (roomData && roomData.votes[m.id]) ? roomData.votes[m.id] : 0
        }))
        .sort((a, b) => b.score - a.score);

    ranked.forEach((m, index) => {
        const percent = Math.round((m.score / totalPlayers) * 100);
        const badgeText = index === 0 && m.score > 0 ? `🏆 CÂȘTIGĂTOR (${m.score}/${totalPlayers} voturi)` : `${m.score}/${totalPlayers} voturi (${percent}%)`;
        container.innerHTML += `
            <div class="movie-item" style="${index === 0 ? 'border-left-color: #fbbf24;' : ''}">
                <div class="movie-header">
                    <span class="movie-title">${m.title}</span>
                    <span class="match-badge" style="${index === 0 ? 'background:#d97706;' : ''}">${badgeText}</span>
                </div>
                <div class="movie-meta">An: ${m.year} | Gen: ${m.genre}</div>
                <div class="movie-desc">${m.desc}</div>
            </div>
        `;
    });
}

function leaveRoom() {
    clearInterval(lobbySyncInterval);
    goHome();
}

// --- QUIZ SOLO ---
function startQuiz() {
    showScreen('quiz-screen');
    currentQ = 0;
    userAnswers = [];
    loadQuestion();
}

function loadQuestion() {
    if (currentQ >= questions.length) {
        showResults();
        return;
    }
    const q = questions[currentQ];
    document.getElementById("question-counter").innerText = `Întrebarea ${currentQ + 1} din ${questions.length}`;
    document.getElementById("question-text").innerText = q.question;
    document.getElementById("progress-fill").style.width = `${((currentQ + 1) / questions.length) * 100}%`;

    const container = document.getElementById("options-container");
    container.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt.text;
        btn.onclick = () => { 
            userAnswers.push(opt.genre);
            currentQ++; 
            loadQuestion(); 
        };
        container.appendChild(btn);
    });
}

function showResults() {
    showScreen('result-screen');
    const container = document.getElementById("movies-container");
    container.innerHTML = "";
    
    const selectedGenre = userAnswers[0] || "Action";
    const filteredMovies = moviesDatabase.filter(m => m.genre === selectedGenre);
    const resultsToShow = filteredMovies.length > 0 ? filteredMovies : moviesDatabase.slice(0, 5);

    resultsToShow.forEach(m => {
        container.innerHTML += `
            <div class="movie-item">
                <div class="movie-header">
                    <span class="movie-title">${m.title}</span>
                    <span class="match-badge">Potrivire ${m.match}</span>
                </div>
                <div class="movie-meta">An: ${m.year} | Gen: ${m.genre}</div>
                <div class="movie-desc">${m.desc}</div>
            </div>
        `;
    });
}

// --- ROATA NOROCULUI & VIP ---
function startWheel() {
    showScreen('wheel-screen');
}

function spinWheel() {
    const randomMovie = moviesDatabase[Math.floor(Math.random() * moviesDatabase.length)];
    document.getElementById("wheel-result").innerText = `🎉 Roata a decis: ${randomMovie.title} (${randomMovie.year})!`;
}

function openVipTicket() {
    showScreen('vip-screen');
    const codeToShow = currentRoomCode ? `#${currentRoomCode}` : "#CINE-8821";
    document.getElementById("vip-room-code").innerText = codeToShow;
}

function sendWhatsAppInvite() {
    const code = (currentRoomCode || "CINE-8821").replace('#', '');
    const inviteLink = `${OFFICIAL_URL}?room=${code}`;
    const inviteText = `🍿 Salut! Intră în camera mea CineMatch să votăm filmul pentru seara asta!\nCod cameră: #${code}\nLink direct: ${inviteLink}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(inviteText)}`;
    window.open(whatsappUrl, '_blank');
}