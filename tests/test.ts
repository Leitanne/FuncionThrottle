import { throttle } from "../src/throttle";

test('La funcion debe llamarse', async() => {
    jest.useFakeTimers();
    let funcion = throttle(3000, (a, b) => a + b);
    expect(await funcion(1,2)).toBe(3);
});