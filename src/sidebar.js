
const menubar = () =>{
    const menu = document.querySelector('.sidebar')
    const next7dayshome = document.querySelector('.next7daysmain')
    const taskshome = document.querySelector('.tasksmain')
    const calendarhome = document.querySelector('.calendarmain')
    const main = document.querySelector('.main')

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

    const sidebarc1 = document.createElement('div')
    sidebarc1 .classList.add('sidebarc1')
    menu.appendChild(sidebarc1)

    const today = document.createElement('div')
    today.classList.add('today')
    today.textContent= 'Today'
    sidebarc1.appendChild(today)
    today.addEventListener('click', (e) => {
        main.style.display = 'block'
        next7dayshome.style.display = 'none'  
        taskshome.style.display = 'none'
        calendarhome.style.display = 'none'  
    })

    const next7days = document.createElement('div')
    next7days.classList.add('next7days')
    next7days.textContent= 'Next 7 days'
    sidebarc1.appendChild(next7days)
    next7days.addEventListener('click', (e) => {
        next7dayshome.style.display = 'block'  
        main.style.display = 'none'
        taskshome.style.display = 'none'
        calendarhome.style.display = 'none'  
    })

    const tasks = document.createElement('div')
    tasks.classList.add('tasks')
    tasks.textContent= 'Tasks'
    sidebarc1.appendChild(tasks)
    tasks.addEventListener('click', (e) => {
        taskshome.style.display = 'block'  
        main.style.display = 'none'
        next7dayshome.style.display = 'none'
        calendarhome.style.display = 'none'  
    })

    const calendar = document.createElement('div')
    calendar.classList.add('calendar')
    calendar.textContent= 'Calendar'
    sidebarc1.appendChild(calendar)
    calendar.addEventListener('click', (e) => {
        calendarhome.style.display = 'block'  
        main.style.display = 'none'
        next7dayshome.style.display = 'none'
        taskshome.style.display = 'none' 
    })
}

export default menubar