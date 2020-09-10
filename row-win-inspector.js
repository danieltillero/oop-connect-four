import Column from "./column.js";

export default class RowWinInspector {
    constructor() {
        this.columns = [new Column(), new Column(), new Column(), new Column()];
    }

    inspect() {
        for (let i = 0; i <= 5; i++) {
            let token1 = this.columns[0].getTokenAt(i);
            let token2 = this.columns[1].getTokenAt(i);
            let token3 = this.columns[2].getTokenAt(i);
            let token4 = this.columns[3].getTokenAt(i);
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
