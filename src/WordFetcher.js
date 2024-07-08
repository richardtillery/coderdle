import axios from 'axios';

export async function fetchWord() {
    let word = 'CODER';
    console.log('FETCHING WORD');
    await axios.get('http://localhost:8888/')
     .then(response => word = response.data)
     .catch(error => {console.log(error); word = 'CODER'});
    return word;
}