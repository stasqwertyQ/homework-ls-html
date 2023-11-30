
// завдання 1 

const Pooole1 = prompt('Заповніть перше поле');

const pole2 = prompt('Заповніть друге поле');

if (Pooole1 && pole2) {
alert('Обидва поля заповнені');
} else {
alert('Не всі поля заповнені');
}


// завдання 2

let NumberOne = prompt("Введіть перше число:");


let TwoNumber = prompt("Введіть друге число:");


NumberOne = parseFloat(NumberOne);
TwoNumber = parseFloat(TwoNumber);


if (!isNaN(NumberOne) && !isNaN(TwoNumber)) {

  let sumа= NumberOne + TwoNumber;


  if (sumа > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
} else {
  alert("Будь ласка, введіть коректні числа.");
}




// 3 завдання


const UserInp = prompt("Введіть текст:");

if (UserInp.includes("JavaScript")) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}


// 4 Завдання



const InputuUser = prompt("Введіть число:");

if (InputuUser !== null && !isNaN(InputuUser)) {
  var number = parseFloat(InputuUser);
  if (number > 10 && number < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
  }
  } else { alert("Будь ласка, введіть більш коректне число.");
}