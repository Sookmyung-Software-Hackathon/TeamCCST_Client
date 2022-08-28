import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://ccst-server.herokuapp.com/',
  //  header: {
  //   // 'Content-Type': 'application/json',
  //   // 'Access-Control-Allow-Origin': '*',
  //   // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   // withCredentials: true,
  // },
});

export const accessClient = axios.create({
  baseURL: 'https://ccst-server.herokuapp.com/',
  //  header: {
  //   // 'Content-Type': 'application/json',
  //   // 'Access-Control-Allow-Origin': '*',
  //   // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   // withCredentials: true,
  // },
});
