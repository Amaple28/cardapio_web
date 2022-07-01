// Nav / Hamburguer
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});


// Rolagem
const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

// Loading
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

// Rolar para cima 
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});


// Array de itens do caardápio
const menu = [{
  id: 1,
  title: "Panquecas",
  category: "sobremesa",
  price: 15.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-1.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
{
  id: 2,
  title: "Hamburguer com Fritas",
  category: "comida",
  price: 18.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-2.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
{
  id: 3,
  title: "Milkshake",
  category: "sobremesa",
  price: 8.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-3.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
{
  id: 4,
  title: "Torrada",
  category: "comida",
  price: 12.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-4.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
{
  id: 5,
  title: "Egg Burguer",
  category: "hambúrguer",
  price: 13.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-5.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
{
  id: 6,
  title: "Milkshake Oreo",
  category: "sobremesa",
  price: 18.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-6.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit. `,
},
{
  id: 7,
  title: "Bacon Cheddar",
  category: "comida",
  price: 15.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-7.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
{
  id: 8,
  title: "Hamburguer da Casa",
  category: "hambúrguer",
  price: 12.99,
  img: "https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/Food%20Menu%20app/images/item-8.jpeg",
  desc: `Lorem ipsum dolor sit amet,adipiscing elit.`,
},
];

// Declarando variáveis
const menuCtn = document.querySelector('.menu-ctn')
const categoriesBtnCtn = document.querySelector('.categories-ctn');

// Ouvindo o evento DomContentLoaded
window.addEventListener('DOMContentLoaded', (event) => {
  showFoodCard(menu);
  showFoodBtns();
})

// função para adicionar a categoria btns ao DOM.
function showCategories(arr) {
  let array = arr.map(item => {
    return `
      <a href="#" class="category">${item}</a>
  `;
  })
  categoriesBtnCtn.innerHTML = array.join("");
}


//Função para mostrar os alimentos da categoria selecionada
function filterItems(foodType) {
  const menuCategory = menu.filter(item => {
    return item.category === foodType;
  })
  return menuCategory;
}

//função para mostrar todos os alimentos na página.
function showFoodCard(arr) {
  let array = arr.map(item => {
    return `
      <article class="food-item-card">
      <a href="itemSelecionado.html"> 
      <div class="food-img-ctn">
          <img src="${item.img}" alt="">
      </div>
      <div class="food-desc-ctn">
          <div class="name-and-price">
              <h2 class="name">${item.title}</h2>
              <span class="price">R$${item.price}</span>
          </div>
          <div class="desc-txt">
              ${item.desc}
          </div>
      </div>
      </a>
      </article>
  `;
  })
  menuCtn.innerHTML = array.join("");
}

// Função para criar dinamicamente os botões de categoria.
function showFoodBtns() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['todos'])

  showCategories(categories);

  const Btns = document.querySelectorAll('.category');

  // Adicionando o ouvinte de evento de clique a cada botão.
  Btns.forEach(category => {
    category.addEventListener('click', (event) => {
      const foodType = event.target.firstChild.textContent.toLowerCase();
      const filteredArray = filterItems(foodType);
      if (foodType === 'todos') {
        showFoodCard(menu);
      } else {
        showFoodCard(filteredArray)
      }
    });
  })
}
