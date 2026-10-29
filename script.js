// ==========================================
// 1. BANCO DE DADOS DE ELEMENTOS E RECEITAS
// ==========================================
const database = {
    elements: {
        // Primordiais
        fogo: { name: 'Fogo', emoji: '🔥', rarity: 'Comum', unlocked: true },
        agua: { name: 'Água', emoji: '💧', rarity: 'Comum', unlocked: true },
        terra: { name: 'Terra', emoji: '🌍', rarity: 'Comum', unlocked: true },
        ar: { name: 'Ar', emoji: '💨', rarity: 'Comum', unlocked: true },
        
        // Descobertas
        vapor: { name: 'Vapor', emoji: '♨️', rarity: 'Comum', unlocked: false },
        lama: { name: 'Lama', emoji: '💩', rarity: 'Comum', unlocked: false },
        energia: { name: 'Energia', emoji: '⚡', rarity: 'Incomum', unlocked: false },
        planta: { name: 'Planta', emoji: '🌱', rarity: 'Incomum', unlocked: false },
        pedra: { name: 'Pedra', emoji: '🪨', rarity: 'Comum', unlocked: false },
        tempestade: { name: 'Tempestade', emoji: '⛈️', rarity: 'Raro', unlocked: false },
        lava: { name: 'Lava', emoji: '🌋', rarity: 'Raro', unlocked: false },
        vida: { name: 'Vida', emoji: '🧬', rarity: 'Lendário', unlocked: false },

        // Novos elementos
        nuvem: { name: 'Nuvem', emoji: '☁️', rarity: 'Comum', unlocked: false },
        metal: { name: 'Metal', emoji: '⚙️', rarity: 'Incomum', unlocked: false },
        ciclo: { name: 'Ciclo', emoji: '🌒', rarity: 'Comum', unlocked: false },
        ciclo_vida: { name: 'Ciclo da Vida', emoji: '🍃', rarity: 'Comum', unlocked: false },
        obsidiana: { name: 'Obsidiana', emoji: '🖤', rarity: 'Raro', unlocked: false },
        argila: { name: 'Argila', emoji: '🏺', rarity: 'Comum', unlocked: false },
        fosforo: { name: 'Fósforo', emoji: '🧨', rarity: 'Comum', unlocked: false },
        madeira: { name: 'Madeira', emoji: '🪵', rarity: 'Comum', unlocked: false },
        oceano: { name: 'Oceano', emoji: '🌊', rarity: 'Comum', unlocked: false },
        areia: { name: 'Areia', emoji: '🏖️', rarity: 'Incomum', unlocked: false }, 
        arvore: { name: 'Árvore', emoji: '🌳', rarity: 'Comum', unlocked: false },
        flor: { name: 'Flor', emoji: '🌷', rarity: 'Raro', unlocked: false },
        pigmento: { name: 'Pigmento', emoji: '🖌️', rarity: 'Comum', unlocked: false }, 
        animal: { name: 'Animal', emoji: '🐇', rarity: 'Comum', unlocked: false },
        tsunami: { name: 'Tsunami', emoji: '🌊', rarity: 'Raro', unlocked: false },
        pangeia: { name: 'Pangeia', emoji: '🌍', rarity: 'Raro', unlocked: false }, 
        vulcao: { name: 'Vulcão', emoji: '🌋', rarity: 'Comum', unlocked: false },
        selva: { name: 'Selva', emoji: '🌲', rarity: 'Incomum', unlocked: false },
        floresta: { name: 'Floresta', emoji: '🏞️', rarity: 'Comum', unlocked: false }, 
        erupcao: { name: 'Erupção', emoji: '🌋', rarity: 'Raro', unlocked: false },
        harmatao: { name: 'Harmatão', emoji: '🌪️', rarity: 'Raro', unlocked: false },
        tempestade_areia: { name: 'Tempestade de Areia', emoji: '🌪️', rarity: 'Comum', unlocked: false },
        deserto: { name: 'Deserto', emoji: '🏜️', rarity: 'Comum', unlocked: false },
        chuva: { name: 'Chuva', emoji: '🌧️', rarity: 'Comum', unlocked: false },
        reproducao: { name: 'Reprodução', emoji: '🐭', rarity: 'Raro', unlocked: false },
        humano: { name: 'Humano', emoji: '🧑', rarity: 'Lendário', unlocked: false }, 
        
        // Elementos Bíblicos e Expansão Teológica (Adão até Jesus e Deus)
        adao: { name: 'Adão', emoji: '🧔🏻‍♂️', rarity: 'Lendário', unlocked: false }, 
        eva: { name: 'Eva', emoji: '👩🏻', rarity: 'Lendário', unlocked: false },
        cain: { name: 'Caim', emoji: '🗡️', rarity: 'Raro', unlocked: false },     
        abel: { name: 'Abel', emoji: '🐑', rarity: 'Raro', unlocked: false },     
        sete: { name: 'Sete', emoji: '👶🏻', rarity: 'Raro', unlocked: false },
        noe: { name: 'Noé', emoji: '🧔', rarity: 'Lendário', unlocked: false },
        sem: { name: 'Sem', emoji: '👦🏽', rarity: 'Raro', unlocked: false },
        cam: { name: 'Cam', emoji: '👦🏾', rarity: 'Raro', unlocked: false },
        jafe: { name: 'Jafé', emoji: '👦🏻', rarity: 'Raro', unlocked: false },
        diluvio: { name: 'Dilúvio', emoji: '🌊', rarity: 'Raro', unlocked: false },
        arca: { name: 'Arca', emoji: '⛵', rarity: 'Incomum', unlocked: false },
        arco_iris: { name: 'Arco-Íris', emoji: '🌈', rarity: 'Lendário', unlocked: false },
        moises: { name: 'Moisés', emoji: '📜', rarity: 'Lendário', unlocked: false },
        dez_mandamentos: { name: 'Dez Mandamentos', emoji: '🪨', rarity: 'Raro', unlocked: false },
        anjo: { name: 'Anjo', emoji: '👼', rarity: 'Raro', unlocked: false },
        cruz: { name: 'Cruz', emoji: '✝️', rarity: 'Incomum', unlocked: false },
        jesus: { name: 'Jesus', emoji: '🕊️', rarity: 'Lendário', unlocked: false },
        deus: { name: 'Deus', emoji: '✨', rarity: 'Lendário', unlocked: false },
        
        // Elementos Emoções
        tristeza: { name: 'Tristeza', emoji: '😟', rarity: 'Incomum', unlocked: false },
        alegria: { name: 'Alegria', emoji: '😀', rarity: 'Comum', unlocked: false },
        raiva: { name: 'Raiva', emoji: '😡', rarity: 'Incomum', unlocked: false },
        nojinho: { name: 'Nojinho', emoji: '🤢', rarity: 'Incomum', unlocked: false },
        medo: { name: 'Medo', emoji: '😱', rarity: 'Raro', unlocked: false }, 
        ansiedade: { name: 'Ansiedade', emoji: '😰', rarity: 'Incomum', unlocked: false },
        vergonha: { name: 'Vergonha', emoji: '😅', rarity: 'Raro', unlocked: false },
        inveja: { name: 'Inveja', emoji: '😏', rarity: 'Incomum', unlocked: false },
        tedio: { name: 'Tédio', emoji: '😒', rarity: 'Comum', unlocked: false },
        
        // Elementos Vida Real
        sono: { name: 'Sono', emoji: '😴', rarity: 'Incomum', unlocked: false },
        familia: { name: 'Família', emoji: '👨‍👩‍👧‍👦', rarity: 'Incomum', unlocked: false },
        pesadelo: { name: 'Pesadelo', emoji: '😱', rarity: 'Raro', unlocked: false },
        cozinha: { name: 'Cozinha', emoji: '🍳', rarity: 'Comum', unlocked: false },
        quarto: { name: 'Quarto', emoji: '🛏️', rarity: 'Comum', unlocked: false },
        banheiro: { name: 'Banheiro', emoji: '🚽', rarity: 'Raro', unlocked: false }, 
        sala: { name: 'Sala', emoji: '🛋️', rarity: 'Comum', unlocked: false } 
    },

    recipes: {
        'fogo+agua': 'vapor',
        'agua+terra': 'lama',
        'fogo+ar': 'energia',
        'terra+agua': 'planta',
        'fogo+terra': 'lava',
        'terra+fogo': 'lava',
        'ar+agua': 'tempestade',
        'pedra+fogo': 'energia',
        'agua+energia': 'vida',
        'terra+energia': 'pedra',

        // Novas receitas
        'ar+vapor': 'nuvem',
        'fogo+pedra': 'metal',
        'vida+ciclo': 'ciclo_vida',
        'lava+agua': 'obsidiana',
        'lama+fogo': 'argila',
        'terra+planta': 'madeira', 
        'fogo+madeira': 'fosforo',  
        'agua+agua': 'oceano',
        'pedra+ar': 'areia', 
        'madeira+planta': 'arvore',
        'planta+planta': 'flor',       
        'planta+fogo': 'pigmento',     
        'vida+planta': 'animal',
        'agua+oceano': 'tsunami', 
        'terra+terra': 'pangeia',
        'lava+lava': 'vulcao',
        'arvore+arvore': 'selva',
        'arvore+selva': 'floresta',
        'lava+vulcao': 'erupcao',
        'areia+nuvem': 'harmatao',
        'areia+tempestade': 'tempestade_areia',
        'areia+areia': 'deserto',
        'agua+nuvem': 'chuva',
        'animal+animal': 'reproducao',
        'vida+animal': 'humano',
        
        // Receitas Bíblicas (Adão até Jesus e Deus)
        'humano+terra': 'adao',
        'humano+vida': 'eva',
        'adao+eva': 'cain',
        'adao+reproducao': 'abel',
        'eva+reproducao': 'sete',
        'chuva+tsunami': 'diluvio',
        'madeira+oceano': 'arca',
        'humano+diluvio': 'noe',
        'noe+arca': 'arco_iris',
        'chuva+energia': 'arco_iris',
        'noe+reproducao': 'sem',
        'sem+reproducao': 'cam',
        'cam+reproducao': 'jafe',
        
        // Novas conexões até Jesus e Deus
        'humano+oceano': 'moises',
        'moises+pedra': 'dez_mandamentos',
        'humano+energia': 'anjo',
        'madeira+metal': 'cruz',
        'humano+anjo': 'jesus',
        'vida+jesus': 'deus',
        'ciclo_vida+energia': 'deus',

        // Receitas de Emoções (Humano + Sentimentos/Natureza)
        'humano+flor': 'alegria',
        'humano+chuva': 'tristeza',
        'humano+fogo': 'raiva',
        'humano+tempestade': 'medo',
        'humano+lama': 'nojinho',
        'medo+ciclo': 'ansiedade',
        'humano+pigmento': 'vergonha',
        'humano+animal': 'inveja',
        'humano+deserto': 'tedio',

        // Receitas de Vida Real (Sono, Família e Cômodos)
        'humano+ciclo': 'sono',
        'humano+reproducao': 'familia',
        'medo+sono': 'pesadelo',
        'humano+sono': 'quarto',
        'humano+fogo': 'cozinha',
        'humano+agua': 'banheiro',
        'humano+familia': 'sala'
    }
};



