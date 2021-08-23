import axios from 'axios';
axios.defaults.baseURL = 'http://142.93.134.108:1111'

axios.interceptors.request.use(async (config) => {
    if (localStorage.getItem('tokenIsValid') === 'token is valid') {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
        return config;
    } 
        config.headers.Authorization = `Bearer ${localStorage.getItem('refresh_token')}`
    return config;
});


axios.interceptors.response.use(async (config) => {
      localStorage.setItem('tokenIsValid', config?.data?.body?.message)
    if (config.data.body.message === 'token expired') {
        try {
        const { data: { body: { access_token, refresh_token } } } = await axios.post('/refresh')
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
        localStorage.setItem('tokenIsValid', 'token is valid')
        await axios.get(`/me`)
        } catch (error) {
            console.log(error);
        }
    }
    return config;
});

export const checkAuth = async () => {
    try {
         await axios.get(`/me`);
    } catch (error) {
        console.log(error);
    };
};

export const signup = async (body) => {
    try {
        const response = await axios.post('/sign_up', body);
        localStorage.setItem('isLogin', true)
        return response;
    } catch (error) {
        localStorage.setItem('isLogin', false)
    }
};

export const login = async ({ email, password }) => {
    try {
        const { data: { body: { access_token, refresh_token } } } = await axios.post(`/login?email=${email}&password=${password}`);
        if (access_token && refresh_token) {
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
        localStorage.setItem('tokenIsValid', 'token is valid')
        localStorage.setItem('isLogin', true)
        }
    } catch (error) {
        localStorage.setItem('isLogin', false)
    };
};





