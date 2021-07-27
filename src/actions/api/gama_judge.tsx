const BASE_URL = 'https://8285c8c8-5cdc-4532-97ae-b49d79be8e71.mock.pstmn.io'

export const getAsync = async (endpoint: string, headers: Headers = new Headers()) =>{
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions)
    const data = await response.json();
    return data;
}

