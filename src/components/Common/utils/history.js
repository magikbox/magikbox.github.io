import { createBrowserHistory, createHashHistory } from 'history';

export const history = createBrowserHistory();

// export const history = createHashHistory({
//     basename: '/',
//     hashType: 'slash'
// });