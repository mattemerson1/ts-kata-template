import { romanNumeral } from "./romanNumeralsType";

const romanNumerals: romanNumeral = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    5000: "V^",
  };

export const romanNumeralConverter = (arabicNumber: number): string | void => {
    let numberPartition: number[] = splitNumber(arabicNumber);
    let romanNumeral = romanNumeralGenerator(numberPartition);
    return romanNumeral;
};

export const romanNumeralGenerator = (numberPartition: number[]): string => {
    let romanNumeralArr: string[] = [];
    for (const partition of numberPartition) {
        let firstIndexOfNumber = parseInt(partition.toString()[0])
        if (romanNumerals.hasOwnProperty(partition)) {
            romanNumeralArr.push(romanNumerals[partition]);
        } else if (firstIndexOfNumber < 4) {
            let startingNumeral = romanNumerals[partition /firstIndexOfNumber]
            romanNumeralArr.push(startingNumeral.repeat(firstIndexOfNumber))
        } else if (firstIndexOfNumber > 5 && firstIndexOfNumber < 9) {            
            let startingNumeral = romanNumerals[(partition /firstIndexOfNumber) *  5]
            let endingNumerals = romanNumerals[partition /firstIndexOfNumber].repeat(firstIndexOfNumber - 5);
            romanNumeralArr.push(startingNumeral + endingNumerals)
        } else if (firstIndexOfNumber === 4) {
            let startingNumeral = romanNumerals[partition /firstIndexOfNumber].repeat(1);
            let endingNumeral = romanNumerals[(partition /firstIndexOfNumber) *  5]
            romanNumeralArr.push(startingNumeral + endingNumeral)
        } else if (firstIndexOfNumber === 9) {
            let startingNumeral = romanNumerals[partition /firstIndexOfNumber].repeat(1);
            let endingNumeral = romanNumerals[(partition /firstIndexOfNumber) *  10]
            romanNumeralArr.push(startingNumeral + endingNumeral)
        }
    }
    return romanNumeralArr.join('');
}

export const splitNumber = (arabicNumber: number): number[] => {
    let splitNumber: number[] = [];
    let numberLength: number = arabicNumber.toString().length;
    for (let i = 0; i < numberLength; i++) {
        let numberPartition: string = arabicNumber.toString()[i] + "0".repeat((numberLength - 1) - i)
        if (numberPartition[0] != "0") {            
            splitNumber.push(parseInt(numberPartition));
        }
    };
    return splitNumber;
};