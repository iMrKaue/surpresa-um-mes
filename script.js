// Definindo a data de hoje
var hoje = new Date();

// Definindo a data do próximo mês
var proximoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 27);

// Verificando se o dia 27 já passou no mês atual
if (hoje.getDate() > 27) {
  // Se já passou, definimos o próximo mês como objetivo
  proximoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 27);
} else {
  // Caso contrário, a data alvo é ainda neste mês
  proximoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 27);
}

// Calculando a diferença em milissegundos
var diferencaTempo = proximoMes - hoje;

// Convertendo a diferença em dias
var diasFaltando = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

if (diasFaltando < 0) {
  diasFaltando = "Mês já passou!";
}

document.getElementById("contador").innerHTML = "Faltam " + diasFaltando + " dias para o próximo mês!";
