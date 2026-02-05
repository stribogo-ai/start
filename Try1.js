const getHiddenCard = (cardNumber, countDots) => {
  const hiddenOperation = `${'*'.repeat(countDots)}${cardNumber.slice(12)}`;
  return (hiddenOperation);
};
console.log(getHiddenCard('1234567812345678', 4));
// - Сокрытие части номера карты с помощью функции.
//
//
//

const userr = {
  name: '   Misha   ',
};
const getName = (userr) => userr?.name;
// оператор ? проверяет является ли user не null и не undefined
const trim = (str) => str.trim();
const withDefault = (str) => str || 'Guest';

const name = withDefault(trim(getName(userr)));
console.log(name);
// - Цепочка вызовов функций с обработкой возможных ошибок.
//
//
//

function truncate(text, number) {
  const ewfres = text.slice(0, (number + 1));
  return (`${ewfres}...`);
}
console.log(truncate('Hello, this is a sample text for truncation.', 10));
// - Обрезание строки до заданной длины с добавлением троеточия.
//
//
//

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
const capitalive = capitalize('hELLo');
console.log(capitalive);
// - Преобразование первой буквы строки в верхний регистр, а остальных в нижний.
//
//
//

const isInternationalPhone = (phone) => {
  const phoneFirst = phone[0];
  return (phoneFirst === '+');
};
console.log(isInternationalPhone('+1234567890'));
console.log(isInternationalPhone('1234567890'));
// - Проверка, является ли номер телефона международным.
//
//
//

const isStrongPassword = (password) => {
  const leng = password.length;
  return leng >= 8 && leng <= 20;
};
console.log(isStrongPassword('StrongPass1'));
console.log(isStrongPassword('Weak'));
// - Проверка надежности пароля по длине.
//
//
//

const isEven = (number) => number % 2 === 0;

console.log(isEven(10)); // true
console.log(!isEven(10)); // false
// - Проверка, является ли число четным, использование логического отрицания при вызове.
//
//
//

const getLetter = (name, number) => name[number - 1] || '';
console.log(getLetter('JavaScript', 5)); // S
console.log(getLetter('JavaScript', 15)); // ''
// - Получение буквы из строки по номеру с обработкой выхода за пределы.
//
//
//

const normalizeUrl = (address) => {
  if (address.startsWith('https://')) {
    return address;
  }
  return `https://${address}`;
};
console.log(normalizeUrl('example.com')); // https://example.com
console.log(normalizeUrl('https://example.com')); // https://example.com
// - Нормализация URL-адреса с добавлением протокола при его отсутствии.
//
//
//

const convertText = (text) => {
  if (text === '') {
    return (text);
  }
  const result = (text[0] === text[0].toUpperCase()) ? text : text.toUpperCase();
  return (result);
};
console.log(convertText('Hello')); // Hello
console.log(convertText('hello')); // HELLO
console.log(convertText('')); // ''
// - Преобразование строки: если первая буква заглавная, вернуть строку как есть,
// иначе вернуть строку в верхнем регистре. Обработка пустой строки.
//
//
//

const joinNumbersFromRange = (startNumber, endNumber) => {
  let i = startNumber;
  let joined = '';
  while (i <= endNumber) {
    joined = `${joined}${i}`;
    i += 1;
  }

  return joined;
};
console.log(joinNumbersFromRange(5, 10)); // '5678910'
// - Объединение чисел из заданного диапазона в строку с помощью цикла while.
//
//
//

const reverce = (str) => {
  let reversed = '';
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i -= 1;
  }
  return reversed;
};
console.log(reverce('Бармаглот'));
// - Реверс строки с помощью цикла while.
//
//
//

const reterce = (svr) => {
  let retersed = '';
  let j = 0;
  while (j < svr.length) {
    retersed = `${svr[j]}${retersed}`;
    j += 1;
  }
  return retersed;
};
console.log(reterce('Бармаглот'));
// - Реверс строки с помощью цикла while (подстановка буквы в начало строки).
//
//
//

const mySubstr = (strink, numbr) => {
  let i = 0;
  let res = '';
  while (i < Math.max(strink.length, numbr)) {
    res = `${res}${strink[i]}`;
    i += 1;
  }
  return (res);
};
console.log(mySubstr('Привет, мир!', 7)); // 'Привет, '
console.log(mySubstr('Привет, мир!', 20)); // 'Привет, мир!'
// - Имитация работы метода substr с помощью цикла while.
//
//
//

const countChars = (word, letter) => {
  let i = 0;
  let k = 0;
  while (i < word.length) {
    if (word[i].toLowerCase() === letter.toLowerCase()) {
      k += 1;
    }
    i += 1;
  }
  return (k);
};
console.log(countChars('Барабаны барабанят', 'а')); // 6
// - Подсчет количества вхождений буквы в строку без учета регистра с помощью цикла while.
//
//
//

