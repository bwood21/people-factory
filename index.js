const personForm = document.querySelector('form')
let flag = 0;

function ListMaker (input,label){
  if(flag<4){
  const li = document.createElement('li')
  li.textContent = label + " " + input
  ul.appendChild(li)
  flag++
  return}
}
function renderColor(hairColor){
  const colorDiv = `<div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>`
  return colorDiv
}
const ul = document.createElement('ul')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  // const elements = document.querySelectorAll(liststore)
  // ListMaker(elements[0])
  // for(let i=0,curr; curr = elements[i++];){
  //   ListMaker(curr)
  // }

 
    
 details.appendChild(ul)
 ListMaker(personName,"Name:")
 ListMaker(hairColor,"Haircolor:")
 ListMaker(age,"Age:")
 ListMaker(birthplace,"Birthplace:")
     
  
 

//   details.innerHTML = `
//     <ul>
//       <li>Name: ${personName}</li>
//       <li>Hair Color: $renderColor(hairColor)}</li>
//       <li>Age: ${age}</li>
//       <li>Birthplace: ${birthplace}</li>
//     </ul>
//   `
 
// const ul = document.createElement('ul')
// const item = document.createElement('li')
// item.textContent = colorDiv
// ul.appendChild(item)
// details.appendChild(ul)
}

personForm.addEventListener('submit', handleSubmit)

