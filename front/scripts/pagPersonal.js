class Activity{
    constructor(id, title, description, imgUrl){
this.id = id;
this.title = title;
this.description = description;
this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = []; 
    }

getAllActivities(){
    return this.activities;
}

createActivity(id, title, description, imgUrl) {
    const newActivity = new Activity(id, title, description, imgUrl);
    this.activities.push(newActivity);
}

deleteActivity(id) {
    for (let i = 0; i < this.activities.length; i++) {
        if (this.activities[i].id === id) {
            this.activities.splice(i, 1);
            break;
        }
    }
;}
}



const repository = new Repository();

const titulo = document.getElementById("acti");
const descripcion = document.getElementById("form-text");
const imagen = document.getElementById("url");
const bottom = document.getElementById("bottom");
let id = 1;



const cb = () => {
    
    const title = titulo.value;
    const description = descripcion.value;
    const imgUrl = imagen.value;



    if (title && description && imgUrl) {
        repository.createActivity(id++, title, description, imgUrl);
  
        console.log("ID:", id);
        console.log("Título:", title);
        console.log("Descripción:", description);
        console.log("URL de la imagen:", imgUrl);
    
        const card = document.createElement('div');
        card.classList.add('activity-card');
      
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
       
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
       
        const imageElement = document.createElement('img');
        imageElement.src = imgUrl;
        
        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
        card.appendChild(imageElement);
    
        const activityContainer = document.getElementById('activity-container');
        activityContainer.appendChild(card);
        
        titulo.value = '';
        descripcion.value = '';
        imagen.value = '';
       
    } else {
        console.error("Por favor, complete todos los campos.");
       
    }
};
bottom.addEventListener('click', cb);