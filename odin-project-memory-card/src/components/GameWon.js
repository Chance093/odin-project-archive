import styles from '../App.module.css';

function GameWon({ resetGame }) {
	return (
		<div className={styles.gameWon}>
			<p>You Won!</p>
			<button className={styles.restartButton} onClick={resetGame}>
				Try Again!
			</button>
		</div>
	);
}

export default GameWon;