// Estado do Jogo
let gameState = {
    unlocked: ['fogo', 'agua', 'terra', 'ar'],
    slots: { 1: null, 2: null }
};

// ==========================================
// 2. SISTEMA DE ÁUDIO (Web Audio API)
// ==========================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'drop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'combine') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.25);
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
    } else if (type === 'rare') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.setValueAtTime(600, now + 0.1);
        osc.frequency.setValueAtTime(800, now + 0.2);
        osc.frequency.setValueAtTime(1200, now + 0.3);
        gainNode.gain.setValueAtTime(0.25, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    }
}

// ==========================================
// 3. ELEMENTOS DOM
// ==========================================
const elementsListEl = document.getElementById('elementsList');
const counterEl = document.getElementById('counter');
const searchInput = document.getElementById('searchInput');
const slot1El = document.getElementById('slot1');
const slot2El = document.getElementById('slot2');
const combineBtn = document.getElementById('combineBtn');
const clearBtn = document.getElementById('clearBtn');
const resetBtn = document.getElementById('resetBtn');
const messageLog = document.getElementById('messageLog');

const discoveryModal = document.getElementById('discoveryModal');
const modalElement = document.getElementById('modalElement');
const modalElementName = document.getElementById('modalElementName');
const modalRarity = document.getElementById('modalRarity');
const closeModalBtn = document.getElementById('closeModalBtn');

