export default class Column {
    constructor(columnNumber) {
        this.columnNumber = columnNumber;
        this.columnArray = [null, null, null, null, null, null];
    }

    add(currentPlayer) {
        for (let i = this.columnArray.length - 1; i > 0; i--) {
            if (this.columnArray[i] === null) {
                this.columnArray[i] = currentPlayer;
            }
        }
    }

    getTokenAt(rowIndex) {
        return this.columnArray[rowIndex];
    }
}
