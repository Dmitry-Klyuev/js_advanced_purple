//Форматируем денежные суммы
const options1 = {
    style: 'currency', // указываем стиль
    currency: 'RUB', // указываем валюту
    minimumFractionDigits: 0 // указываем количество знаков после запятой
}
const options2 = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
}
const options3 = {
    style: 'decimal', // указываем стиль (десятичный)
    minimumFractionDigits: 2
}
const options4 = {
    style: 'unit', // указываем стиль (блок)
    unit: "kilometer-per-hour", // описывае блок как км/ч
    minimumFractionDigits: 0 // кол-во знаков после запятой
}

new Intl.NumberFormat('ru-RU', options1).format(100000); // "100 000 ₽"
new Intl.NumberFormat('ru-RU', options2).format(300000); // "100 000.00 $"
new Intl.NumberFormat('ru-RU', options3).format(500000); // "500.00"
new Intl.NumberFormat('ru-RU', options4).format(56); // "56 км/ч"