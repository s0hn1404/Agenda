import './style.css'


const agenda = () =>{
    const home = document.querySelector('#homepage')
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    home.appendChild(sidebar)
    const next7daysmain = document.createElement('div')
    next7daysmain.classList.add('next7daysmain')
    home.appendChild(next7daysmain)
    const tasksmain = document.createElement('div')
    tasksmain.classList.add('tasksmain')
    home.appendChild(tasksmain)
    const calendarmain = document.createElement('div')
    calendarmain.classList.add('calendarmain')
    home.appendChild(calendarmain)

    const main = document.createElement("div")
    let date = new Date();
    main.classList.add('main')
    home.appendChild(main)

    const iconstar = document.querySelector('.fa-star')
    home.appendChild(iconstar)
    const star = document.createElement('div')
    star.classList.add('star')
    home.appendChild(star)
    star.addEventListener('mouseover', (e) => {
        sidebar.style.display = 'grid'
    })
    main.addEventListener('mouseover', (e) =>{
        sidebar.style.display = 'none'
    })
    // next7daysmain.addEventListener('mouseover', (e) =>{
    //     sidebar.style.display = 'none'
    // })
    tasksmain.addEventListener('mouseover', (e) =>{
        sidebar.style.display = 'none'
    })
    calendarmain.addEventListener('mouseover', (e) =>{
        sidebar.style.display = 'none'
    })

    const welcomecontainer = document.createElement('div')
    welcomecontainer.classList.add('welcome')
    main.append(welcomecontainer)

    const welcome1 = document.createElement('div')
    welcome1.classList.add('welcome1')
    welcome1.textContent = 'Hello user!'
    welcomecontainer.append(welcome1)

    const welcome2 = document.createElement('div')
    welcome2.classList.add('welcome2')
    welcome2.textContent = 'You are what you do.'
    welcomecontainer.append(welcome2)

    const datecontainer = document.createElement('div')
    datecontainer.classList.add('datecontainer')
    main.append(datecontainer)

    const dayweek = document.createElement('div')
    dayweek.textContent =  Date().slice(0,3)
    datecontainer.appendChild(dayweek)
    
    const daydate = document.createElement('div')
    daydate.textContent =  Date().slice(8,10)
    daydate.classList.add('daydate')
    datecontainer.appendChild(daydate)

    const daymonth = document.createElement('div')
    daymonth.textContent =  Date().slice(4,7)
    datecontainer.appendChild(daymonth)

    
    const addtask = document.createElement('div')
    addtask.classList.add('addtask')
    main.append(addtask)
    
    const addtaskbtn = document.createElement('div')
    addtaskbtn.classList.add('addtaskbtn')
    addtask.append(addtaskbtn)
    
    const addtasktxt = document.createElement('textarea')
    addtasktxt .classList.add('addtasktxt')
    addtask.append(addtasktxt)
    
    const icon = document.querySelector(".listicon")
    icon.classList.add('icon')
    addtaskbtn.appendChild(icon)
}

export default agenda

