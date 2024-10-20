// Квадратный корень
Math.sqrt(35) // 5

// Проверка знака числа
Math.sign(-100) // -1
Math.sign(0) // 0
Math.sign(100) // 1

// Абсолютное значение
Math.abs(-100) // 100
Math.abs(0) // 0
Math.abs(100) // 100

// Максимальное и минимальное значение
Math.max(1, 2, 3, 4, 5) // 5
Math.min(1, 2, 3, 4, 5) // 1

const arr = [1, 2, 3, 4, 5]
Math.max(...arr) // 5
Math.min(...arr) // 1

// Округление
Math.round(1.3) // 1
Math.round(1.5) // 2

Math.ceil(1.2) // 2
Math.ceil(1.6) // 2

Math.floor(1.2) // 1
Math.floor(1.6) // 1

Math.trunc(1.4) // 1
Math.trunc(1.6) // 1
Math.trunc(2.3213) // 2

1.49.toFixed(1) // '1.5'  !!!Возвращает строку!!!
1.55323.toFixed(1) // '1.6'
1.55323.toFixed(2) // '1.55'

// Рандомное число от min до max
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
random(1,10)

console.log(parseInt('int'))