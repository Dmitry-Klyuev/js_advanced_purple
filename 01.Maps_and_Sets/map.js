//map
const weatherMap = new Map();

// добавление элементов
weatherMap.set('London', 'Rainy');

// добавление элементов нескольких ключей
weatherMap.set('Paris', 'Cloudy')
.set('USA', 'Sunny')
.set('Japan', 'Sunny') // Map(4) { 'London' => 'Rainy', 'Paris' => 'Cloudy', 'USA' => 'Sunny', 'Japan' => 'Sunny' }

// проверка на наличие элемента, получение и удаление
weatherMap.has('London') //  true
weatherMap.get('London') //  'Rainy'
weatherMap.delete('London') //удаляет и возвращает true или false смог удалить или нет
weatherMap.has('London') //  false
weatherMap.get('London') //  undefined
weatherMap.set('Belarus', 'Sunny') // добавляет новый элемент

// размер мапы
weatherMap.size // 3

// очистка мапы
weatherMap.clear() // очищает мапу

//Конвертировать объект в мапу
const weatherObj = {
    London: 'Rainy',
    Paris: 'Cloudy',
    USA: 'Sunny',
    Japan: 'Sunny'
}
const weatherMap2 = new Map(Object.entries(weatherObj)); // Map(4) { 'London' => 'Rainy', 'Paris' => 'Cloudy', 'USA' => 'Sunny', 'Japan' => 'Sunny' }
weatherMap2.size // 4

//Итерация по мапе
for (const [key, value] of weatherMap2) {
    // в ключе лежит ключ, в value значение
    key, value; //London Rainy, Paris Cloudy,USA Sunny, Japan Sunny

}

const watherMap3 = new Map([
    ['London', '16'],
    ['Paris', '12'],
    ['USA', '10'],
    ['Japan', '8'],
    ['London', '25'],
])
const convertMap = new Map()

const newMap = new Map([...watherMap3].map(el=> el.reverse()))
console.log(newMap);


const set = new Set(['Russia', 'USA', 'London', 'Japan', 'London'])
console.log(set.size)