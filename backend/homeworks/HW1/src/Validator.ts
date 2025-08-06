// src/Validator.ts

// Module for validating input parameters for Lotto number generation
class Validator {
	static messages: {
		minMax: string;
		amountPositive: string;
		rangeTooSmall: string;
		notInteger: string;
		notAllIntegers: string;
	} = {
		minMax: "Min must be less than max.",
		amountPositive: "Amount must be positive.",
		rangeTooSmall:
			"Range is too small for the required amount of unique numbers.",
		notInteger: "Argument must be integer: ",
		notAllIntegers: "All arguments must be integers.",
	};

	public static validate(min: number, max: number, amount: number): void {
		this.validateIntegers(min, max, amount);
		this.validateMinMax(min, max);
		this.validateAmount(amount);
		this.validateRange(min, max, amount);
	}

	private static validateInteger(num: number, name: string): void {
		if (!Number.isInteger(num)) {
			throw new Error(this.messages.notInteger + `${name}`);
		}
	}

	private static validateIntegers(
		min: number,
		max: number,
		amount: number
	): void {
		this.validateInteger(min, "min");
		this.validateInteger(max, "max");
		this.validateInteger(amount, "amount");
	}

	private static validateMinMax(min: number, max: number): void {
		if (min >= max) {
			throw new Error(this.messages.minMax);
		}
	}

	private static validateAmount(amount: number): void {
		if (amount <= 0) {
			throw new Error(this.messages.amountPositive);
		}
	}

	private static validateRange(
		min: number,
		max: number,
		amount: number
	): void {
		if (max - min + 1 < amount) {
			throw new Error(this.messages.rangeTooSmall);
		}
	}
}

export = Validator;
