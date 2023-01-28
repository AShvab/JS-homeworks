// Завдання 1. 

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].



// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
// ----------------------------------------------------------------------------------------------------------------

// Завдання 2. 
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner:{
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
//   };

//   ----------------------------------------------------------------------------------------------------------------

// Завдання 3. 

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
  // Change code below this line
//   const aptRating = apartment.rating;
//   console.log(aptRating);
  
//   const aptDescr = apartment.descr;
//   console.log(aptDescr);
  
//   const aptPrice = apartment.price;
//   console.log(aptPrice);
  
//   const aptTags = apartment.tags;
//   console.log(aptTags);
  // Change code above this line

//   ------------------------------------------------------------------------------------------------------------

// Завдання 4. 
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
  // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length - 1];
  // Change code above this line
//   console.log(lastTag);

// ---------------------------------------------------------------------------------------------------------

// Завдання 5.
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
  // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];
  // Change code above this line
//   console.log(aptRating);
//   console.log(aptDescr);
//   console.log(aptPrice);
//   console.log(aptTags);

// -------------------------------------------------------------------------------------------------------------

// Завдання 6. 
// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
  // Change code below this line
//     apartment.price = 5000;
//     apartment.rating = 4.7;
//     apartment.owner.name = "Henry Sibola";
//     apartment.tags.push("trusted");
//   console.log(apartment.price);
//   console.log(apartment.rating);
//   console.log(apartment.owner.name);
//   console.log(apartment.tags);

// -------------------------------------------------------------------------------------------------------------

// Завдання 7.
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
  // Change code below this line
//   apartment.area = 60;
//   apartment.rooms = 3;
  
//   apartment.location = {
//     country: "Jamaica",
//     city : "Kingston"
//   };
  
  
//   console.log(apartment.area); 
//   console.log(apartment.rooms); 
//   console.log(apartment.location.country); 
//   console.log(apartment.location.city); 

// -------------------------------------------------------------------------------------------------------

// Завдання 8.
// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, 
// price, image і tags зі значеннями зі змінних з аналогічними іменами. 
// Обов'язково використовуй синтаксис коротких властивостей.


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
  // Change code below this line
//     name,
//     price,
//     image,
//     tags,
  // Change code above this line
// };

// ---------------------------------------------------------------------------------------------------------------

// Завдання 9. 
// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті 
// у нього були дві властивості: email і password, імена яких зберігаються у 
// змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
//  а значенням властивості password - рядок "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
  // Change code below this line

// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
  // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// ---------------------------------------------------------------------------------------------------------------

// Завдання 10.
// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
//  а в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = ["descr", "rating", "price"];
//   const values = ["Spacious apartment in the city center", 4, 2153];
  // Change code below this line
  
//   for (const key in apartment) {
    
//     console.log(key);
    
//     console.log(apartment[key]);
//   }

// -----------------------------------------------------------------------------------------------------------------

// Завдання 11.
// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
  
// }
  // Change code above this line
// }

// --------------------------------------------------------------------------------------------------------------

// Завдання 12.
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей
//  об'єкта в параметрі object. 
// Використовуй змінну propCount для зберігання кількості властивостей об'єкта.


// function countProps(object) {
//     let propCount = 0;
    // Change code below this line
    
//   for( let key in object){
//   if(object.hasOwnProperty(key))
//   propCount+=1;
//   }
    // Change code above this line
//     return propCount;
//   }
//   console.log(countProps({ name: "Mango", age: 2 })); 
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 

// ---------------------------------------------------------------------------------------------------

// Завданян 13.
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. 
// Запиши у змінну keys масив ключів власних властивостей об'єкта 
// apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
  // Change code below this line
  
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }
//   console.log(keys);
//   console.log(values);

// -------------------------------------------------------------------------------------------------------

// Завданя 14.
// Виконай рефакторинг функції countProps(object), використовуючи метод 
// Object.keys() і, можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
    // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);
  
//     for (const key of keys) {
//         propCount += 1;
//       }
//     return propCount;
    // Change code above this line
//   }
  
//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ----------------------------------------------------------------------------------------------------------

// Завдання 15.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну 
// values - масив всіх значень його властивостей. Використовуй
//  методи Object.keys() і Object.values().

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  // Change code below this line
//   const keys = Object.keys(apartment);
//   console.log(keys);
//   const values = Object.values(apartment);
//   console.log(values);

// -----------------------------------------------------------------------------------------------------------------

// Завдання 16.
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я
//  співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат 
// співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
    // Change code below this line
  
  
//   const arrayOfValues = Object.values(salaries);
//     console.log(arrayOfValues);
//       for (let salary of arrayOfValues) {
//       totalSalary += salary;
//     }
    
    // Change code above this line
//     return totalSalary;
//   }
//   console.log(countTotalSalary({}));
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ----------------------------------------------------------------------------------------------------------

