# main.py

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Cria uma instância da classe FastAPI
app = FastAPI()

# Lista de origens que podem acessar sua API
origins = [
    "*" # Isso permite todas as origens (bom para testes)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------
# MODELO (opcional, mas boa prática)
# Define a estrutura de dados para o endpoint /me
# BaseModel do Pydantic ajuda a validar os dados
class AlunoInfo(BaseModel):
    nome: str
    email: str
    curso: str
    github: str
    cidade: str
    interesses: list[str]

# -----------------
# ENDPOINTS

@app.get("/")
def read_root():
    return {"message": "API está funcionando!"}

@app.get("/health")
def health_check():
    """
    Endpoint para verificar o status da API.
    Retorna um status de saúde.
    """
    return {"status": "ok"}

@app.get("/me")
def get_aluno_info():
    """
    Endpoint para retornar informações pessoais do aluno.
    """
    # Substitua com suas informações pessoais
    minhas_informacoes = {
        "nome": "Isaías Levi Tavaresd da Silva",
        "email": "isaiaslevi2@gmail.com",
        "curso": "Sistemas de Informação",
        "github": "https://github.com/LevyTavares",
        "cidade": "Barbalha - CE",
        "interesses": ["Programação", "Música", "Caminhada"]
    }
    return minhas_informacoes