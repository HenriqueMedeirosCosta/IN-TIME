import { database } from './firebase-config.js';
import {
  ref,
  onValue,
  orderByChild,
  query
} from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js';

const lista = document.getElementById("listaClientes");

// Cria uma query ordenando por horário
const filaRef = query(ref(database, 'clientes'), orderByChild('horario'));

onValue(filaRef, (snapshot) => {
  lista.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    const dados = childSnapshot.val();
    const item = document.createElement("li");
    item.innerText = `${dados.nome} - ${dados.servico} - Senha: ${dados.senha} - Status: ${dados.status}`;
    lista.appendChild(item);
  });
});
