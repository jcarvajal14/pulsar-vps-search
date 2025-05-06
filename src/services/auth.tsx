import axios, { AxiosResponse } from 'axios';

export const setAccessToken = (accessToken: string | null) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
    } else {
        localStorage.removeItem('accessToken');
    }
};

export const getAccessToken = async () => {
    let accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        // console.log(`Getting new access token`);
        // const token = await axios.get('/api/auth/token');
        // if (token?.data) {
        //     accessToken = token.data.access_token;
        //     setAccessToken(accessToken);
        // }
    }

    return accessToken;
};

export const postLoginEnvironment = async (user: { user: string | null; password: string | null }): Promise<AxiosResponse> => axios.post(`/api/login`, user);
