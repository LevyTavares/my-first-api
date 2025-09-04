# my-first-api

🚀 my-first-api
Este projeto é uma API simples e robusta criada com Python e o framework FastAPI. Ele foi desenvolvido como um primeiro passo prático na construção de serviços web, agora com uma interface de usuário completa.

🗺️ Endpoints da API
Esta API possui dois endpoints do tipo GET prontos para uso:

/health: Verifique se a aplicação está online e funcionando perfeitamente. Retorna um status 200 OK. 💚

/me: Obtenha as informações pessoais do autor da API (nome, e-mail, curso, GitHub, cidade e interesses). 👤

⚙️ Como Rodar Localmente
Siga estes passos para colocar a API em funcionamento na sua máquina.

Clone o projeto:

Bash

git clone https://github.com/LevyTavares/my-first-api.git
cd my-first-api
Crie e ative um ambiente virtual:

Bash

python3 -m venv venv
source venv/bin/activate
Instale as dependências:

Bash

pip install -r requirements.txt
Inicie o servidor da API:

Bash

uvicorn main:app --reload
A API estará acessível em http://127.0.0.1:8000. 💻

✨ Interface (Front-end)
A API possui uma interface web desenvolvida com HTML, JavaScript e Tailwind CSS que consome os dados do endpoint /me.

Funcionamento: A página web usa JavaScript para fazer uma chamada fetch à API e exibir as informações do seu perfil dinamicamente.

Estilos: Você tem duas opções de estilo visual para a interface. Basta abrir o arquivo .html de sua preferência diretamente no navegador para ver o resultado.

Versão Clara: index.html (com a paleta de cores padrão)

Versão Escura: index_dark.html (com o tema dark)

🌐 API Publicada no Render
A API está totalmente online e pronta para ser usada.

Link da API:
https://my-first-api-d6j0.onrender.com
