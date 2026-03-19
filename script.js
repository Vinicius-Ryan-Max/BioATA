const bancoDeDados = {
    capivara: {
        titulo: "Capivara",
        cientifico: "Hydrochoerus hydrochaeris",
        imagem: "Capivara.jpg.webp",
        cor: "#5D4037",
        desc: "É o maior roedor do mundo!",
        onde: "Muito comum nas margens da Avenida Pompeu de Toledo e no Parque Baguaçu.",
        curiosidade: "Elas são excelentes nadadoras e conseguem ficar até 5 minutos debaixo d'água."
    },
    loboGuara: {
        titulo: "Lobo-guará",
        cientifico: "Chrysocyon brachyurus",
        imagem: "lobo.webp",
        cor: "#5D4037",
        desc: "É uma espécie de canídeo endêmico da América do Sul.",
        onde: "Áreas rurais e plantações de cana-de-açúcar, ou zonas urbanas próximas a matas.",
        curiosidade: "É o maior canídeo da América do Sul e o mais alto do mundo."
    },
    Tuiuiú: {
        titulo: "Tuiuiú",
        cientifico: "Jabiru mycteria",
        imagem: "Tuiuiú.jpg",
        cor: "#5D4037",
        desc: "é uma ave ciconiforme da família Ciconiidae. É considerado a ave-símbolo do Pantanal e pode ser encontrado desde o México até o Uruguai.",
        onde: "Visitor frequente do Rio Tietê em Araçatuba devido às grandes áreas alagadas.",
        curiosidade: "O Tuiuiú tem uma mancha vermelha no pescoço que ajuda a controlar a temperatura do corpo."
    },
    araraCaninde: {
        titulo: "Arara-Canindé",
        cientifico: "Ara ararauna",
        imagem: "Caninde.webp",
        cor: "#5D4037",
        desc: "Uma das aves mais belas da nossa região, conhecida pelas cores azul e amarelo vibrantes.",
        onde: "Avenida Brasília, Pompeu de Toledo e em bairros com muitas palmeiras.",
        curiosidade: "Elas formam casais para a vida toda."
    },
    oncaParda: {
        titulo: "Onça-Parda",
        cientifico: "Puma concolor",
        imagem: "OnçaParda.avif",
        cor: "#5D4037",
        desc: "O segundo maior felino das Américas, extremamente ágil e solitária.",
        onde: "Nas reservas de mata preservada e matas ciliares do Rio Tietê.",
        curiosidade: "Diferente da Onça-Pintada, a Parda não ruge; ela emite um som agudo."
    },
    tamandua: {
        titulo: "Tamanduá-Bandeira",
        cientifico: "Myrmecophaga tridactyla",
        imagem: "tamandua.jpg",
        cor: "#795548",
        desc: "O maior dos tamanduás, possui uma cauda que parece uma bandeira.",
        onde: "Áreas de pastagens e cerrados ao redor de Araçatuba.",
        curiosidade: "Sua língua pode medir até 60cm!"
    },
    tatu: {
        titulo: "Tatu-Galinha",
        cientifico: "Dasypus novemcinctus",
        imagem: "tatu.jpg",
        cor: "#8d6e63",
        desc: "Possui uma carapaça protetora e é um excelente escavador.",
        onde: "Comum em áreas rurais e matas ciliares da região.",
        curiosidade: "Ele não se enrola como uma bola (quem faz isso é o tatu-bola)."
    },
    ipeAmarelo: {
        titulo: "Ipê-Amarelo",
        cientifico: "Handroanthus albus",
        imagem: "ipe-amarelo.webp",
        cor: "#9ccc65",
        desc: "Árvore símbolo do Brasil, famosa por sua florada intensa no inverno.",
        onde: "Avenidas Pompeu de Toledo, dos Araçás e Alto da Saudade.",
        curiosidade: "A florada dura poucos dias."
    },
    oiti: {
        titulo: "Oiti",
        cientifico: "Licania tomentosa",
        imagem: "oiti.jpg",
        cor: "#9ccc65",
        desc: "Árvore mais comum nas calçadas de Araçatuba.",
        onde: "Em quase todas as ruas residenciais da cidade.",
        curiosidade: "Sua sombra é a favorita para enfrentar os 40°C."
    },
    araca: {
        titulo: "Araçá",
        cientifico: "Psidium cattleianum",
        imagem: "araça.jpg",
        cor: "#9ccc65",
        desc: "A árvore que deu nome à nossa cidade.",
        onde: "Parque Baguaçu e quintais antigos.",
        curiosidade: "O fruto parece uma mini goiaba."
    },
    paineira: {
        titulo: "Paineira-Rosa",
        cientifico: "Ceiba speciosa",
        imagem: "paineira.jpg",
        cor: "#9ccc65",
        desc: "Uma árvore majestosa que pode atingir até 30 metros.",
        onde: "Entrada da cidade e recinto da Expô.",
        curiosidade: "Seus frutos soltam uma lã branca chamada paina."
    },
    flamboyant: {
        titulo: "Flamboyant",
        cientifico: "Delonix regia",
        imagem: "flamboyant.jpg",
        cor: "#9ccc65",
        desc: "Uma das árvores mais coloridas do mundo.",
        onde: "Praças de Araçatuba e escolas.",
        curiosidade: "O nome significa 'flamejante'."
    },
    ipe_rosa: {
        titulo: "Ipê-Rosa",
        cientifico: "Handroanthus heptaphyllus",
        imagem: "ipe-rosa.jpg",
        cor: "#ec407a",
        desc: "Floresce entre junho e agosto.",
        onde: "Muito utilizado no paisagismo urbano.",
        curiosidade: "Cria um tapete rosa no chão."
    },
    jacaranda: {
        titulo: "Jacarandá-Mimoso",
        cientifico: "Jacaranda mimosifolia",
        imagem: "jacaranda.jpg",
        cor: "#7e57c2",
        desc: "Árvore de porte médio com flores roxas.",
        onde: "Presente em várias praças da cidade.",
        curiosidade: "Originalmente nativo da Argentina e Bolívia."
    }
};

