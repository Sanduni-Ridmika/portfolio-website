const BASE_URL = 'http://localhost:5000';

export const SERVICES_URL = BASE_URL + '/api/services';
export const SERVICES_TAGS_URL = SERVICES_URL + '/tags';
export const SERVICES_BY_SEARCH_URL = SERVICES_URL + '/search/';
export const SERVICES_BY_TAG_URL = SERVICES_URL + '/tag/';
export const SERVICE_BY_ID_URL = SERVICES_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