// Завдання 17.
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення
//  властивостей hex, а в масив rgbColors - значення 
//  властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  // Change code below this line
  
//   for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   };
  
// --------------------------------------------------------------------------------------------------------

// Завдання 18.
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. 
// Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну 
// (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
    // Change code below this line
  
//   for (let product of products) {
//     if (product.name === productName) {
//       productPrice = product.price;
//       return productPrice;
//     }
//   }
  
//   return null;
    // Change code above this line
//   }
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Engine"));

// -------------------------------------------------------------------------------------------------------------

// Завдання 19.
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) 
// властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта 
// в масиві products. Якщо в об'єктах відсутні властивості з 
// таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
    // Change code below this line
//   let array = [];
//     for (let product of products){
//       if (product.hasOwnProperty(propName)){
//         array.push(product[propName]);
//       }
//     }
  
//   return array;
    // Change code above this line
//   }
//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));
//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("category"));

// -----------------------------------------------------------------------------------------------------------

// Завдання 20.
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. 
// Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
    // Change code below this line
//   let totalPrice = 0;
    
//   for(const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   }
//   return totalPrice = 0;
    // Change code above this line
//   }
//   console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));
//   console.log(calculateTotalPrice("Droid"));
//   console.log(calculateTotalPrice("Grip"));
//   console.log(calculateTotalPrice("Scanner"));

// ----------------------------------------------------------------------------------------------------------------

// Завдання 21.
// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру 
// за три дні (meanTemperature). Заміни оголошення 
// змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей 
// об'єкта highTemperatures.
  
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  // Change code below this line
//   const { yesterday, today, tomorrow } = highTemperatures;
  
  
  // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// ---------------------------------------------------------------------------------------------------------------

// Завдання 22.
// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. 
// Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей
//  об'єкта highTemperatures. Задай значення за 
// замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  // Change code below this line
  
//   const {
//     yesterday,
//     today, 
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", 
//   } = highTemperatures;
  
  // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// -----------------------------------------------------------------------------------------------------------

// Завдання 23.
// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією 
// деструктуризації властивостей об'єкта highTemperatures. Задай значення 
// за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  // Change code below this line
  
  
  
//   const {
//     yesterday: highYesterday,
//     today: highToday, 
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", 
//   } = highTemperatures;
  
  // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// -----------------------------------------------------------------------------------------------------------------

// Завдання 24.
// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  // Change code below this line
  
//   for (const {hex, rgb} of colors) {
    
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }

// -----------------------------------------------------------------------------------------------------------------

// Завдання 25.
// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також 
// необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей
//  об'єкта forecast. Задай значення за замовчуванням для іконок, змінних 
// todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
  // Change code below this line
//   const {
//   today: {high: highToday, low: lowToday, icon:todayIcon="https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//   tomorrow: {high: highTomorrow,  low:lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//   } = forecast;

// -----------------------------------------------------------------------------------------------------------------

// Завдання 26.
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного 
// формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації 
// властивостей об'єкта forecast.


// Change code below this line
// function calculateMeanTemperature(forecast) {
//     const {
//     today: {high: todayHigh, low: todayLow},
//     tomorrow: {high: tomorrowHigh,  low:tomorrowLow},
//     } = forecast;
//       console.log(todayHigh);
//       console.log(tomorrowHigh);
//       console.log(todayLow);
//       console.log(tomorrowLow);
      
      // Change code above this line
//       const result = (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//       return result; 
//       console.log(result);
//     }
//     calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });
//     calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} });

// --------------------------------------------------------------------------------------------------------------

// Завдання 27.
// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і 
// методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий 
// бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
// const bestScore = Math.max (... scores);
// const worstScore = Math.min (... scores);

// console.log(bestScore);
// console.log(worstScore);

// --------------------------------------------------------------------------------------------------------------

// Завдання 28.
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати 
// тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ---------------------------------------------------------------------------------------------------------------------

// Завдання 29.
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у 
// змінній defaultSettings. Під час створення тесту, усі або 
// частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням 
// і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings 
// утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);

// ---------------------------------------------------------------------------------------------------------

// Завдання 30. 
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У 
// новому об'єкті повинна бути властивість completed, значення якої 
// зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, 
// можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority 
// повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
    // Change code below this line
//     return{ completed, category, priority, ...data} ;
    
  
    // Change code above this line
//   }
//   console.log(makeTask({}));
//     console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
//     console.log(makeTask({ category: "Finance", text: "Take interest" }));
//     console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

// ------------------------------------------------------------------------------------------------------

// Завдання 31.
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість
//  аргументів, рахувала і повертала їх суму.

// Change code below this line
// function add(...args) {
//     let total = 0;
//     for ( const arg of args){
//       total += arg;
//     }
//     return total;
    // Change code above this line
