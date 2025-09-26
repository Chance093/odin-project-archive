import axios from 'axios';

function getPokemonURLs() {
	const idxs = [3, 6, 9, 25, 39, 68, 79, 94, 130, 133, 143, 149];
	const pokemonUrls = [];
	idxs.forEach((idx) => {
		pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${idx}`);
	});
	return pokemonUrls;
}

async function fetchPokemon() {
	const Urls = getPokemonURLs();
	const promises = Urls.map((url) => {
		return axios.get(url);
	});
	const response = await Promise.all(promises);
	const data = response.map((response) => {
		return response.data;
	});
	return data;
}

export default fetchPokemon;
