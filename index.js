
export const sum = (a = 0, b = 0) => {
    if (typeof a !== 'number' | typeof b !== 'number') {
        throw new Error('Argument must be a number')
    } 
    return a + b;
}

export const doubleEachElement = arr => arr.map(x => x * 2);