// ==========================================
// 4. INICIALIZAÇÃO E RENDERIZAÇÃO
// ==========================================
function initGame() {
    loadProgress();
    renderElements();
    updateCounter();
}

function loadProgress() {
    const saved = localStorage.getItem('elementia_save');
    if (saved) {
        try {
            gameState.unlocked = JSON.parse(saved);
        } catch(e) {
            console.error('Erro ao carregar save', e);
        }
    }
}

function saveProgress() {
    localStorage.setItem('elementia_save', JSON.stringify(gameState.unlocked));
}

function updateCounter() {
    const unlockedCount = gameState.unlocked.length;
    counterEl.textContent = `Descobertas: ${unlockedCount}`;
}

function renderElements(filter = '') {
    elementsListEl.innerHTML = '';
    
    // Ordena os elementos desbloqueados alfabeticamente para melhor navegação
    const sortedKeys = [...gameState.unlocked].sort((a, b) => {
        const nameA = database.elements[a]?.name || '';
        const nameB = database.elements[b]?.name || '';
        return nameA.localeCompare(nameB);
    });

    sortedKeys.forEach(key => {
        const el = database.elements[key];
        if (!el) return;

        if (filter && !el.name.toLowerCase().includes(filter.toLowerCase())) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'element-card';
        card.draggable = true;
        card.dataset.id = key;

        card.innerHTML = `
            <span class="emoji">${el.emoji}</span>
            <span class="name">${el.name}</span>
        `;

        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', key);
        });

        card.addEventListener('click', () => {
            placeElementInFirstAvailableSlot(key);
        });

        elementsListEl.appendChild(card);
    });
}