//   }
//   console.log(add(15, 27));
//   console.log(add(12, 4, 11, 48));
//   console.log(add(32, 6, 13, 19, 8));
//   console.log(add(74, 11, 62, 46, 12, 36));

// ----------------------------------------------------------------------------------------------------------

// Завдання 32.
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким 
// чином, щоб вона рахувала суму тільки тих аргументів, 
// які більші за задане число. Це число повинно бути першим параметром функції.

// Change code below this line
// function addOverNum(...args) {
//     let total = 0;
    
//   for (const arg of args) {
//       if (arg > args[0]){
//       total += arg;
//       }
//   }
//     return total;
    // Change code above this line
//   }
//   console.log(addOverNum(50, 15, 27));
//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//   console.log(addOverNum(15, 32, 6, 13, 19, 8));
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// ----------------------------------------------------------------------------------------------------------

// Завдання 33.
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел,
//  а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, 
// починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони
//  є в масиві першого аргументу.

// Change code below this line
// function findMatches(firstArray, ...secondArray) {
//     const matches = []; // Don't change this line
  
//     for (const item of firstArray) {
//     if (secondArray.includes(item)) {
//       matches.push(item);
//     }
//   }
    // Change code above this line
//     return matches;
//   }
//   console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//   console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
//   console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
//   console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ------------------------------------------------------------------------------------------------------------

// Завдання 34.
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і 
// addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де
//  <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book 
// <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName 
// відповідно.

// const bookShelf = {
    // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//       removeBook(bookName) {
//       return `Deleting book ${bookName}`;
//     },
//       updateBook(oldName, newName) {
//       return `Updating book ${oldName} to ${newName}`;
//     },
    // Change code above this line
//   };

// ---------------------------------------------------------------------------------------------------------------

// Завдання 35.
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName 
// на newName у властивості books. Використовуй 
// indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
      // Change code below this line
  
//   for(let book of this.books){
//     if(book == oldName){
//       const index = this.books.indexOf(oldName);
//       this.books.splice(index, 1, newName);
//     }
//   }
  
//   return `updateBook ${oldName} to ${newName}`;
      // Change code above this line
//     },
//   };

// ------------------------------------------------------------------------------------------------------------

// Завдання 36.
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, 
// видалення, пошуку 
// та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
    // Change code below this line
  
//   potions:[],
  
    // Change code above this line
//   };

// --------------------------------------------------------------------------------------------------------------

// Завдання 37.
// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
    // Change code below this line
//    getPotions() {
//       return this.potions;
//     },
    // Change code above this line
//   };
  
// ---------------------------------------------------------------------------------------------------------------

// Завдання 38.
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName 
// в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
      // Change code below this line
  
//    this.potions.push(potionName)
  
      // Change code above this line
//     },
//   };

// ------------------------------------------------------------------------------------------------------------------

// Завдання 39.
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName 
// з масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
      // Change code below this line
      
//   for(potion of this.potions){
    
//     if(potion === potionName){
//       const index = this.potions.indexOf(potionName);
//       this.potions.splice(index, 1);
//     }
//   }
  
  
      // Change code above this line
//     },
//   };

// --------------------------------------------------------------------------------------------------------------

// Завдання 40.
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName
//  в масиві зілля у властивості potions.
  
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
      // Change code below this line
  
//   for(potion of this.potions){
    
//     if(potion === oldName) {
//      const index = this.potions.indexOf(oldName);
//       this.potions.splice(index, 1, newName);
//     }
//   }
  
  
      // Change code above this line
//     },
//   };

// -------------------------------------------------------------------------------------------------------------

// Завдання 41. 
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й 
// іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, 
// а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо 
// такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в 
// масиві potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає 
// [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), 
// в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
//  в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), 
// масив potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), 
// массив potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає рядок 
// "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає рядок
//  "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions 
// буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions 
// буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у 
// властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, 
// { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"),
//  у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, 
//  { name: "Invulnerability potion", price: 520 } ]


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
    // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//      for (const item of this.potions) {
//        if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//      }
//   const newProduct={
//     ...newPotion,
//   };
//       this.potions.push(newPotion);
//     },
    
//     removePotion(potionName) {
//   for(let i= 0; i < this.potions.length; i+=1){
//   const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1)
//       }
//   }
//     },
    
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         let resalt = `Potion ${oldName} is not in inventory!`;
//         for( let i = 0; i<this.potions.length; i+=1){
//           const potion = this.potions[i];
  
//           if(oldName === potion.name){
//             potion.name = newName;
//             resalt =`Found ${oldName} change to ${newName}`;
//           }
//         }
//         return console.log(resalt)
//       }
  
    
//     },
//     // Change code above this line
//   };


  
  
  
  