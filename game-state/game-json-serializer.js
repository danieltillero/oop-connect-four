export default class GameJsonSerializer {
	constructor(game) {
		this.game = game;
	}

	serialize() {
		const data = {
			player1Name: this.game.player1Name,
			player2Name: this.game.player2Name,
			tokens: [[], [], [], [], [], []],
		};
		for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
			for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
				const token = this.game.getTokenAt(rowIndex, columnIndex);
				data.tokens[rowIndex][columnIndex] = token;
			}
		}
		return JSON.stringify(data);
	}
}
