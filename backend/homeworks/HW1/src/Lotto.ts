class Lotto {
	private min: number;
	private max: number;
	private amount: number;

	constructor(min: number, max: number, amount: number) {
		this.min = min;
		this.max = max;
		this.amount = amount;
	}

	public generate(): number[] {
		const numbers = new Set<number>();
		while (numbers.size < this.amount) {
			const num = this.getRandomNumber();
			numbers.add(num);
		}
		return Array.from(numbers).sort((a, b) => a - b);
	}

	private getRandomNumber(): number {
		return (
			Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
		);
	}
}

export = Lotto;
