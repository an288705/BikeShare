export function postAvailableBikeSearch(key){
    const credentials = {
        key : key
    }
    /*To search, send the body as a stringified JSON*/
    const curl = 'https://bikengold.herokuapp.com/bikes/search2';
    const options = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json;charset=utf-8',
            },
        body : JSON.stringify(credentials)
    };

    /*By returning fetch, you return a promise that, when
    fulfilled, returns the user information*/
    return fetch(curl,options)
    .then(response=>{return response.json()})
    .catch(error=>{alert(error)});
}