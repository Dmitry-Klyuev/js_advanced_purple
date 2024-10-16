// Sets
const flights = ['Russia', 'USA', 'London', 'Japan', 'London', 'USA'];


//Уникализирукм массив
const setFlights = new Set(flights); // Set(4) { 'Russia', 'USA', 'London', 'Japan' }

// узнать размер
setFlights.size // 4

// проверка на наличие элемента
setFlights.has('Russia') // true
setFlights.has('USA') // true
setFlights.has('England') // false

// удаление элемента
setFlights.delete('Russia')
setFlights.has('Russia') // false

// добавление элемента
setFlights.add('Russia')
setFlights.has('Russia') // true

// преобразование в массив
const arrFlights = [...setFlights]  // ['Russia', 'USA', 'London', 'Japan']
console.log(arrFlights);

// очистка
setFlights.clear() // Set(0) {}