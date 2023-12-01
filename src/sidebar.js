
const menubar = () =>{
    const menu = document.querySelector('.sidebar')
    const user = document.createElement('div')
    user.classList.add('user')
    user.textContent = 'USERNAMEEEE'
    menu.appendChild(user)

    const thumbtackicon = document.querySelector('.fa-thumbtack')
    menu.appendChild(thumbtackicon) 
    const thumbtackbox = document.createElement('div')
    thumbtackbox.classList.add('thumbtackbox')
    menu.appendChild(thumbtackbox)
    thumbtackbox.addEventListener('click' , (e) => {
        
    })

    const today = document.createElement('div')
    today.classList.add('today')
    today.textContent= 'Today'
    menu.appendChild(today)

    const next7days = document.createElement('div')
    next7days.classList.add('next7days')
    next7days.textContent= 'Next 7 days'
    menu.appendChild(next7days)

    const tasks = document.createElement('div')
    tasks.classList.add('tasks')
    tasks.textContent= 'Tasks'
    menu.appendChild(tasks)

}

export default menubar