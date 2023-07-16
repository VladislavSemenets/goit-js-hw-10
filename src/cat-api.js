const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_3piOJC3V8LfNY2AeVC2JI8FjJ1es6vt6GZMDgTU1ANrfwovG458DNTTIr9M4r4JM';


function fetchBreeds() {
    
    return fetch(`${ URL }/breeds`, {
        headers: {
            'x-api-key': API_KEY,
        },
    })
        .then(response => {
            return response.json();
        });
    
}

function fetchCatByBreed(breedId) {
    return fetch(`${URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`) 
    
        .then(response => {
            return response.json();           
        });
}


 export default { fetchBreeds, fetchCatByBreed };