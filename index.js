const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = (form.personName.value)
    //details.textContent = personName
    // inner html allows taggs
    details.innerHTML = '<em>' + personName + '</em>'
    //form.elements gives array
    //console.log(ev)
    //debugger
}