// tests/Validator.test.ts

const test = require("node:test");
import Validator = require("../src/validator");

describe("Validator", () => {
	it("should not throw for valid values", () => {
		expect(() => Validator.validate(1, 49, 7)).not.toThrow();
	});

	it("should throw for invalid amount", () => {
		expect(() => Validator.validate(1, 10, 15)).toThrow(
			"Range is too small"
		);
	});

	it("should throw if min >= max", () => {
		expect(() => Validator.validate(10, 10, 2)).toThrow(
			"Min must be less than max"
		);
	});

	it("should throw for non-integer values", () => {
		expect(() => Validator.validate(1.5, 10, 5)).toThrow(
			"must be integer"
		);
	});
});
