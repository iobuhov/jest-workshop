export class Chance {
    randInt(): number {
        const [min, max] = [90, 100];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
