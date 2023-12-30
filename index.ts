import { generate } from "random-words";

const args = Bun.argv.slice(2);

if (args.length < 1) {
    console.error("Usage: bun run index.tx <letter> [num-words]")
    process.exit(1);
}

const letter = args[0];

const DEFAULT_NUM_WORDS = 20;
const num_words = args.length > 1 ? Number.parseInt(args[1]) : DEFAULT_NUM_WORDS;

const words = [];
while (words.length < num_words) {
    const word = generate();
    if (word.includes(letter))
        words.push(word);
}

console.log(words.join(" "));
