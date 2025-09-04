# main.py

from fastapi import FastAPI
from pydantic import BaseModel

# Cria uma instância da classe FastAPI
app = FastAPI()

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
        "nome": "Seu Nome",
        "email": "seu.email@exemplo.com",
        "curso": "Seu Curso",
        "github": "https://github.com/SeuUsuario",
        "cidade": "Sua Cidade",
        "interesses": ["Programação", "Inteligência Artificial", "Caminhada"]
    }
    return minhas_informacoes