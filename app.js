const OFFICIAL_URL = "https://andronemiruna5-cmd.github.io/cinematch/";
const WS_BROKER = "wss://broker.emqx.io:8084/mqtt";

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

// Stare cameră & WebSocket
let wsClient = null;
let roomTopic = "";
let currentRoomCode = "";
let currentPlayerId = "";
let currentPlayerName = "";
let isHost = false;
let myApprovalStatus = "pending"; // "pending" | "approved" | "rejected"
let roomState = null;
let votingPool = [];
let groupMovieIndex = 0;
let myVotes = {};
let hostRequestTimeout = null;

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get("room");
    if (roomParam) {
        openRoomChoice();
        const joinInput = document.getElementById("join-code-input");
        if (joinInput) joinInput.value = roomParam.toUpperCase();
    }
};

function showScreen(screenId) {
    document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
    const target = document.getElementById(screenId);
    if (target) target.classList.remove('hidden');
}

function goHome() {
    disconnectWS();
    showScreen('home-screen');
}

function openRoomChoice() {
    showScreen('room-choice-screen');
}

function disconnectWS() {
    if (hostRequestTimeout) {
        clearTimeout(hostRequestTimeout);
        hostRequestTimeout = null;
    }
    if (wsClient) {
        try {
            wsClient.end(true);
        } catch (e) {}
        wsClient = null;
    }
}

function connectToRoomWS(code, onConnected) {
    disconnectWS();
    roomTopic = `cinematch_live_2026/room/${code}`;
    const clientId = "cm_" + Math.random().toString(16).slice(2, 10);

    wsClient = mqtt.connect(WS_BROKER, {
        clientId: clientId,
        clean: true,
        connectTimeout: 6000,
        reconnectPeriod: 2000
    });

    wsClient.on("connect", () => {
        wsClient.subscribe(roomTopic, { qos: 1 }, (err) => {
            if (!err && onConnected) onConnected();
        });
    });

    wsClient.on("message", (topic, payload) => {
        if (topic !== roomTopic) return;
        try {
            const msg = JSON.parse(payload.toString());
            handleWSMessage(msg);
        } catch (err) {
            console.error("Eroare parsare mesaj WS:", err);
        }
    });

    wsClient.on("error", (err) => {
        console.error("Eroare conexiune WS:", err);
    });
}

function sendWS(msg) {
    if (wsClient && wsClient.connected) {
        wsClient.publish(roomTopic, JSON.stringify(msg), { qos: 1 });
    }
}

function handleWSMessage(msg) {
    if (!msg || !msg.type) return;

    // 1. Gazda primește cerere de la un participant nou
    if (msg.type === "JOIN_REQUEST" && isHost && roomState) {
        const exists = roomState.players.some(p => p.id === msg.playerId);
        if (!exists) {
            roomState.players.push({
                id: msg.playerId,
                name: msg.name,
                isHost: false,
                status: "pending",
                done: false
            });
        }
        updateLobbyUI();
        sendWS({ type: "ROOM_SYNC", state: roomState });
    }

    // 2. Sincronizare generală a camerei
    if (msg.type === "ROOM_SYNC" && msg.state) {
        const prevStatus = roomState ? roomState.status : "waiting";
        roomState = msg.state;

        if (!isHost) {
            const me = roomState.players.find(p => p.id === currentPlayerId);
            if (me) {
                myApprovalStatus = me.status;
                if (me.status === "rejected") {
                    disconnectWS();
                    alert("Gazda a respins cererea de intrare în cameră.");
                    openRoomChoice();
                    return;
                }
            }

            if (myApprovalStatus === "pending") {
                showPendingApprovalScreen();
                return;
            }

            if (myApprovalStatus === "approved") {
                if (roomState.status === "waiting") {
                    renderApprovedLobby();
                } else if (roomState.status === "voting" && prevStatus !== "voting") {
                    beginGroupVoting(roomState.movies);
                } else if (roomState.status === "voting" && !document.getElementById("group-result-screen").classList.contains("hidden")) {
                    showGroupFinalResults();
                }
            }
        } else {
            updateLobbyUI();
            if (roomState.status === "voting" && !document.getElementById("group-result-screen").classList.contains("hidden")) {
                showGroupFinalResults();
            }
        }
    }

    // 3. Gazda primește voturile unui participant
    if (msg.type === "SUBMIT_VOTES" && isHost && roomState) {
        if (msg.votes && typeof msg.votes === "object") {
            Object.keys(msg.votes).forEach(movieId => {
                if (msg.votes[movieId]) {
                    roomState.votes[movieId] = (roomState.votes[movieId] || 0) + 1;
                }
            });
        }
        const player = roomState.players.find(p => p.id === msg.playerId);
        if (player) player.done = true;

        sendWS({ type: "ROOM_SYNC", state: roomState });
        if (!document.getElementById("group-result-screen").classList.contains("hidden")) {
            showGroupFinalResults();
        }
    }
}

