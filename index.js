const a = +prompt('Введіть значення а', 0); // Запрошуєм значення змінної в користувача

const z1 = (Math.sin(4 * a) / (1 + Math.cos(4 * a))) * (Math.cos(2 * a) / (1 + Math.cos(2 * a)));
const z2 = 1 / Math.tan(3 / 2 * Math.PI - a); // Обчислюємо значення виразів

console.log('z1 = ' + z1);
console.log('z2 = ' + z2); // Виводимо значення виразів

console.log('Зміна №1');
console.log('Зміна №2');

<<<<<<< HEAD
// код secondBranch
console.log('secondBranch №1');
=======
// зміни master
console.log('master №1');

// зміни локального репозиторію
console.log('Зміна локального репозиторію');
>>>>>>> 3ae5ac85f36cc88af13ff49b93e31703025ef431
