import { Game } from "./game.js";

let game;

function updateUI() {
	if (game) {
		document.getElementById("board-holder").classList.add("is-invisible");
	} else {
		document
			.getElementById("board-holder")
			.classList.remove("is-invisible");
	}
}

window.addEventListener("DOMContentLoaded", (e) => {
	const player1Input = document.getElementById("player-1-name");
	const player2Input = document.getElementById("player-2-name");
	const newGameBtn = document.getElementById("new-game");

	const disableGame = function () {
		if (player1Input.value && player2Input.value) {
			newGameBtn.disabled = false;
		} else {
			newGameBtn.disabled = true;
		}
	};

	player1Input.addEventListener("keyup", (e) => {
		disableGame();
	});

	player2Input.addEventListener("keyup", (e) => {
		disableGame();
	});

	newGameBtn.addEventListener("click", (e) => {
		let game = new Game();
		player1Input.value = "";
		player2Input.value = "";
		disableGame();
	});
});
