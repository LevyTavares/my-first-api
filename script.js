// URL da sua API no Render
const API_URL = "http://127.0.0.1:8000/me"

// Seleciona o elemento HTML onde as informações serão mostradas
const profileInfoDiv = document.getElementById('profile-info');
const mainTitle = document.querySelector('h1');

// Função para buscar os dados da API
async function fetchProfileData() {
    try {
        const response = await fetch(API_URL);
        
        // Verifica se a resposta foi bem-sucedida (status 200)
        if (!response.ok) {
            throw new Error(`Erro na rede: ${response.status}`);
        }
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Remove a mensagem de carregamento
        mainTitle.textContent = "Meu Perfil";

        // Exibe os dados na página
        displayProfileData(data);
        
    } catch (error) {
        console.error("Falha ao carregar os dados:", error);
        mainTitle.textContent = "Erro ao carregar os dados";
    }
}

// Função para exibir os dados no HTML
function displayProfileData(data) {
    // Limpa o conteúdo anterior
    profileInfoDiv.innerHTML = '';
    
    // Cria um elemento HTML para cada item de informação
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
    github.textContent = `GitHub: ${data.github}`;
    
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