function verificarTrilha(trilha) {
  if (!trilha) {
    return "Você deve informar a trilha.";
  }
  if (trilha.length > 3) {
    return "Você está informando mais trilhas que o permitido.";
  }
  for (let t of trilha) {
    if (t !== "full stack" && t !== "ux" && t !== "qa") {
      return "Você está informando trilha que não existe.";
    }
  }
}

module.exports = verificarTrilha;
