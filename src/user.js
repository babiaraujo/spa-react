import axios from 'axios';

const user = axios.create({
    baseURL: 'https://api.github.com/users/:usergithub'



})

export default user;