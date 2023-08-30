export function shuffle(array) {
    let currentIndex = array.length,  randomIndex; //inicia de tras pra frente
    while (currentIndex > 0) {
      // Escolhe um outro elemento entre o inicio e a posição atual do mapeamento
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // Troca esses elementos de posição
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}