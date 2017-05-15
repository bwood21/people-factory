const personForm = document.querySelector('form')

const handlesubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = (form.personName.value)
    //form.elements gives array

    //details.textContent = personName
    // inner html allows taggs
    //details.innerHTML = '<em>' + personName + '</em>'
   // details.innerHTML = `<em>${personName}</em>`
    
  //  const em = document.createElement('em')
  //  em.textContent = personName;
  //  details.appendChild(em);

    const colorDiv = `
    <div height = 50px width = 50px style = "background-color: ${hairColor}"></div>
    `
    details.innerHTML = `
    <ul>
        <li> Name = ${personName} </li>
        <li> Hair Color = ${hairColor} </li>
        <li> Birthplace = ${birthplace} </li>
    </ul>`
    //console.log(ev)
    //debugger
}
personform.addEventListener("submit",handlesubmit)


//HW : add form values to `.details` using `document.createelement` and `appendchild` instead of innerhtml
//bonus credit = break some functionality into a seperate function