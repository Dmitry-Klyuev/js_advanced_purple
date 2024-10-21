const date = new Date()

console.log(date) // 2022-01-01T00:00:00.000Z
console.log(new Intl.DateTimeFormat('ru-RU').format(date)) // 01.01.2022

const options = {
    hour: 'numeric', //указываем время цифрами
    minute: 'numeric', //указываем минуты цифрами
}
const options2 = {
    hour: 'numeric', //указываем время цифрами
    minute: 'numeric', //указываем минуты цифрами
    month: 'long', //указываем месяц полное имя
    weekday:'short' // указываем день недели короткое название
}
console.log(new Intl.DateTimeFormat('ru-RU', options).format(date)) // 14:51 выводит время от локали
console.log(new Intl.DateTimeFormat('en-US', options).format(date)) // 2:51 PM выводит время от локали

console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date)) // пн (месяц: октябрь) в 14:54



