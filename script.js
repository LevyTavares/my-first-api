// URLs da sua API (local e online)
const API_URL_LOCAL = "http://127.0.0.1:8000/me";
const API_URL_ONLINE = "https://my-first-api-d6j0.onrender.com/me";

// Seleciona os elementos HTML
const profileInfoDiv = document.getElementById('profile-info');
const mainTitle = document.querySelector('h1');

// Função para buscar os dados da API
async function fetchProfileData() {
    try {
        mainTitle.textContent = "Carregando informações...";

        // Primeiro, tenta a API local
        const responseLocal = await fetch(API_URL_LOCAL);
        
        // Se a API local responder, use os dados dela
        if (responseLocal.ok) {
            const data = await responseLocal.json();
            mainTitle.textContent = "Meu Perfil (Local)";
            displayProfileData(data);
            return;
        }
    } catch (error) {
        console.warn("Falha ao conectar na API local. Tentando a API online...");
    }

    // Se a API local falhou, tenta a API online
    try {
        const responseOnline = await fetch(API_URL_ONLINE);
        
        if (responseOnline.ok) {
            const data = await responseOnline.json();
            mainTitle.textContent = "Meu Perfil (Online)";
            displayProfileData(data);
            return;
        }
    } catch (error) {
        console.error("Falha ao carregar os dados de ambas as APIs:", error);
    }

    // Se nenhuma das APIs funcionou
    mainTitle.textContent = "Erro ao carregar os dados";
}

// Função para exibir os dados no HTML
function displayProfileData(data) {
    profileInfoDiv.innerHTML = '';
    
    // Cria os elementos HTML para cada item de informação
    const name = document.createElement('div');
    name.className = 'info-item';
    name.textContent = `Nome: ${data.nome}`;
    
    const email = document.createElement('div');
    email.className = 'info-item';
    email.textContent = `Email: ${data.email}`;
    
    const curso = document.createElement('div');
    curso.className = 'info-item';
    curso.textContent = `Curso: ${data.curso}`;

    const github = document.createElement('div');
    github.className = 'info-item';
    const githubLink = document.createElement('a');
    githubLink.href = data.github;
    githubLink.target = "_blank";
    githubLink.textContent = data.github;
    github.appendChild(document.createTextNode('GitHub: '));
    github.appendChild(githubLink);
    
    const cidade = document.createElement('div');
    cidade.className = 'info-item';
    cidade.textContent = `Cidade: ${data.cidade}`;

    const interesses = document.createElement('div');
    interesses.className = 'info-item';
    interesses.textContent = `Interesses: ${data.interesses.join(', ')}`;
    
    // Adiciona os elementos ao contêiner
    profileInfoDiv.appendChild(name);
    profileInfoDiv.appendChild(email);
    profileInfoDiv.appendChild(curso);
    profileInfoDiv.appendChild(github);
    profileInfoDiv.appendChild(cidade);
    profileInfoDiv.appendChild(interesses);
}

// Executa a função ao carregar a página
fetchProfileData();