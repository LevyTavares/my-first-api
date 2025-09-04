# my-first-api

🚀 my-first-api
Este projeto é uma API simples e robusta criada com Python e o framework FastAPI. Ela foi desenvolvida para servir como um primeiro passo prático na construção e publicação de serviços web.

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
Crie e ative o ambiente virtual:

Bash

python3 -m venv venv
source venv/bin/activate
Instale as dependências:

Bash

pip install -r requirements.txt
Inicie o servidor:

Bash

uvicorn main:app --reload
A API estará acessível em http://127.0.0.1:8000. 💻

🌐 API Publicada no Render
A API está totalmente online e pronta para ser usada através do link abaixo! ✨

Link da API:
https://my-first-api-d6j0.onrender.com