function mostrarBio(id) {
    const painel = document.getElementById('detalhes');
    const item = bancoDeDados[id]; 

    painel.innerHTML = `
        <h2 style="color: ${item.cor}; font-size: 45px; margin-bottom: 5px;">${item.titulo}</h2>
        <p class="nome-cientifico"><strong>${item.cientifico}</strong></p>
        
        <img src="imagens/${item.imagem}" style="width: 80%; border-radius: 15px; margin-top: 10px;">

        <div class="interacao">
             <button id="btn-like" onclick="darLike('${id}')">
                <span id="icone-coracao">❤</span> <span id="contagem-likes">0</span>
             </button>
        </div>

        <div style="text-align: left; margin-top: 20px;">
            <p><strong>Descrição:</strong> ${item.desc}</p>
            <p><strong>Onde encontrar em Araçatuba:</strong> ${item.onde}</p>
            <p><strong>Curiosidade:</strong> ${item.curiosidade}</p>
        </div>

        <div class="secao-comentarios">
            <h3>Deixe um recado:</h3>
            <input type="text" id="nome-usuario" placeholder="Seu nome">
            <textarea id="texto-comentario" placeholder="O que você acha?"></textarea>
            <button onclick="postarComentario('${id}')">Enviar</button>
            <div id="lista-comentarios"></div>
        </div>

        <button id="btn-inicio" onclick="location.reload()" style="display: block; margin: 30px auto; padding: 12px 30px; background-color: white; color: #2e7d32; border: 2px solid #2e7d32; border-radius: 30px; font-weight: bold; cursor: pointer;">Início</button>
    `;

    carregarDadosFirebase(id);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function carregarDadosFirebase(id) {
    if (!window.fb) return;

    window.fb.onSnapshot(window.fb.doc(window.db, "likes", id), (doc) => {
        const spanLikes = document.getElementById('contagem-likes');
        if (doc.exists() && spanLikes) {
            spanLikes.innerText = doc.data().contagem || 0;
        }
    });

    const q = window.fb.query(
        window.fb.collection(window.db, "comentarios"), 
        window.fb.where("especieId", "==", id),
        window.fb.orderBy("dataEnvio", "desc")
    );

    window.fb.onSnapshot(q, (snapshot) => {
        let lista = document.getElementById('lista-comentarios');
        if (!lista) return;
        lista.innerHTML = "";
        snapshot.forEach((doc) => {
            let dados = doc.data();
            lista.innerHTML += `
                <div class="comentario" style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 15px; border-left: 5px solid #2e7d32; text-align: left;">
                    <strong>${dados.nome}:</strong>
                    <p style="margin: 5px 0 0 0;">${dados.texto}</p>
                </div>`;
        });
    });
}

function pesquisar() {
    let input = document.getElementById('campoBusca').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let nome = card.querySelector('.nome-card').innerText.toLowerCase();
        card.style.display = nome.includes(input) ? "block" : "none";
    });
}

async function darLike(id) {
    if (!window.fb) return; 
    const btn = document.getElementById('btn-like');
    btn.classList.toggle('curtido');
    const docRef = window.fb.doc(window.db, "likes", id);
    try {
        await window.fb.updateDoc(docRef, { contagem: window.fb.increment(1) });
    } catch (e) {
        await window.fb.setDoc(docRef, { contagem: 1 });
    }
}

async function postarComentario(id) {
    let nome = document.getElementById('nome-usuario').value;
    let texto = document.getElementById('texto-comentario').value;
    if(nome && texto) {
        if (!window.fb) return;
        await window.fb.addDoc(window.fb.collection(window.db, "comentarios"), {
            especieId: id,
            nome: nome,
            texto: texto,
            dataEnvio: new Date()
        });
        document.getElementById('nome-usuario').value = "";
        document.getElementById('texto-comentario').value = "";
    } else {
        alert("Ops! Digite seu nome e uma mensagem antes de enviar.");
    }
}