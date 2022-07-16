// const movieInput = document.querySelector(".movie-input");
// const sumitForm = document.querySelector(".sumit-form");
// const movies = document.querySelector(".movie")
// const mvoielist = document.querySelector(".movie-list")
// sumitForm.addEventListener("submit",function(event){
//   event.preventDefault();
//   console.log( 'Movie :', movieInput.value);

//   const newDiv = document.createElement("div");
//   newDiv.classList.add("movie");

//   const Li = document.createElement("li");
//   Li.classList.add("movie-item")
//   Li.textContent = movieInput.value;
//   newDiv.appendChild(Li)

//   const trashBtn = document.createElement('button');
//   trashBtn.classList.add('delete-btn');
//   trashBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
//   newDiv.appendChild(trashBtn)

//   mvoielist.appendChild(newDiv);
 


// })
// <!-- <div class="movie">
//         <li class="movie-item">Movie Nmae</li>
//         <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
//         <button><i class="fa-solid fa-circle-check"></i></button>
//       </div> -->


const movieInput = document.querySelector(".movie-input");
const form = document.querySelector(".submit-form");
const mvoielist = document.querySelector(".movie-list");
const  movies = document.querySelector(".movie");


form.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(movieInput.value);

  const newDiv = document.createElement("div");
  newDiv.classList.add("movie");

  const li = document.createElement("li");
  li.classList.add("movie-item");
  li.textContent = movieInput.value;
  newDiv.appendChild(li);
  
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("delete-btn");
  trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  newDiv.appendChild(trashBtn)

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check-btn");
  checkBtn.innerHTML = '<i class="fa-solid fa-circle-check">';
  newDiv.appendChild(checkBtn)
  

  mvoielist.appendChild(newDiv)




})





  