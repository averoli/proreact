export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru'
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                url: {
                    pathname: '/api/v1/pokemons'
                }
            }
        }
    }
}

export default config;