const path = require('path');
const axios = require('axios');

axios('https://jsonplaceholder.typicode.com/comments')
.then((response) => {
    console.log(response.data);
})
.catch((e) => {
    console.log(e)
});