// --- CREARE CAMERĂ (GAZDĂ) ---
function createRoom() {
    const nameInput = document.getElementById("player-name-input").value.trim();
    currentPlayerName = nameInput || "Gazda";
    currentPlayerId = "host_" + Math.random().toString(16).slice(2, 8);
    isHost = true;
    myApprovalStatus = "approved";

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    currentRoomCode = "CINE-" + randomNum;

    const shuffled = [...moviesDatabase].sort(() => 0.5 - Math.random()).slice(0, 8);

    roomState = {
        code: currentRoomCode,
        status: "waiting",
        players: [{
            id: currentPlayerId,
            name: currentPlayerName,
            isHost: true,
            status: "approved",
            done: false
        }],
        movies: shuffled,
        votes: {}
    };

    connectToRoomWS(currentRoomCode, () => {
        renderApprovedLobby();
        sendWS({ type: "ROOM_SYNC", state: roomState });
    });
}

// --- CERERE INTRARE ÎN CAMERĂ (PARTICIPANT) ---
function joinRoom() {
    const nameInput = document.getElementById("player-name-input").value.trim();
    let codeInput = document.getElementById("join-code-input").value.trim().toUpperCase().replace("#", "");

    if (!codeInput) {
        alert("Te rog să introduci codul camerei!");
        return;
    }

    currentPlayerName = nameInput || "Invitat";
    currentPlayerId = "p_" + Math.random().toString(16).slice(2, 8);
    isHost = false;
    myApprovalStatus = "pending";
    currentRoomCode = codeInput;
    roomState = null;

    showPendingApprovalScreen();

    connectToRoomWS(currentRoomCode, () => {
        sendWS({
            type: "JOIN_REQUEST",
            playerId: currentPlayerId,
            name: currentPlayerName
        });

        hostRequestTimeout = setTimeout(() => {
            if (!roomState && myApprovalStatus === "pending") {
                disconnectWS();
                alert("Nu s-a găsit nicio cameră activă cu codul #" + currentRoomCode + " sau conexiunea a fost blocată.");
                openRoomChoice();
            }
        }, 6000);
    });
}

function showPendingApprovalScreen() {
    if (hostRequestTimeout) {
        clearTimeout(hostRequestTimeout);
        hostRequestTimeout = null;
    }
    showScreen('lobby-screen');
    document.getElementById("lobby-room-code").innerText = "#" + currentRoomCode;

    const qrBox = document.getElementById("qrcode-box");
    if (qrBox) qrBox.innerHTML = "";

    const startBtn = document.getElementById("btn-start-group");
    if (startBtn) startBtn.classList.add("hidden");

    const waitMsg = document.getElementById("waiting-host-msg");
    if (waitMsg) {
        waitMsg.classList.remove("hidden");
        waitMsg.innerText = "⏳ Cererea ta a fost trimisă. Aștepți aprobarea gazdei...";
    }

    const list = document.getElementById("players-list");
    if (list) {
        list.innerHTML = `<li><span>⏳ ${currentPlayerName}</span><span style="color:#fbbf24; font-size:0.85rem;">În așteptarea gazdei</span></li>`;
    }
    const countEl = document.getElementById("players-count");
    if (countEl) countEl.innerText = "0";
}

