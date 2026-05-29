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
        }

    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener('click', ()=>{
    const username = input.value
    fetchData(username)
})