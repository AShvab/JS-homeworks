// РАННЄ ПОВЕРНЕННЯ
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }


// 2. ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }


// ЗАДАЧА: СКЛАД ТОВАРІВ 3.0
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
// return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }


// СТВОРЕННЯ МАСИВУ
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];


// ДОСТУП ДО ЕЛЕМЕНТІВ ЗА ІНДЕКСОМ
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

// const fruits = ["apple", "plum", "pear", "orange"];
// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


// 6. ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЕЛЕМЕНТА
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];
// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';


// ДОВЖИНА МАСИВУ
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const fruitsArrayLength = fruits.length;


// ІНДЕКС ОСТАННЬОГО ЕЛЕМЕНТА
// Оголоси дві зміні:
// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
// let result = [array[0], array[array.length - 1]];
//   return result;
//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);


// МЕТОД РЯДКІВ SPLIT()
// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }


// ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let first =  message.split(" ");
//   let result = first.length * pricePerWord;
// return result;
//    // Change code above this line
// }


// МЕТОД МАСИВУ JOIN()
// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }


// 13. ЗАДАЧА: ГЕНЕРАТОР SLUG
// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   // Change code below this line
//     let slug = title.toLowerCase();
//   slug = slug.split(" ");
//   slug = slug.join('-');
//   return slug;
//   // Change code above this line
// }


// МЕТОД SLICE()
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 6);


// МЕТОД CONCAT()
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line


// ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

//  function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let allArray = firstArray.concat(secondArray);
// let allArray1 = allArray.length > maxLength ? allArray.slice(0, maxLength) : allArray;
// return allArray1;
//     // Change code above this line
//   }


// 17. ЦИКЛ FOR
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }


// ІТЕРАЦІЯ ПО МАСИВУ
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i+=1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }


// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   // Change code below this line
// let str = string.split(" ");
// let longest = 0;
//   let word = null;
//   for (let i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word; 
// }


// МЕТОД PUSH()
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//  for (let i = min; i <= max; i += 1) {
//    numbers.push(i);
//  }
//   // Change code above this line
//   return numbers;
// }


// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
//    // Change code below this line
// let numb = [];
// for (let numb2 of numbers)  {
//   if (numb2 > value) {
//     numb.push(numb2);
//   }}
//     return numb;
//   // Change code above this line
// }


// 24. МЕТОД INCLUDES()
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }


// ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   let array3 = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }
//   return array3;
//  // Change code above this line
// }


// 26. ЦИКЛ FOR...OF
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let price of order) {
//       total += price;
// }
//   // Change code above this line
//   return total;
// }


// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   let filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }


// ОПЕРАТОР %
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;


// ЗАДАЧА: ПАРНІ ЧИСЛА
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let numbers = [];
//   for (let i = start; i <= end; i +=1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//     return numbers;
//     // Change code above this line
// }


// ОПЕРАТОР BREAK
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


// ОПЕРАТОР BREAK VS RETURN У ФУНКЦІЇ
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return number = i;
//     }
//   }
//   return number;
//   // Change code above this line
// }


// ЗАДАЧА: ФУНКЦІЯ INCLUDES()
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line
// for (let i of array) {
//   if (i === value) {
//       return true;
//   }
// }
//   return false;
//   // Change code above this line
// }