import { datosProductos } from "../service/productos.js"

const $mostrarProductos = document.querySelector("[data-mostrarProducto]");

const mostrarProductos = (nombre, precio, imgUrl, id, categoria) => {
    const anhadirLinea = document.createElement("div");
    anhadirLinea.classList.add("producto__target");
    const contenido = `
    <img class="producto__target__img" src="${imgUrl}" alt="">
    <p class="producto__target__name">${nombre}</p>
    <p class="producto__target__precio">S/ ${precio}</p>
    <a class="producto__target__ver" href="/html/producto.html?id=${id}">Ver Producto</a>
    <p class="producto__target__category">${categoria}<p>
  `;
    anhadirLinea.innerHTML = contenido;
    return anhadirLinea;
};

const categoryFunko = document.createElement("div")
categoryFunko.classList.add("category_items")
categoryFunko.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Funkos</p>
  <button id="btn_aument__funko" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__funko" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__funko" class="category__Funko category__height"></div>
`
const categoryJuegos = document.createElement("div")
categoryJuegos.classList.add("category_items")
categoryJuegos.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Juegos</p>
  <button id="btn_aument__game" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__game" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__game" class="category__Juegos category__height"></div>
`
const categoryComics = document.createElement("div")
categoryComics.classList.add("category_items")
categoryComics.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Comics</p>
  <button id="btn_aument__comic" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__comic" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__comic" class="category__Comics category__height"></div>
`
const categoryGadgets = document.createElement("div")
categoryGadgets.classList.add("category_items")
categoryGadgets.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Gadgets</p>
  <button id="btn_aument__gad" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__gad" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__gad" class="category__Gadgets category__height"></div>
`
const categoryAccesorios = document.createElement("div")
categoryAccesorios.classList.add("category_items")
categoryAccesorios.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Accesorios</p>
  <button id="btn_aument__accesorio" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__accesorio" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__accesorio" class="category__Accesorios category__height"></div>
`
const categoryPersonalizados = document.createElement("div")
categoryPersonalizados.classList.add("category_items")
categoryPersonalizados.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Personalizados</p>
  <button id="btn_aument__person" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__person" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__person" class="category__Personalizados category__height"></div>
`

const categoryOtros = document.createElement("div")
categoryOtros.classList.add("category_items")
categoryOtros.innerHTML = `
<div class="category__head"> 
  <p class="category__title">Otros</p>
  <button id="btn_aument__other" class="btn__category__aument btn_category__height">Ver todo</button>
  <button id="btn__reduce__other" class="btn__category__reduce btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category__other" class="category__Otros category__height"></div>
`
datosProductos.listaProductos().then((data) => {
  data.forEach(({ categoria, nombre, precio, imgUrl, id }) => {
    
    if ("Funko" === categoria) {
      $mostrarProductos.appendChild(categoryFunko)
      const categorySubContain = document.querySelector(".category__Funko")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)

      const btnad = document.getElementById("btn_aument__funko")
      const btnrc = document.getElementById("btn__reduce__funko")
      const rc = document.getElementById("container__category__funko")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
    if ("Juegos" === categoria) {
      $mostrarProductos.appendChild(categoryJuegos)
      const categorySubContain = document.querySelector(".category__Juegos")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)

      const btnad = document.getElementById("btn_aument__game")
      const btnrc = document.getElementById("btn__reduce__game")
      const rc = document.getElementById("container__category__game")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
    if ("Comics" === categoria) {
      $mostrarProductos.appendChild(categoryComics)
      const categorySubContain = document.querySelector(".category__Comics")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)
      const btnad = document.getElementById("btn_aument__comic")
      const btnrc = document.getElementById("btn__reduce__comic")
      const rc = document.getElementById("container__category__comic")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
    if ("Gadgets" === categoria) {
      $mostrarProductos.appendChild(categoryGadgets)
      const categorySubContain = document.querySelector(".category__Gadgets")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)

      const btnad = document.getElementById("btn_aument__gad")
      const btnrc = document.getElementById("btn__reduce__gad")
      const rc = document.getElementById("container__category__gad")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
    if ("Accesorios" === categoria) {
      $mostrarProductos.appendChild(categoryAccesorios)
      const categorySubContain = document.querySelector(".category__Accesorios")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)

      const btnad = document.getElementById("btn_aument__accesorio")
      const btnrc = document.getElementById("btn__reduce__accesorio")
      const rc = document.getElementById("container__category__accesorio")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
    if ("Personalizados" === categoria) {
      $mostrarProductos.appendChild(categoryPersonalizados)
      const categorySubContain = document.querySelector(".category__Personalizados")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)

      const btnad = document.getElementById("btn_aument__person")
      const btnrc = document.getElementById("btn__reduce__person")
      const rc = document.getElementById("container__category__person")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
    if ("Otros" === categoria) {
      $mostrarProductos.appendChild(categoryOtros)
      const categorySubContain = document.querySelector(".category__Otros")
      const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id, categoria);
      categorySubContain.appendChild(nuevaLinea)

      const btnad = document.getElementById("btn_aument__other")
      const btnrc = document.getElementById("btn__reduce__other")
      const rc = document.getElementById("container__category__other")

      btnad.addEventListener(("click"), () => {
        rc.classList.remove("category__height")
        btnrc.classList.remove("btn__ocultar")
        btnad.classList.add("btn__ocultar")
      })
      btnrc.addEventListener(("click"), () => {
        rc.classList.add("category__height")
        btnad.classList.remove("btn__ocultar")
        btnrc.classList.add("btn__ocultar")
      })
    }
  })
}).catch((error) => Swal.fire({
  title: "<span class='alertTitle'>UPS</span>",
  html: "<span class='alerttext'>Ocurrió un error al conectar con el Servidor</span>",
  icon: "error",
  iconColor: "#fd1f4a",
  background: "#2d2c2e",
  timer: 3000,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: false,
  showConfirmButton: false,
}));