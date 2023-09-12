/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstAndLast = numbers.filter(
        (value: number, index: number, array: number[]): boolean =>
            index === 0 || index === array.length - 1
    );
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return firstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const result = numbers.map((value: number) => value * 3);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((strVal: string, numVal: number) => {
        numVal = parseInt(strVal);
        if (isNaN(numVal)) {
            return 0;
        }
        return numVal;
    });
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const result = amounts.map((strVal: string, numVal: number) => {
        numVal = parseInt(strVal.replace("$", ""));
        if (isNaN(numVal)) {
            return 0;
        }
        return numVal;
    });
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const result = messages
        .map((message: string) => {
            if (message.endsWith("!")) {
                return message.toUpperCase();
            } else {
                return message;
            }
        })
        .filter((message: string) => !message.endsWith("?"));
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every((value: string) =>
        value === "red" || value === "blue" || value === "green" ? true : false
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((acc, current) => acc + current, 0);
    const addendsString = addends.join("+");

    return `${sum}=${addendsString}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    /*const negativeIndex = values.findIndex((value: number) => value < 0);
    const sum = values.reduce((num1: number, num2: number) => {
        if (num1 < 0) {
            return num2;
        } else {
            num2 += num1;
            return num2;
        }
    }, 0);

    if (values.every((value: number) => value > 0)) {
        return values.splice(values.length, 0, sum);
    }
    return values.splice(negativeIndex, 0, sum);*/
    const negativeIndex = values.findIndex((num: number) => num < 0);

    if (negativeIndex === -1) {
        const sum = values.reduce(
            (num1: number, num2: number) => num1 + num2,
            0
        );
        return [...values, sum];
    } else {
        const sum = values
            .slice(0, negativeIndex)
            .reduce(
                (prevVal: number, currentVal: number) => prevVal + currentVal,
                0
            );
        const result = [
            ...values.slice(0, negativeIndex + 1),
            sum,
            ...values.slice(negativeIndex + 1)
        ];
        return result;
    }
}
