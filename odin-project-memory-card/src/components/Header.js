import styles from '../App.module.css';

function Header({ score, highScore }) {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>Pokemon Memory Game</h1>
			<div className={styles.scores}>
				<h2>Score: {score}</h2>
				<h2>High Score: {highScore}</h2>
			</div>
		</div>
	);
}

export default Header;
