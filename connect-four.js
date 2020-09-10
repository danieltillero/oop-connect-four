import Game from "./game.js";

let game;
const player1Input = document.getElementById("player-1-name");
const player2Input = document.getElementById("player-2-name");
const newGameBtn = document.getElementById("new-game");
const clickTargets = document.getElementById("click-targets");
const gameName = document.getElementById("game-name");

const disableGame = function () {
	if (player1Input.value && player2Input.value) {
		newGameBtn.disabled = false;
	} else {
		newGameBtn.disabled = true;
	}
};

const updateUI = function () {
	if (game) {
		document
			.getElementById("board-holder")
			.classList.remove("is-invisible");

		gameName.innerHTML = game.getName().toUpperCase();
		console.log(game.winnerNumber);
		gameName.style.textAlign = "center";

		if (game.currentPlayer === 1) {
			clickTargets.className = "red";
		} else {
			clickTargets.className = "black";
		}
	} else {
		document.getElementById("board-holder").classList.add("is-invisible");
	}
	for (let i = 0; i <= 5; i++) {
		for (let j = 0; j <= 6; j++) {
			let square = document.getElementById(`square-${i}-${j}`);
			square.innerHTML = "";
			if (game.getTokenAt(i, j) === 1) {
				let div = document.createElement("div");
				div.setAttribute("class", "token red");
				square.appendChild(div);
			} else if (game.getTokenAt(i, j) === 2) {
				let div = document.createElement("div");
				div.setAttribute("class", "token black");
				square.appendChild(div);
			}
		}
	}

	for (let i = 0; i <= 6; i++) {
		let columnId = document.getElementById(`column-${i}`);
		if (game.isColumnFull(i)) {
			columnId.classList.add("full");
		} else {
			columnId.classList.remove("full");
		}
	}
};

player1Input.addEventListener("keyup", disableGame);

player2Input.addEventListener("keyup", disableGame);

newGameBtn.addEventListener("click", (e) => {
	game = new Game(player1Input.value, player2Input.value);
	player1Input.value = "";
	player2Input.value = "";
	disableGame();
	updateUI();
});

clickTargets.addEventListener("click", (e) => {
	const clickedColumn = Number(event.target.id.slice(7));
	if (event.target.id.includes("column-")) {
		game.playInColumn(clickedColumn);
	}
	updateUI();
});
