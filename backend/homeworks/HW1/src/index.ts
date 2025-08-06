import Lotto = require("./Lotto");
import Validator = require("./validator");

const [, , amountArg, minArg, maxArg] = process.argv;

const amount = parseInt(amountArg || "7", 10);
const min = parseInt(minArg || "1", 10);
const max = parseInt(maxArg || "49", 10);

try {
	Validator.validate(min, max, amount);
	const lotto = new Lotto(min, max, amount);
	const result = lotto.generate();
	console.log("🎱 Sportloto numbers:", result.join(", "));
} catch (err) {
	console.error("❌ Error:", (err as Error).message);
	process.exit(1);
}
