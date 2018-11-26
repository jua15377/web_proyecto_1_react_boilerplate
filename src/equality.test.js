import {equality} from "./operations.js"

test('87 to equal 98', () => {
  expect(equality(87, 98)).toBe(0);
});