console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then( res => res.json())
.then(fetchDogs)

function fetchDogs(dogs){
  dogs.message.forEach( dog => {
      let dogId = document.querySelector("#dog-image-container")
      let img = document.createElement('img')
      img.src = dog;
      img.className = "image-fluid";

      dogId.appendChild(img)
      
  });
}

//FETCH BREED
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then( res => res.json())
.then(displayDogBreed)

function displayDogBreed(bread){
    for(let breed in bread.message){
        let list = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerHTML =  breed
        list.appendChild(li)
    }
}
// function fetchDogs() {
//     // To pass the tests, don't forget to return your fetch!
//     return fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(res => res.json())
//     .then(dogsData => renderBooks(dogsData))
   
    
//   }


document.addEventListener("DOMContentLoaded", ()=> {
  let selectElements = document.querySelector('#breed-dropdown');
  if(selectElements){
      selectElements.addEventListener('change', selected)
  
  }
  
  function selected(){
    let myresult = selectElements.value;
    fetch(breedUrl)
      .then( res => res.json())
      .then(displayDogCode)
  
      function displayDogCode(bread){
          console.log(myresult)
          document.getElementById("dog-breeds").innerHTML = '';
          for(let breed in bread.message){
              if(breed.charAt(0) === myresult.charAt(0)){
                  let lists = document.getElementById('dog-breeds')
                  let lis = document.createElement('li')
                  lis.innerHTML =  breed
                  console.log(breed)
                  lists.appendChild(lis)
              }
              
          }
      }
  }
})


 