const makeItFunny = (text, position) => {
  let i = 0;
  let result = '';
  while (i < text.length) {
    if ((i + 1) % position === 0) {
      result = `${result}${text[i].toUpperCase()}`;
    } else {
      result = `${result}${text[i]}`;
    }
    i += 1;
  }
  return result;
};
console.log(makeItFunny('javascript is awesome', 3));
// - Преобразование строки так, что каждая n-я буква становится заглавной с помощью цикла while.
//
//
//

const encrypt = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i += 2) {
    if (i + 1 < text.length) {
      result += text[i + 1] + text[i];
    } else {
      result += text[i];
    }
  }

  return result;
};
console.log(encrypt('abcdef')); // 'badcfe'
console.log(encrypt('abcde')); // 'badce'
// - Шифрование строки путем перестановки каждой пары символов с помощью цикла for.
//
//
//

const enrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};
console.log(enrypt('abcdef')); // 'badcfe'
console.log(enrypt('abcde')); // 'badce'
// - Шифрование строки путем перестановки каждой пары символов с помощью цикла for.
// Вариант с использованием временной переменной и || для обработки нечетной длины строки.
//
//
//

const costsOfPosition = [
  { ID: 1, cost: 1090, sales: 3200 },
  { ID: 2, cost: 2344, sales: 5432 },
  { ID: 3, cost: 2466, sales: 6543 },
  { ID: 4, cost: 6789, sales: 8765 },
  { ID: 5, cost: 6789, sales: 8765 },
];
function maxCosts(positions) {
  const result = []; // [...positions.map((pos) => pos.sales + pos.cost)];
  // допиши в массив это, закомменть три строки ниже и заработает подсчет максимальной стоимости
  result.push(positions[positions.findIndex(
    (item) => item.cost === Math.max(...positions.map((pos) => pos.cost)),
  )]);
  return result;
}
const mostExpencive = maxCosts(costsOfPosition);

function maxCostPositions(positions) {
  return positions.filter((p) => p.cost === Math.max(...positions.map((n) => n.cost)));
} // Альтернативный вариант через filter - возращает даже несколько с одинкаково макс. стоимостью
const maxCostPos = maxCostPositions(costsOfPosition);

const theMostExpensive = costsOfPosition.reduce((acc, pos) => {
// reduce - метод массива, который применяет функцию к аккумулятору и каждому элементу массива
// (слева направо) для его сокращения до одного значения. Без мутации исходного массива.
  if (pos.cost === Math.max(...costsOfPosition.map((posi) => posi.cost))) {
    acc.push(pos);
  }
  return acc;
}, []); // Еще один вариант через reduce - возращает даже несколько с одинкаково макс. стоимостью.
// через reduce - более сложный способ, но лучше, быстро работает на больших массивах
// и позволяет делать более сложные вещи в процессе обхода массива
// потомучто не создает промежуточные массивы, а сразу накапливает результат в аккумуляторе

console.table('Самое дорогое:');
console.table(mostExpencive);
console.table('Объекты с максимальной стоимостью:');
console.table(maxCostPos);
console.table('Самое дорогое (через reduce):');
console.table(theMostExpensive);
// Нахождение объекта с максимальным значением свойства в массиве объектов.
// Создание массива объектов, обработка внутри функции и вывод результата в консоль.
//
//
//

const user = { role: 'Producer', name: 'Igor', sername: 'Ivanov' };
function makeuser(usr) {
  usr.role = 'Director';
  usr.name = 'Yana';
  usr.sername = 'Kuznetsova';
  return usr;
}
makeuser(user);
const userName = user.name;
console.table(user);
console.log(userName);
export { userName };
export default user;
// Создание объекта, изменение его свойств внутри функции и вывод в консоль.
// С default и именованным экспортами.
//
//
//

const tasks = [];

function addTask(text) {
  const newTask = {
    id: tasks.length + 1,
    text,
    done: false,
  };

  tasks.push(newTask);
  return newTask;
}

function finishTask(id) {
  for (const task of tasks) {
    if (task.id === id) {
      task.done = true;
      return true;
    }
  }
  return false;
}

function getOpenTasks() {
  const result = [];

  for (const task of tasks) {
    if (task.done === false) {
      result.push(task);
    }
  }

  return result;
}

addTask('Купить молоко');
addTask('Сделать разминку');
finishTask(1);

console.log(getOpenTasks());
// Создание простого менеджера задач с возможностью добавления,
// завершения и получения открытых задач.
//
//
//

const rawNames = ['  Миша  ', '', '   ', 'аня', '  ПЕТЯ'];

function trimAll(strings) {
  const result = [];
  for (const s of strings) {
    result.push(s.trim());
  }
  return result;
}

function removeEmpty(strings) {
  const result = [];
  for (const s of strings) {
    if (s !== '') result.push(s);
  }
  return result;
}

function normalizeCase(strings) {
  const result = [];
  for (const s of strings) {
    const first = s[0].toUpperCase();
    const rest = s.slice(1).toLowerCase();
    result.push(first + rest);
  }
  return result;
}

const step1 = trimAll(rawNames);
const step2 = removeEmpty(step1);
const step3 = normalizeCase(step2);

console.log(step3);
// Последовательная обработка массива строк:
// обрезка пробелов, удаление пустых строк и нормализация регистра.
//
//
//
