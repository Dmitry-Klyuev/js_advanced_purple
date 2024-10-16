//map
const wetherMap = new Map();

// добавление элементов
wetherMap.set('London', 'Rainy');

// добавление элементов нескольких ключей
wetherMap.set('Paris', 'Cloudy')
.set('USA', 'Sunny')
.set('Japan', 'Sunny') // Map(4) { 'London' => 'Rainy', 'Paris' => 'Cloudy', 'USA' => 'Sunny', 'Japan' => 'Sunny' }

// проверка на наличие элемента, получение и удаление
wetherMap.has('London') //  true
wetherMap.get('London') //  'Rainy'
wetherMap.delete('London') //удаляет и возвращает true или false смог удалить или нет
wetherMap.has('London') //  false
wetherMap.get('London') //  undefined

// размер мапы
wetherMap.size // 3

// очистка мапы
wetherMap.clear() // очищает мапу

//Конвертировать объект в мапу
const wetherObj = {
    London: 'Rainy',
    Paris: 'Cloudy',
    USA: 'Sunny',
    Japan: 'Sunny'
}
const wetherMap2 = new Map(Object.entries(wetherObj)); // Map(4) { 'London' => 'Rainy', 'Paris' => 'Cloudy', 'USA' => 'Sunny', 'Japan' => 'Sunny' }
wetherMap2.size // 4