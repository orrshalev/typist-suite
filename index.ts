import { generate } from "random-words";
import yargs from "yargs-parser";

const args = yargs(Bun.argv.slice(2), {
    alias: {combination: ["c"], wordCount: ["w"]},
    boolean: ["combination"],
    number: ["wordCount"],
    default: {wordCount: 20 }


});

if (args._.length < 1) {
    console.error("Usage: bun run index.tx [--c] <letters> [--w num-words]")
    process.exit(1);
}

const letters = (args._[0] as string).split("");

const words = [];
while (words.length < args.wordCount) {
    const word = generate();
    if (args.c) {
        if (letters.every(letter => word.includes(letter)))
            words.push(word);
    } else {
        if (letters.some(letter => word.includes(letter)))
            words.push(word);
    }
}

console.log(words.join(" "));
