

const axios = require('axios').default.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  
  });

axios.get('/posts').then((result)=>{


console.log(result.data);
}).catch( (e) =>{

    console.log('Error:::=1>',e);


});