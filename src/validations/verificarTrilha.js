function verificarTrilha(trilhas) {
  if (!trilhas) {
    return "Você deve informar a trilha.";
  }
  if (trilhas.length > 3) {
    return "Você está informando mais trilhas que o permitido.";
  }
  for (let trilha of trilhas) {
    if (trilha !== "full stack" && trilha !== "ux" && trilha !== "qa") {
      return "Você está informando trilha que não existe.";
    }
  }
}

module.exports = verificarTrilha;