function renderApprovedLobby() {
    showScreen('lobby-screen');
    document.getElementById("lobby-room-code").innerText = "#" + currentRoomCode;
    const vipCode = document.getElementById("vip-room-code");
    if (vipCode) vipCode.innerText = "#" + currentRoomCode;

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

    const startBtn = document.getElementById("btn-start-group");
    const waitMsg = document.getElementById("waiting-host-msg");

    if (isHost) {
        if (startBtn) startBtn.classList.remove("hidden");
        if (waitMsg) waitMsg.classList.add("hidden");
    } else {
        if (startBtn) startBtn.classList.add("hidden");
        if (waitMsg) {
            waitMsg.classList.remove("hidden");
            waitMsg.innerText = "✅ Ai fost acceptat în cameră! Așteaptă ca gazda să dea START.";
        }
    }

    updateLobbyUI();
}

function updateLobbyUI() {
    if (!roomState) return;
    const list = document.getElementById("players-list");
    if (!list) return;

    list.innerHTML = "";
    const approvedPlayers = roomState.players.filter(p => p.status === "approved");

    roomState.players.forEach(p => {
        if (p.status === "rejected") return;

        let rightContent = "";
        if (p.isHost) {
            rightContent = '<span class="host-tag">GAZDĂ</span>';
        } else if (p.status === "approved") {
            rightContent = '<span style="color:#4ade80; font-size:0.85rem; font-weight:bold;">✔ În cameră</span>';
        } else if (isHost && p.status === "pending") {
            rightContent = `
                <button onclick="approvePlayer('${p.id}')" style="background:#10b981; color:white; border:none; padding:4px 9px; border-radius:6px; cursor:pointer; font-size:0.75rem; margin-right:6px;">Acceptă</button>
                <button onclick="rejectPlayer('${p.id}')" style="background:#ef4444; color:white; border:none; padding:4px 9px; border-radius:6px; cursor:pointer; font-size:0.75rem;">Respinge</button>
            `;
        } else {
            rightContent = '<span style="color:#fbbf24; font-size:0.8rem;">În așteptare...</span>';
        }

        list.innerHTML += `
            <li style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span>👤 ${p.name}</span>
                <div>${rightContent}</div>
            </li>
        `;
    });

    const countEl = document.getElementById("players-count");
    if (countEl) countEl.innerText = approvedPlayers.length;
}

function approvePlayer(playerId) {
    if (!isHost || !roomState) return;
    const target = roomState.players.find(p => p.id === playerId);
    if (target) {
        target.status = "approved";
        updateLobbyUI();
        sendWS({ type: "ROOM_SYNC", state: roomState });
    }
}

function rejectPlayer(playerId) {
    if (!isHost || !roomState) return;
    const target = roomState.players.find(p => p.id === playerId);
    if (target) {
        target.status = "rejected";
        updateLobbyUI();
        sendWS({ type: "ROOM_SYNC", state: roomState });
    }
}

function hostStartVoting() {
    if (!isHost || !roomState) return;
    roomState.status = "voting";
    sendWS({ type: "ROOM_SYNC", state: roomState });
    beginGroupVoting(roomState.movies);
}

function beginGroupVoting(movies) {
    votingPool = movies || [];
    groupMovieIndex = 0;
    myVotes = {};
    showScreen('group-voting-screen');
    const label = document.getElementById("voting-player-label");
    if (label) label.innerHTML = `Votezi ca: <strong>${currentPlayerName}</strong>`;
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
    if (m && liked) {
        myVotes[m.id] = 1;
    }
    groupMovieIndex++;
    loadGroupMovie();
}

