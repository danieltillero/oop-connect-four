import Column from "./column.js";

export default class RowWinInspector {
	constructor(column1, column2, column3, column4) {
		this.columns = [column1, column2, column3, column4];
	}

	inspect() {
		for (let i = 5; i >= 0; i--) {
			console.log("columns[3]", this.columns[3]);
			let token1 = this.columns[0].getTokenAt(i);
			let token2 = this.columns[1].getTokenAt(i);
			let token3 = this.columns[2].getTokenAt(i);
			let token4 = this.columns[3].getTokenAt(i);

			console.log("Tokens: ", token1, token2, token3, token4);
			if (
				token1 !== null &&
				token1 === token2 &&
				token2 === token3 &&
				token3 === token4
			) {
				return token1;
			} else {
				return 0;
			}
		}
	}
}
