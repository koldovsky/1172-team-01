// -------------------------------- https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript --------------------------------
// Рішення:
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// ------------ Всі запропонованні варіанти рішень:

// Капиця Іван
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Карандашов Артем
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}

//Берчак Андрій
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// ---------------------------------- https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript ------------------------------------
// Рішення:
function makeNegative(number) {
  return -Math.abs(number);
}

// ------------ Всі запропонованні варіанти рішень:

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

//Берчак Андрій
function makeNegative(num) {
  return num < 0 ? num : -num;
}

// -------------------------------- https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript ----------------------------
// Рішення:
function move(position, roll) {
  return position + roll * 2;
}

// ------------ Всі запропонованні варіанти рішень:

// Капиця Іван
function move(position, roll) {
  return position + roll * 2;
}

// Карандашов Артем
function move(position, roll) {
  let movedToRightPosition = position + roll * 2;
  return movedToRightPosition;
}

//Берчак Андрій
function move (position, roll) {
  return position + roll * 2;
}

// -------------------------------- https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript ----------------
// Рішення:
function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest";
}

// ------------ Всі запропонованні варіанти рішень:

// Капиця Іван 
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// Карандашов Артем робочий варіант
function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest";
}

//Берчак Андрій
function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// -------------------------------- https://www.codewars.com/kata/keep-hydrated-1/train/javascript --------------------------------
// Рішення:
function litres(time) {
  return Math.floor(0.5 * time);
}

// ------------ Всі запропонованні варіанти рішень:

// Карандашов Артем
function litres(time) {
  var litres = Math.floor(time / 2);
  return litres;
}

//Берчак Андрій
function litres(time) {
  return Math.floor(0.5 * time);
}

// -------------------------------- https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript  -------------------------------
// Рішення:
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2 ? true : false;
}

// ------------ Всі запропонованні варіанти рішень:

// Капиця Іван
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// Карандашов Артем
function lovefunc(flower1, flower2) {
  if (flower1 % 2 != flower2 % 2) return true;
  return false;
}

//Берчак Андрій
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2 ? true : false;
}