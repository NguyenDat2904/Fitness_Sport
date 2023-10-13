import axios from 'axios';
function register(name,phone,email,password){
    axios
    .post('http://localhost:3001/register', { name, phone, email, password })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
export default register;