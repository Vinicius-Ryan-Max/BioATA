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
        imagem: "Lobo-guará.jpg.webp",
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
        desc: "é uma ave ciconiforme da família Ciconiidae. É considerado a ave-símbolo do Pantanal e pode ser encontrado desde o México até o Uruguai, sendo que as maiores populações estão no Pantanal e no Chaco oriental, no Paraguai.",
        onde: "Apesar de ser a ave-símbolo do Pantanal, o Tuiuiú é um visitante frequente do Rio Tietê em Araçatuba devido às grandes áreas alagadas da nossa região.",
        curiosidade: "O Tuiuiú Tem uma mancha vermelha no poscoço que nao é so enfeite, quando esta calor ele infla esse papo para ajudar a resfriar o sangue e controlar a temperatura do corpo."
    },
    araraCaninde: {
        titulo: "Arara-Canindé",
        cientifico: "Ara ararauna",
        imagem: "Canindé.webp",
        cor: "#5D4037",
        desc: "Uma das aves mais belas da nossa região, conhecida pelas cores azul e amarelo vibrantes.",
        onde: "Avenida Brasília, Pompeu de Toledo e em bairros com muitas palmeiras.",
        curiosidade: "Elas formam casais para a vida toda. Se você vir duas voando juntas, provavelmente são parceiras fiéis."
    },
    oncaParda: {
        titulo: "Onça-Parda",
        cientifico: "Puma concolor",
        imagem: "OnçaParda.avif",
        cor: "#5D4037",
        desc: "O segundo maior felino das Américas, extremamente ágil e solitária.",
        onde: "Nas reservas de mata preservada e matas ciliares do Rio Tietê e Rio Aguapeí.",
        curiosidade: "Diferente da Onça-Pintada, a Parda não ruge; ela emite um som agudo, similar a um miado de gato gigante."
    },
    tamandua: {
        titulo: "Tamanduá-Bandeira",
        cientifico: "Myrmecophaga tridactyla",
        imagem: "tamandua.jpg",
        cor: "#795548",
        desc: "O maior dos tamanduás, possui uma cauda que parece uma bandeira e não tem dentes.",
        onde: "Áreas de pastagens e cerrados ao redor de Araçatuba.",
        curiosidade: "Ele usa suas garras poderosas para abrir formigueiros e sua língua pode medir até 60cm!"
    },
    tatu: {
        titulo: "Tatu-Galinha",
        cientifico: "Dasypus novemcinctus",
        imagem: "tatu.jpg",
        cor: "#8d6e63",
        desc: "Possui uma carapaça protetora e é um excelente escavador.",
        onde: "Comum em áreas rurais e matas ciliares da região.",
        curiosidade: "Quando se sente ameaçado, ele corre para sua toca ou tenta se enterrar rapidamente, mas não se enrola como uma bola (quem faz isso é o tatu-bola)."
    },
    ipeAmarelo: {
        titulo: "Ipê-Amarelo",
        cientifico: "Handroanthus albus",
        imagem: "ipe-amarelo.webp",
        cor: "#9ccc65",
        desc: "Árvore símbolo do Brasil, famosa por sua florada intensa que acontece no inverno.",
        onde: "Avenidas Pompeu de Toledo, dos Araçás e na região do Alto da Saudade.",
        curiosidade: "A florada dura poucos dias e acontece justamente quando a árvore perde todas as suas folhas para enfrentar a seca."
    },
    oiti: {
        titulo: "Oiti",
        cientifico: "Licania tomentosa",
        imagem: "oiti.jpg",
        cor: "#9ccc65",
        desc: "É a árvore mais comum nas calçadas de Araçatuba por causa de sua sombra generosa.",
        onde: "Em quase todas as ruas residenciais da cidade.",
        curiosidade: "Suas folhas ficam verdes o ano todo, por isso é a favorita para enfrentar o nosso calor de 40°C."
    },
    araca: {
        titulo: "Araçá",
        cientifico: "Psidium cattleianum",
        imagem: "araça.jpg",
        cor: "#9ccc65",
        desc: "A árvore que deu nome à nossa cidade (Araçatuba significa 'Lugar de muitos Araçás').",
        onde: "Parque Baguaçu e em quintais antigos de Araçatuba.",
        curiosidade: "O fruto do Araçá parece uma mini goiaba e é riquíssimo em Vitamina C."
    },
    paineira: {
        titulo: "Paineira-Rosa",
        cientifico: "Ceiba speciosa",
        imagem: "paineira.jpg",
        cor: "#9ccc65",
        desc: "Uma árvore majestosa que pode atingir até 30 metros de altura.",
        onde: "Entrada da cidade e em áreas abertas como o recinto da Expô.",
        curiosidade: "O tronco da paineira jovem é cheio de espinhos para se proteger, e seus frutos soltam uma lã branca chamada paina."
    },
    flamboyant: {
        titulo: "Flamboyant",
        cientifico: "Delonix regia",
        imagem: "flamboyant.jpg",
        cor: "#9ccc65",
        desc: "Uma das árvores mais coloridas do mundo, com uma copa imensa em formato de guarda-chuva.",
        onde: "Muito comum em praças de Araçatuba e na arborização de escolas e clubes.",
        curiosidade: "O nome vem do francês e significa 'flamejante', por causa da cor vermelha viva de suas flores que cobrem toda a árvore."
    },
    ipe_rosa: {
        titulo: "Ipê-Rosa",
        cientifico: "Handroanthus heptaphyllus",
        imagem: "ipe-rosa.jpg",
        cor: "#ec407a",
        desc: "Uma das árvores mais bonitas do Brasil, floresce entre junho e agosto.",
        onde: "Muito utilizado no paisagismo urbano em Araçatuba.",
        curiosidade: "Sua floração dura pouco tempo, geralmente entre 7 a 10 dias, criando um tapete rosa no chão."
    },
    jacaranda: {
        titulo: "Jacarandá-Mimoso",
        cientifico: "Jacaranda mimosifolia",
        imagem: "jacaranda.jpg",
        cor: "#7e57c2",
        desc: "Árvore de porte médio com flores roxas/azuladas em formato de sino.",
        onde: "Presente em várias praças e calçadas da cidade.",
        curiosidade: "Apesar de muito comum no Brasil, ele é originalmente nativo da Argentina e Bolívia."
    },
}
function mostrarBio(id) {
    const painel = document.getElementById('detalhes');
    const item = bancoDeDados[id]; 

    // Abrimos a crase aqui no começo
    painel.innerHTML = `
        <h2 style="color: ${item.cor}; font-size: 45px; margin-bottom: 5px;">${item.titulo}</h2>
        <p class="nome-cientifico">${item.cientifico}</p>
        
        <img src="imagens/${item.imagem}" style="width: 80%; border-radius: 15px; margin-top: 10px;">

        <div class="interacao">
             <button id="btn-like" onclick="darLike()">
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
            <button onclick="postarComentario()">Enviar</button>
            <div id="lista-comentarios"></div>
        </div>

        <button onclick="location.reload()" style="margin-top:20px; cursor:pointer;">Início</button>
    `; // Fechamos a crase só aqui no final!
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function pesquisar() {
    // 1. Pega o valor digitado e transforma em minúsculo
    let input = document.getElementById('campoBusca').value.toLowerCase();
    
    // 2. Pega todos os cards de Fauna e Flora
    let cards = document.querySelectorAll('.card');

    // 3. Percorre cada card
    cards.forEach(card => {
        // Pega o nome que está dentro do parágrafo do card
        let nome = card.querySelector('.nome-card').innerText.toLowerCase();
        
        // 4. Se o nome contiver o que foi digitado, mostra. Se não, esconde.
        if (nome.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
// --- PARTE DAS CURTIDAS ---
async function darLike() {
    const btn = document.getElementById('btn-like');
    btn.classList.toggle('curtido');

    if (!window.fb) return; // Segurança: se o Firebase não carregou, não faz nada

    const docRef = window.fb.doc(window.db, "interacoes", "likes-gerais");

    try {
        await window.fb.updateDoc(docRef, {
            contagem: window.fb.increment(1)
        });
    } catch (e) {
        await window.fb.setDoc(docRef, { contagem: 1 });
    }
}

// --- PARTE DOS COMENTÁRIOS ---
async function postarComentario() {
    let nome = document.getElementById('nome-usuario').value;
    let texto = document.getElementById('texto-comentario').value;
    
    if(nome && texto) {
        if (!window.fb) return;

        await window.fb.addDoc(window.fb.collection(window.db, "comentarios"), {
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

// --- FUNÇÃO PARA INICIALIZAR OS "ESCUTADORES" DO BANCO ---
// Criamos essa função para rodar só depois que o Firebase estiver pronto
function iniciarBancoDeDados() {
    if (window.fb && window.db) {
        // Escutar Likes
        window.fb.onSnapshot(window.fb.doc(window.db, "interacoes", "likes-gerais"), (doc) => {
            const spanLikes = document.getElementById('contagem-likes');
            if (doc.exists() && spanLikes) {
                spanLikes.innerText = doc.data().contagem;
            }
        });

        // Escutar Comentários
        const q = window.fb.query(window.fb.collection(window.db, "comentarios"), window.fb.orderBy("dataEnvio", "desc"));
        window.fb.onSnapshot(q, (snapshot) => {
            let lista = document.getElementById('lista-comentarios');
            if (!lista) return; // Se não estiver na tela de detalhes, ignora
            
            lista.innerHTML = "";
            snapshot.forEach((doc) => {
                let dados = doc.data();
                let novoComentario = `
                    <div class="comentario" style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 15px; border-left: 5px solid #2e7d32; text-align: left;">
                        <strong>${dados.nome}:</strong>
                        <p style="margin: 5px 0 0 0;">${dados.texto}</p>
                    </div>`;
                lista.innerHTML += novoComentario;
            });
        });
    } else {
        // Se ainda não carregou, tenta de novo em 500ms
        setTimeout(iniciarBancoDeDados, 500);
    }
}

// Chama a função pela primeira vez
iniciarBancoDeDados();