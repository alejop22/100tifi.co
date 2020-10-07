const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API //Si id existe entonces apiURL = API+id. Si no entonces apiURL = API;
    try {//El estandar nos dice que se usa try catch para el llamado a las apis
        const response = await fetch(apiURL);
        const data = await response.json();//Me convierte la respuesta que obtuvimos del servidor a archivo json
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;