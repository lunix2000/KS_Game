function generateRandomNumber() {

    return Math.floor(Math.random() * 100 + 1);

}

function reward(count) {
    let message;
    switch (count) {
        case 1:
            message = 'Perfect!';
            break;
        case 2:
        case 3:
            message = 'Unbelievable!';
            break;
        case 4:
        case 5:
            message = 'Great!';
            break;
        case 6:
        case 7:
        case 8:
            message = 'Passable!';
            break;
        case 9:
        case 10:
            message = 'Just Barely!'
            break;
    }

    return message;
}