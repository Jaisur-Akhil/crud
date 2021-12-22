/** @format */

import axios from 'axios';

const url = 'http://127.0.0.1:3003/user';

// export const getUsers= async ()=>{
//     return await axios.get(url);
// }

//we are freezing this because we are calling this function twice .
//1 , get url for reading .
// 2 for edit there fore modifying it to new

export const getUsers = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(url, user);
};
// export const getUsers=()=>{
//     return axios.get(url);
// }

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id) =>{
    return await axios.delete(`${url}/${id}`)
}