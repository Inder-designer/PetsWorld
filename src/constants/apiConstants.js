export const API_URL = "http://localhost:4000/api/v1"
// "https://petworld-api.onrender.com/api/v1"

export const getConfig = (contentType = 'application/json') => {
    const token = localStorage.getItem('token');

    return {
        headers: {
            'Content-Type': contentType,
            'Authorization': token ? `Bearer ${token}` : '', // Include token if available
        },
        withCredentials: true,
    };
};
export const CONFIG = {
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}
export const CONFIG_MULTI = {
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    withCredentials: true
}
