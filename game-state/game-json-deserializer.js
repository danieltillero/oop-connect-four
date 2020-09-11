import Game from "../game.js";

export default class GameJsonDeserializer {
	constructor(json) {
		this.json = json;
	}
	deserialize() {
		const data = JSON.parse(this.json);
		const game = new Game(data.player1Name, data.player2Name);
		const columnIndexes = [5, 5, 5, 5, 5, 5, 5];
		let playerTurn = 1;

		while (
			columnIndexes.some((x) => {
				return x !== -1;
			})
		) {
			console.log("blah", "hello from Senyo");
			for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
				const rowIndex = columnIndexes[columnIndex];
				if (rowIndex === -1) {
					continue;
				}
				const tokenValue = data.tokens[rowIndex][columnIndex];
				if (tokenValue === null) {
					columnIndexes[columnIndex] = -1;
				}
				if (tokenValue === playerTurn) {
					game.playInColumn(columnIndex);
					columnIndexes[columnIndex]--;
					if (playerTurn === 1) {
						playerTurn = 2;
					} else {
						playerTurn = 1;
					}
				}
			}
		}
		return game;
	}
}
