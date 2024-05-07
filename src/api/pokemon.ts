import client from "./client";

const getPokemon = async () => client.get("./pokemon");

const pokemonApi = {
    getPokemon,
};

export default pokemonApi;