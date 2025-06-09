import { sum, sub } from "./sum.js";

test("adderar två tal", () => {
  expect(sum(2, 3)).toBe(5);
});

test("subtraherar två tal", () => {
  expect(sub(4, 3)).toBe(1);
});

//Definierar ett test:
// test("beskrivning", () => {
	//Testkod här 
// });