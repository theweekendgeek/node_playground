import axios from 'axios';

const a = await axios.get('http://localhost:3030/api/v1/suggestions?s=fuss')

const { data, status } = a

console.log(status);
console.log(data.status);
console.log(data);
// console.log(a);
