import './style.css'


const agenda = () =>{
    const home = document.querySelector('#homepage')
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    home.appendChild(sidebar)
   
    const main = document.createElement("div")
    let date = new Date();
    main.classList.add('main')
    home.appendChild(main)

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

    const icon = document.querySelector(".listicon")
    icon.classList.add('icon')
    main.append(icon)

    const addtask = document.createElement('div')
    addtask.classList.add('addtask')
    main.append(addtask)

    const addtaskbtn = document.createElement('div')
    addtaskbtn.classList.add('addtaskbtn')
    addtask.append(addtaskbtn)

    const addtasktxt = document.createElement('textarea')
    addtasktxt .classList.add('addtasktxt')
    addtask.append(addtasktxt)

}

export default agenda

