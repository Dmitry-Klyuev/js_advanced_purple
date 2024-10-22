const User = function (email, password) { //функция контруктор
    this.email = email
    this.password = password
}

const user1 = new User('a@a.ru', '233123') // создание нового юзера { email: 'a@a.ru', password: '233123' }

//Как работает опереатор new
//1. Вызывается User функция
//2. Создается новый объект
//3. this = пустом объекту
//4. Объект связывается с prototype
//5. Передает ссылку на новый объект
//6. Возвращает ссылку на новый объект
