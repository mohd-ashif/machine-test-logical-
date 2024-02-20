function ascendingOrder(n, a) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}

let numbers = [78, 55, 22, 11, 5, 3, 1, 98, 111];
ascendingOrder(numbers.length, numbers);
console.log(numbers); 