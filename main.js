let age = 10;
if (age >= 1 && age <= 17) {
  console.log("Учеба");
}

if (age >= 18 && age <= 64) {
  console.log("Работа");
}

if (age >= 65 && age <= 100) {
  console.log("Пенсия");
}

console.log();

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case 1:
      console.log(arr[i] + " разработчик");
      break;
    case 2:
      console.log(arr[i] + " разработчика");
      break;
    case 3:
      console.log(arr[i] + " разработчика");
      break;
    case 4:
      console.log(arr[i] + " разработчика");
      break;
    case 5:
      console.log(arr[i] + " разработчиков");
      break;
    case 6:
      console.log(arr[i] + " разработчиков");
      break;
    case 7:
      console.log(arr[i] + " разработчиков");
      break;
    case 8:
      console.log(arr[i] + " разработчиков");
      break;
    case 9:
      console.log(arr[i] + " разработчиков");
      break;
  }
}