// ==========================================
// 5. MECÂNICAS DE JOGO & COMBINAÇÃO
// ==========================================
function placeElementInFirstAvailableSlot(elementKey) {
    if (!gameState.slots[1]) {
        setSlot(1, elementKey);
    } else if (!gameState.slots[2]) {
        setSlot(2, elementKey);
    } else {
        setSlot(1, elementKey);
    }
    playSound('drop');
}

function setSlot(slotNum, elementKey) {
    gameState.slots[slotNum] = elementKey;
    renderSlot(slotNum);
    checkCombineReady();
}

function renderSlot(slotNum) {
    const slotEl = slotNum === 1 ? slot1El : slot2El;
    const key = gameState.slots[slotNum];

    if (!key) {
        slotEl.innerHTML = `<span class="slot-placeholder">Arraste aqui</span>`;
        return;
    }

    const el = database.elements[key];
    slotEl.innerHTML = `
        <div class="element-card" style="cursor: pointer;">
            <span class="emoji">${el.emoji}</span>
            <span class="name">${el.name}</span>
        </div>
    `;

    slotEl.onclick = () => {
        gameState.slots[slotNum] = null;
        renderSlot(slotNum);
        checkCombineReady();
        playSound('drop');
    };
}

function checkCombineReady() {
    if (gameState.slots[1] && gameState.slots[2]) {
        combineBtn.disabled = false;
    } else {
        combineBtn.disabled = true;
    }
}

