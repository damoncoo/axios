let axios = require('axios')

async function fetchUsers() {
    let users = await axios({
        method: 'get',
        url: 'https://api.github.com/users'
    })
    console.log(users)
}

fetchUsers()
