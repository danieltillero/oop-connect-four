export default class GameJsonDeserializer {
    constructor(json) {
        this.json = json;
    }
    deserialize() {
        let game = JSON.parse(this.json);
        let currentIndexes = [5, 5, 5, 5, 5, 5, 5];
        let instructions = [];
        let valueToLookFor = 1;
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            let rowIndex = currentIndexes[columnIndex];
            let tokenValue = game[rowIndex][columnIndex];
        }
    }
}
