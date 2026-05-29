const btn = document.getElementById('searchBtn')
const input = document.getElementById('usernameInput')
const card = document.getElementById('profileCard')
const err_msg = document.getElementById('errorMessage')

const fetchData = async (username) => {
    try {
        err_msg.classList.add('hidden')
        card.classList.add('hidden')

        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()

        if(!response.ok){
            err_msg.classList.remove('hidden')
        }else{
            card.classList.remove('hidden')

            const img = document.getElementById('avatar')
            img.src = data.avatar_url

            const name = document.getElementById('name')
            name.textContent = data.name || "No Name available"

            const bio = document.getElementById('bio')
            bio.textContent = data.bio || "No Bio available"

            const followers = document.getElementById('followers')
            followers.textContent = data.followers

            const following = document.getElementById('following')
            following.textContent = data.following

            const repos = document.getElementById('repos')
            repos.textContent = data.public_repos

            const profileLink = document.getElementById('profileLink')
            profileLink.href = data.html_url
        }

    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener('click', ()=>{
    const username = input.value

    if(username == ""){
        err_msg.classList.remove('hidden')
        err_msg.textContent = "Please enter a username"
        return
    }
    fetchData(username)
})