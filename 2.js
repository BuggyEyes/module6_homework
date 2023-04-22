function checkNumber(number) {
    if (number > 1000) {
        return 'Данные неверны';
    }
    if (number == 1 || number == 0) {
        return 'Число обычное(не простое и не составное)';
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return 'Число составное';
        }

        return 'Число простое';
    }
}

console.log(checkNumber(0));