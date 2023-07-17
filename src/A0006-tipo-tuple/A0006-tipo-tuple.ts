// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Vi'];
const dadosCliente2: [number, string, string] = [1, 'Vi', 'Sanches'];
const dadosCliente3: [number, string, string?] = [1, 'Vi'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Vi', 'Sanches'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Vi', 'zeca'];
const array2: ReadonlyArray<string> = ['Vi', 'zeca'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
