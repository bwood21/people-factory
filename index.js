const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = (form.personName.value)
    //form.elements gives array

    //details.textContent = personName
    // inner html allows taggs
    //details.innerHTML = '<em>' + personName + '</em>'
   // details.innerHTML = `<em>${personName}</em>`
    
    const em = document.createElement('em')
    em.textContent = personName;
    details.appendChild(em);
    //console.log(ev)
    //debugger
}