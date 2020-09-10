import Column from "./column.js";

export default class Game {
	constructor(player1Name, player2Name) {
		this.player1Name = player1Name;
		this.player2Name = player2Name;
		this.currentPlayer = 1;
		this.columns = [
			new Column(0),
			new Column(1),
			new Column(2),
			new Column(3),
			new Column(4),
			new Column(5),
			new Column(6),
		];
		this.winnerNumber = 0;
	}

	getName() {
		if (this.winnerNumber === 3) {
			return `${this.player1Name} ties with ${this.player2Name}`;
		} else {
			return `${this.player1Name} vs. ${this.player2Name}`;
		}
	}

	playInColumn(columnIndex) {
		this.columns[columnIndex].add(this.currentPlayer);
		if (this.currentPlayer === 2) {
			this.currentPlayer = 1;
		} else {
			this.currentPlayer = 2;
		}

		this.checkForTie();
	}

	checkForTie() {
		//refactor with every() if time allows//

		let columnIndex = 0;
		while (columnIndex <= 6) {
			if (this.isColumnFull(columnIndex)) {
				columnIndex++;
			} else {
				break;
			}
			if (columnIndex > 6) {
				this.winnerNumber = 3;
			}
		}
	}

	getTokenAt(rowIndex, columnIndex) {
		return this.columns[columnIndex].getTokenAt(rowIndex);
	}

	isColumnFull(columnIndex) {
		return this.columns[columnIndex].isFull();
	}
}