function performCombination() {
    const id1 = gameState.slots[1];
    const id2 = gameState.slots[2];

    if (!id1 || !id2) return;

    // Checagem bidirecional (A+B ou B+A)
    const key1 = `${id1}+${id2}`;
    const key2 = `${id2}+${id1}`;

    const resultId = database.recipes[key1] || database.recipes[key2];

    const el1 = database.elements[id1];
    const el2 = database.elements[id2];

    if (resultId) {
        const resultEl = database.elements[resultId];
        const isNew = !gameState.unlocked.includes(resultId);

        if (isNew) {
            gameState.unlocked.push(resultId);
            saveProgress();
            updateCounter();
            renderElements(searchInput.value);
            
            if (resultEl.rarity === 'Raro' || resultEl.rarity === 'Lendário') {
                playSound('rare');
            } else {
                playSound('combine');
            }

            showDiscoveryModal(resultEl);
            messageLog.innerHTML = `<p>✨ Nova descoberta! Você combinou <b>${el1.name}</b> + <b>${el2.name}</b> e obteve <b>${resultEl.name} ${resultEl.emoji}</b>!</p>`;
        } else {
            playSound('combine');
            messageLog.innerHTML = `<p>Você combinou ${el1.name} + ${el2.name} e obteve <b>${resultEl.name} ${resultEl.emoji}</b> (Já descoberto).</p>`;
        }
    } else {
        playSound('drop');
        messageLog.innerHTML = `<p>Nada aconteceu ao misturar ${el1.name} e ${el2.name}...</p>`;
    }

    clearSlots();
}

function clearSlots() {
    gameState.slots[1] = null;
    gameState.slots[2] = null;
    renderSlot(1);
    renderSlot(2);
    checkCombineReady();
}

function showDiscoveryModal(element) {
    modalElement.textContent = element.emoji;
    modalElementName.textContent = `${element.name} ${element.emoji}`;
    modalRarity.textContent = `Raridade: ${element.rarity}`;
    
    // Ajuste dinâmico de cores por raridade
    if (element.rarity === 'Lendário') {
        modalRarity.style.color = 'var(--legendary)';
    } else if (element.rarity === 'Raro') {
        modalRarity.style.color = '#3b82f6';
    } else if (element.rarity === 'Incomum') {
        modalRarity.style.color = '#a855f7';
    } else {
        modalRarity.style.color = 'var(--success)';
    }

    discoveryModal.classList.remove('hidden');
}

// ==========================================
// 6. EVENT LISTENERS
// ==========================================
[slot1El, slot2El].forEach(slot => {
    slot.addEventListener('dragover', (e) => {
        e.preventDefault();
        slot.classList.add('drag-over');
    });

    slot.addEventListener('dragleave', () => {
        slot.classList.remove('drag-over');
    });

    slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.classList.remove('drag-over');
        const elementKey = e.dataTransfer.getData('text/plain');
        const slotNum = parseInt(slot.dataset.slot);
        
        if (elementKey) {
            setSlot(slotNum, elementKey);
            playSound('drop');
        }
    });
});

combineBtn.addEventListener('click', performCombination);
clearBtn.addEventListener('click', () => {
    clearSlots();
    messageLog.innerHTML = `<p>Mesa limpa.</p>`;
    playSound('drop');
});

resetBtn.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja reiniciar todo o progresso?')) {
        localStorage.removeItem('elementia_save');
        gameState.unlocked = ['fogo', 'agua', 'terra', 'ar'];
        clearSlots();
        initGame();
        messageLog.innerHTML = `<p>Progresso reiniciado com sucesso.</p>`;
    }
});

searchInput.addEventListener('input', (e) => {
    renderElements(e.target.value);
});

closeModalBtn.addEventListener('click', () => {
    discoveryModal.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', initGame);
