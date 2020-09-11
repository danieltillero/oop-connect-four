export default class ColumnWinInspector {
	constructor(columnObj) {
		this.columnObj = columnObj;
	}
	inspect() {
		let columnArray = this.columnObj.columnArray;
		for (let i = 0; i < 4; i++) {
			if (
				columnArray[i] &&
				columnArray[i] === columnArray[i + 1] &&
				columnArray[i + 1] === columnArray[i + 2] &&
				columnArray[i + 2] === columnArray[i + 3]
			) {
				return columnArray[i];
			}
		}
	}
}
