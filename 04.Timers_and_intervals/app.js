//Простой таймер
setTimeout(() => {
    console.log('timer 1');
}, 1000)

//очистка таймера
const time = setTimeout(() => { //присваиваем таймер в переменную для получения его идентификатора
    console.log('timer 2')
}, 1000)

clearTimeout(time) // удаляем таймер из очереди

//передача аргументов в таймер
setTimeout((arg1, arg2) => {
    console.log(arg1)
    console.log(arg2)
}, 2000, 'Hello', 'World')  //передаем аргументы в таймер (Можно массив через спред оператор)

//Интервал
const interval = setInterval(() => { //интервал работает в бесконечном цикле пока его не удалят
    console.log('timer 3')
}, 1000)

setTimeout(() => { //через 5 секунд удаляем интервал
    clearInterval(interval)
}, 5000)