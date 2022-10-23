/* 

Name: Wayne Barnett
Role: Founder & CEO
Image: wayne - barnett - founder - ceo.jpg
___________________________________
Name: Angela
Role: Chief Editor
Image: angela - caroll - chief - editor.jpg
____________________________________
Name: Waleter gordon
Role: Chief Editor
Image: walter - gordon - office - manager.jpg
____________________________________
Name: Waleter gordon
Role: Social Media Manager
Image: angela - lopez - social - media - manager.jpg
_________________________________
Name: Scott Estrada
Role: Developer
Image: scott - estrada - developer.jpg
_________________________________
Name: Barbara Ramos
Role: Grafic designer
Image: barbara - ramos - graphic - designer.jpg


*/


const team = [{
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Waleter gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manage",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Grafic designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
]

//console.log(team);
//const ulElement = document.querySelector('ul')
/* 
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  console.log(member.name, member.role, member.image);
  const liElement = `<li>${member.name} - ${member.role} - <img src="./assets/img/${member.image}"> </li>`
  ulElement.insertAdjacentHTML('beforeend', liElement)
} */

const rowElement = document.querySelector('.row')
for (let i = 0; i < team.length; i++) {
  const member = team[i];

  const colEl = generateColElement(member.image, member.name, member.role)
  rowElement.insertAdjacentHTML('beforeend', colEl)

}


function generateColElement(image, name, role) {
  return `<div class="col">
          <div class="card">
            <img src="${imagePath(image)}" class="card-img-top">
            <div class="card-body">
              <h3>
                ${name}
              </h3>
              <p>${role}</p>
            </div>
          </div>
        </div>`
}

function imagePath(image_url) {
  return `./assets/img/${image_url}`
}
