// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
// Капиця Іван
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Карандашов Артем
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals
  return totalGoals;
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

// Карандашов Артем
function makeNegative(number) {
  return -Math.abs(number);
}


// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// Капиця Іван
function move(position, roll) {
  return position + roll * 2;
}

// Карандашов Артем
function move(position, roll) {
  let movedToRightPosition = position + roll * 2
  return movedToRightPosition;
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

// Карандашов Артем робочий варіант
function greet(name, owner) {
  return name == owner ? 'Hello boss' :  'Hello guest';
}


// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

// Карандашов Артем
function litres(time) {
  var litres = Math.floor(time / 2)
  return litres;
}

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

// Карандашов Артем
function lovefunc(flower1, flower2){
  if(flower1 % 2 != flower2 % 2)
    return true
  else return false
}

