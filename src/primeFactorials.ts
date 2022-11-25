export const findPrimeFactorials = (number: number, primeFactorials: any[] = []) => {
    const primeNumbers: number[] = [2, 3, 5, 7, 11, 11, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    for (let i = 0; i < primeNumbers.length; i++) {
        if (number / primeNumbers[i] == 1) {
            primeFactorials.push(number)
            return primeFactorials
        } else if (Number.isInteger(number / primeNumbers[i])) {
            primeFactorials.push(primeNumbers[i])
            findPrimeFactorials(number / primeNumbers[i], primeFactorials)
            break
        }
    }
    return primeFactorials
}