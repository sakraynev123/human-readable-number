module.exports = function toReadable(number) {
    const words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
    }

    const cools = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const decimal = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    if (number <= 10) {
        return words[number]
    }
    else if (number < 20 && number > 10) {
        return cools[number]
    }
    else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return decimal[number]
        }
        else {
            return `${decimal[Number(number.toString()[0]) * 10]} ${words[Number(number.toString()[1])]}`
        }
    }
    else if (number >= 100 && number <= 1000) {
        if (number === 1000) {
            return 'one thousand'
        }
        else if (Number(number.toString()[1]) === 1 && number % 10 !== 0) {
            return `${words[Number(number.toString()[0])]} hundred ${cools[Number(number.toString()[1] + number.toString()[2])]}`
        }
        else if (number % 10 === 0 && number % 100 !== 0) {
            return `${words[Number(number.toString()[0])]} hundred ${decimal[Number(number.toString()[1]) * 10]}`
        }
        else if (number % 100 === 0) {
            return `${words[Number(number.toString()[0])]} hundred`
        }
        else {
            if (Number(number.toString()[1]) === 0) {
                return `${words[Number(number.toString()[0])]} hundred ${words[Number(number.toString()[2])]}`
            }
            else {
                return `${words[Number(number.toString()[0])]} hundred ${decimal[Number(number.toString()[1]) * 10]} ${words[Number(number.toString()[2])]}`
            }
        }
    }
}
