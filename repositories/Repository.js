import axios from 'axios';
const baseDomain = 'https://beta.apinouthemes.com'; // API for products
export const basePostUrl = 'https://beta.apinouthemes.com'; // API for post
export const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)
export const baseproduct='http://34.135.133.158:4200/api' //API for product
export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
    baseproduct,
    
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
