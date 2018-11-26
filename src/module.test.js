import {modulo} from "./operations.js"

test('module 30 % 4 to equal 2', () => {
  expect(modulo(30, 4)).toBe(2);
});