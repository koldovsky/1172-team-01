// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
// Капиця Іван
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// Капиця Іван (chat GPT)
function makeNegative(number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
}
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// Капиця Іван
function move(position, roll) {
  return position + roll * 2;
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
// Капиця Іван (ні один з цих варіантів код варс не зархував. 1-ий писав сам, 2-ий чат GPT)
function greet(name, owner) {
  if (name == owner) {
    console.log("Привіт, бос");
  }
  console.log("Привіт гість");
}
// Другий варіант
function greet(name, owner) {
  if (name === owner) {
    return "Привіт, бос";
  } else {
    return "Привіт, гість";
  }
}
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// Капиця Іван
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