function submitGroupVotes() {
    if (isHost && roomState) {
        Object.keys(myVotes).forEach(id => {
            if (myVotes[id]) {
                roomState.votes[id] = (roomState.votes[id] || 0) + 1;
            }
        });
        const me = roomState.players.find(p => p.id === currentPlayerId);
        if (me) me.done = true;
        sendWS({ type: "ROOM_SYNC", state: roomState });
    } else {
        sendWS({
            type: "SUBMIT_VOTES",
            playerId: currentPlayerId,
            player: currentPlayerName,
            votes: myVotes
        });
        if (roomState) {
            Object.keys(myVotes).forEach(id => {
                if (myVotes[id]) {
                    roomState.votes[id] = (roomState.votes[id] || 0) + 1;
                }
            });
        }
    }
    showGroupFinalResults();
}

function showGroupFinalResults() {
    showScreen('group-result-screen');
    const container = document.getElementById("group-ranking-container");
    if (!container) return;
    container.innerHTML = "";

    const approvedCount = roomState
        ? Math.max(1, roomState.players.filter(p => p.status === "approved").length)
        : 1;

    const pool = (roomState && roomState.movies && roomState.movies.length) ? roomState.movies : votingPool;

    const ranked = pool
        .map(m => ({
            ...m,
            score: (roomState && roomState.votes && roomState.votes[m.id]) ? roomState.votes[m.id] : 0
        }))
        .sort((a, b) => b.score - a.score);

    ranked.forEach((m, index) => {
        const percent = Math.round((m.score / approvedCount) * 100);
        const isWinner = index === 0 && m.score > 0;
        const badgeText = isWinner
            ? `🏆 RĂSPUNS FINAL / CÂȘTIGĂTOR (${m.score}/${approvedCount} voturi)`
            : `${m.score}/${approvedCount} voturi (${percent}%)`;

        container.innerHTML += `
            <div class="movie-item" style="${isWinner ? 'border-left-color: #fbbf24;' : ''}">
                <div class="movie-header">
                    <span class="movie-title">${m.title}</span>
                    <span class="match-badge" style="${isWinner ? 'background:#d97706;' : ''}">${badgeText}</span>
                </div>
                <div class="movie-meta">An: ${m.year} | Gen: ${m.genre}</div>
                <div class="movie-desc">${m.desc}</div>
            </div>
        `;
    });
}

function leaveRoom() {
    disconnectWS();
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
// --- ONBOARDING SLIDES ---
const onboardingSlides = [
    {
        icon: "🍿",
        title: "Bine ai venit la CineMatch!",
        desc: "Nu mai pierde o oră căutând la ce să te uiți. Găsim filmul potrivit în câteva secunde."
    },
    {
        icon: "👥",
        title: "Seară de film cu gașca",
        desc: "Creează o cameră privată, aprobă-ți prietenii în lobby și votați împreună filmul câștigător."
    },
    {
        icon: "🎡",
        title: "Quiz Rapid & Roata Norocului",
        desc: "Ești singur sau nehotărât? Răspunde la 6 întrebări scurte sau lasă roata să decidă pentru tine!"
    }
];

let currentSlide = 0;

function nextOnboardingSlide() {
    currentSlide++;
    if (currentSlide >= onboardingSlides.length) {
        finishOnboarding();
        return;
    }

    const slide = onboardingSlides[currentSlide];
    document.getElementById("slide-icon").innerText = slide.icon;
    document.getElementById("slide-title").innerText = slide.title;
    document.getElementById("slide-desc").innerText = slide.desc;

    // Actualizare buline
    const dots = document.querySelectorAll("#slide-dots .dot");
    dots.forEach((d, idx) => {
        d.classList.toggle("active-dot", idx === currentSlide);
    });

    // Pe ultimul slide schimbăm textul butonului
    if (currentSlide === onboardingSlides.length - 1) {
        document.getElementById("btn-next-slide").innerText = "Începe acum 🚀";
    }
}

function finishOnboarding() {
    showScreen('home-screen');
}