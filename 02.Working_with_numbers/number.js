// Преобразование строки в число
Number.parseInt('10ss') // 10
Number.parseInt('11 sec') //11
Number.parseInt('sec 11') //false

// Преобразование строки в число с десятичной точкой
Number.parseFloat('10.5') // 10.5
Number.parseFloat('10.5 sec') //10.5
Number.parseFloat('sec 10.5') //false