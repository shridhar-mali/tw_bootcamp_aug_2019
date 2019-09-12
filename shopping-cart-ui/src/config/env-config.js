//const API_HOST_LOCAL = 'localhost:8080';
const API_HOST_TEST = '34.93.68.101';
//const API_HOST_PRE_PROD = 'change_me';
const API_HOST_PROD = '34.93.22.144:80';

// const UI_HOST_LOCAL = 'localhost';
// const UI_HOST_TEST = '34.93.13.118';
// const UI_HOST_PRE_PROD = 'change_me';
// const UI_HOST_PROD = 'change_me';

// const HOST_NAMES = {
//     [UI_HOST_LOCAL]: API_HOST_LOCAL,
//     [UI_HOST_TEST]: API_HOST_TEST,
//     [UI_HOST_PRE_PROD]: API_HOST_PRE_PROD,
//     [UI_HOST_PROD]: API_HOST_PROD,
// };
const prod = 'production';
const BASE_URL = process.env.NODE_ENV === prod ? API_HOST_PROD : API_HOST_TEST;
console.log(process.env.NODE_ENV)
export const urls = {
    applicationName: `http://${BASE_URL}/application`,
    bookList: `http://${BASE_URL}/books`,
    bookDetail: `http://${BASE_URL}/books/`,
    order: `http://${BASE_URL}/order`
};

