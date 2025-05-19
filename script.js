// script.js
import { database } from './firebase-config.js';
import { ref, push } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js';

document.getElementById("formChegada").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const modelo = document.getElementById("modelo").value;
  const placa = document.getElementById("placa").value;
  const servico = document.getElementById("servico").value;
  const horario = new Date().toISOString();
  const senha = Date.now().toString().slice(-4);

  const cliente = {
    nome,
    telefone,
    modelo,
    placa,
    servico,
    horario,
    senha,
    status: "Aguardando"
  };

  push(ref(database, 'clientes'), cliente)
    .then(() => {
      document.getElementById("mensagem").innerText = `Chegada registrada com sucesso! Senha: ${senha}`;
      document.getElementById("formChegada").reset();
    })
    .catch((error) => {
      console.error("Erro ao salvar no Firebase:", error);
      document.getElementById("mensagem").innerText = `Erro ao salvar: ${error.message}`;
    });
});
