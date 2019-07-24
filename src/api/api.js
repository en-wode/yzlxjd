/** Created by wanan on 2019-06-11
 *作者:wanan
 */
import axios from 'axios';

let base = '';
let base1 = '/api';
export const requestLogin = params => { return axios.post(`${base1}/login`, params).then(res =>  res.data); };

export const getUserList = params => { return axios.get(`${base1}/user/list`, { params: params }); };

