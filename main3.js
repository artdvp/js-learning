// Awiat multiple Promise Cncurrently with Promise.all()
const axios = require('axios');

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await axios.get(url);
  return await response.data;
}

async function showUserAndRepos(handle) {
  try {
    const [user, repos] = await Promise.all([
      fetchFromGithub(`/users/${handle}`),
      fetchFromGithub(`/users/${handle}/repos`)
    ]);

    console.log(user.name);
    console.log(`${repos.length} repos`);
  } catch (err){
    console.log(`Error : ${err}`);
  }
}

showUserAndRepos("artdvp");
