// Handle Erros
const axios = require('axios');

async function fetchGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await axios.get(url);

  const user = await response.data;
  return user;
}

async function showGithubUser(handle) {
  try {
    const user = await fetchGithubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err){
    console.log(`Error : ${err}`);
  }
}

showGithubUser("idonotexists");
