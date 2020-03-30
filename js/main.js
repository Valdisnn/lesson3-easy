//Следующим переменным присвоить значения :

let money = 20000;
let income = 'фриланс';
let addExpenses = 'Интернет, Такси, Квартира, Мелкие расходы';
let deposit = true;
let mission = 100000;
let period = 7;

// Используя методы и свойства:
//- Вывести в консоль тип данных значений переменных money, income, deposit;

console.log('Тип money: ' + typeof (money));
console.log('Тип income: ' + typeof (income));
console.log('Тип deposit: ' + typeof (deposit));

//- Вывести в консоль длину строки addExpenses

console.log('Длина строки addExpenses: ' + addExpenses.length);

// - Вывести в консоль “Период равен (period) месяцев” 
//и “Цель заработать (mission) рублей/долларов/гривен/юани”

if (period === 1) {
    console.log('Период равен ' + (period) + ' месяц, и моя цель заработать ' + mission + ' , желательно $ =D');
} else if (period === 2 || period === 3 || period === 4) {
    console.log('Период равен ' + (period) + ' месяца, и моя цель заработать ' + mission + ' , желательно $ =D');
} else if (period === 5 || period === 6 || period === 7 ||
    period === 8 || period === 9 || period === 10 || period === 11 || period === 12) {
    console.log('Период равен ' + (period) + ' месяцев, и моя цель заработать ' + mission + ' , желательно $ =D');
}

// - Привести строку addExpenses к нижнему регистру 
//и разбить строку на массив, вывести массив в консоль

addExpenses = addExpenses.toLowerCase();

console.log('Нижний регистр строки: ' + addExpenses);

console.log(addExpenses.split());

//  - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
// Вывести в консоль budgetDay

let budgetDay = money / 30;
console.log('Дневной бюджет: ', budgetDay);

console.log(' ');
console.log(' ');
console.log(' ');







//ВЕСЬ ФУНКЦИОНАЛ ЧТО БЫЛ РАНЕЕ ОСТАВЛЯЕМ, ЕСЛИ ЧТО ТО НЕОБХОДИМО УДАЛИТЬ, ОБ ЭТОМ БУДЕТ НАПИСАНО В ЗАДАНИИ

//СПРАШИВАЕМ У ПОЛЬЗОВАТЕЛЯ “ВАШ МЕСЯЧНЫЙ ДОХОД?” И РЕЗУЛЬТАТ СОХРАНЯЕМ В ПЕРЕМЕННУЮ MONEY

let moneyQuestion = prompt('Ваш месячный доход ?', '');

// for (i = 0; i >= moneyQuestion; i++) {
//     if (moneyQuestion === '') {
//         moneyQuestion = prompt('Вы ничего не ввели =(','');
//     }
// }

if (moneyQuestion === '' || moneyQuestion === null) {

    console.log('Вы допустили ошибку при вводе, или отменили его :(');

} else {

    console.log('Месячный доход равен:', Number(moneyQuestion), ' навреное рублей =)');

}

//СПРОСИТЬ У ПОЛЬЗОВАТЕЛЯ “ПЕРЕЧИСЛИТЕ ВОЗМОЖНЫЕ РАСХОДЫ ЗА РАССЧИТЫВАЕМЫЙ ПЕРИОД ЧЕРЕЗ ЗАПЯТУЮ” СОХРАНИТЬ В ПЕРЕМЕННУЮ ADDEXPENSES

let textQuestion = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');

if (textQuestion === '' || textQuestion === null) {

    console.log('Вы допустили ошибку при вводе, или отменили его :(');

} else {

    console.log('Ваш список:', String(textQuestion));

}

// СПРОСИТЬ У ПОЛЬЗОВАТЕЛЯ “ЕСТЬ ЛИ У ВАС ДЕПОЗИТ В БАНКЕ?” И СОХРАНИТЬ ДАННЫЕ В ПЕРЕМЕННОЙ DEPOSIT (БУЛЕВО ЗНАЧЕНИЕ TRUE/FALSE)


let boolQuestion = confirm('Есть ли у Вас депозит в банке?', '');

if (boolQuestion === true) {
    console.log('Есть ли у Вас депозит: Вы овтетили - да');

} else {
    console.log('Есть ли у Вас депозит: Вы овтетили - нет');

}






//СПРОСИТЬ У ПОЛЬЗОВАТЕЛЯ ПО 2 РАЗА КАЖДЫЙ ВОПРОС И ЗАПИСАТЬ ОТВЕТЫ В РАЗНЫЕ ПЕРЕМЕННЫЕ 
 

let expenses1 = prompt ('Введите обязательную статью расходов 1?','');
let amount1 =  prompt ('Во сколько это обойдется 1?','');

let expenses2 = prompt ('Введите обязательную статью расходов 2?','');
let amount2 =  prompt ('Во сколько это обойдется 2?','');



/*
for (i = 0; i <=1 ; i ++) {
    let expenses1 
}
*/


if (expenses1 === '' || expenses1 === null) {

    console.log('Вы допустили ошибку при вводе, или отменили его :(');

} else {

    console.log('Статья расходов 1:', String(expenses1));

}


if (amount1 === '' || amount1 === null) {

    console.log('Вы допустили ошибку при вводе, или отменили его :(');

} else {

    console.log('Средства для списка 1:', Number(amount1), ' у.е.');

}

if (expenses2 === '' || expenses2 === null) {

    console.log('Вы допустили ошибку при вводе, или отменили его :(');

} else {

    console.log('Статья расходов 2:', String(expenses2));

}

if (amount2 === '' || amount2 === null) {

    console.log('Вы допустили ошибку при вводе, или отменили его :(');

} else {

    console.log('Средства для списка 1:', Number(amount2), ' у.е.');

}


//ВЫЧИСЛИТЬ БЮДЖЕТ НА МЕСЯЦ, УЧИТЫВАЯ ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ, СОХРАНИТЬ В НОВУЮ ПЕРЕМЕННУЮ BUDGETMONTH И ВЫВЕСТИ РЕЗУЛЬТАТ В КОНСОЛЬ

//let money = 20000;

//let moneyQuestion = 20000;

let budgetMonth ;

let x = amount1;
let y = amount2;

x = Number(x);
y = Number(y);

budgetMonth = moneyQuestion - (x + y);
console.log('Бюджет на месяц: ', Number(budgetMonth), ' у.е.');


// ЗНАЯ BUDGETMONTH, ПОСЧИТАТЬ ЗА СКОЛЬКО МЕСЯЦЕВ БУДЕТ ДОСТИГНУТА ЦЕЛЬ MISSION, ВЫВЕСТИ В КОНСОЛЬ, ОКРУГЛЯЯ В БОЛЬШУЮ СТОРОНУ (МЕТОДЫ ОБЪЕКТА MATH В ПОМОЩЬ)

budgetDay =  budgetMonth / 30 ;
console.log('Бюджет на день: ', Math.floor(budgetDay), ' рублей');

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} 
if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} 
if (budgetDay < 600 && budgetDay >= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
if (budgetDay < 0) {
    console.log('Что то пошло не так');
}

let yyy = '';

console.log(yyy.toUpperCase());