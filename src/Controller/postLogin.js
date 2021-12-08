export function postLogin(credentials) {
  /*To log in, send the body as a stringified JSON*/
  const curl = "https://bikengoldtest.herokuapp.com/users/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  };

  /*By returning fetch, you return a promise that, when
    fulfilled, returns the user information*/
  return fetch(curl, options)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      alert(error);
    });
}
