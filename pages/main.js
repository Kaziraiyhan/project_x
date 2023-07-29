// fetch('../js/users.json')
fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => load(data))


     const main = document.querySelector('.main')


      const load = (users) =>{
      for( user of users){
     const div = document.createElement('div')
        div.classList.add('item')
        
        div.innerHTML = `
       
         
         <div class="image">
         <img src="${user.thumbnailUrl}" alt="" />
       </div>
       <div class="details">
         <h2 class="name">Name: ${user.id}</h2>
         <h3 class="price">Email: ${user.title}</h3>
         <a class="add_card" href="${user.title}">add to card</a>

       </div>
         
         `
         main.appendChild(div)
      }
      };
   