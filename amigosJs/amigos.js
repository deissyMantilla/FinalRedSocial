/* const boton1 = document.querySelector(".viewMore");
const dots1 = document.querySelector(".dots");
const moreText1 = document.querySelector(".more");
const boton2 = document.querySelector(".SuggViewMore");
const dots2 = document.querySelector(".dots1");
const moreText2 = document.querySelector(".more1");
boton1.addEventListener(("click"), ()=>{
    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        boton1.innerHTML = "Ver más";
        moreText1.style.display = "none";
      } else {
        dots1.style.display = "none";
        boton1.innerHTML = "Ver menos";
        moreText1.style.display = "inline";
      }
})

boton2.addEventListener(("click"), ()=>{
    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        boton2.innerHTML = "Cargar más";
        moreText2.style.display = "none";
      } else {
        dots2.style.display = "none";
        boton2.innerHTML = "Cargar menos";
        moreText2.style.display = "inline";
      }
}) */

const padre = document.querySelector(".content");
const dots1 = document.querySelector(".dots");
const moreText1 = document.querySelector(".more");
const boton1 = document.querySelector(".viewMore");
const boton2 = document.querySelector("#cargar");
const dots2 = document.querySelector(".dots1");
const moreText2 = document.querySelector(".more1");
padre.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.id == "ver") {
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      boton1.innerHTML = "Ver más";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      boton1.innerHTML = "Ver menos";
      moreText1.style.display = "inline";
    }
  }
  if (e.target.id == "cargar") {
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      boton2.innerHTML = "Cargar más";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      boton2.innerHTML = "Cargar menos";
      moreText2.style.display = "inline";
    }
  }
});

fetch("https://uinames.com/api/?amount=50")
  .then(res => res.json())
  .then(data => {
    let informacionBasica = [];
    data.forEach(function(usuario, index) {
      let name = usuario.name;
      let surname = usuario.surname;
      let gender = usuario.gender;
      console.log(informacionBasica.length + "CANTIDADDATOS");
      var datosBasicos = {
        nombre: name,
        apellido: surname,
        foto: informacionSecundaria[informacionBasica.length].img,
        descripcion:
          informacionSecundaria[informacionBasica.length].description,
        perfil: informacionSecundaria[informacionBasica.length].profile,
        id: informacionSecundaria[informacionBasica.length].id
      };

      if (gender == "female" && informacionBasica.length < 31) {
        informacionBasica.push(datosBasicos);
      }
    });
    console.log(informacionBasica);

    //let i = 1;

    for (let i = 1; i < 31; i++) {
      let nombre = document.querySelector(`#name${i}`);
      let descripcion = document.querySelector(`#desc${i}`);
      let foto = document.querySelector(`#pict${i}`);

      console.log(informacionBasica[i]);

      nombre.innerHTML = informacionBasica[i].nombre;
      console.log((nombre.innerHTML = informacionBasica[i].nombre));
      descripcion.innerHTML = informacionBasica[i].descripcion;
      /*   let imagen = informacionBasica[i].foto;
        foto.scr = imagen;  */
      foto.src = informacionBasica[i].foto;
      console.log(foto + " TEST300");

      //imagen.src = informacionSecundaria[1].img;

      //console.log(nombre.textContent);
    }
  });

// nombre.innerHTML = informacionBasica[0].nombre

let informacionSecundaria = [
  {
    id: 1,
    description: "Programadora Android",
    profile: "Apasionada por la tecnología con 6 años como líder de proyectos",
    img: "img/foto1.jpg"
  },
  {
    id: 2,
    description: "Programadora Android",
    profile: "Apasionada por la tecnología con 6 años como líder de proyectos",
    img: "img/foto2.jpg"
  },
  {
    id: 3,
    description: "Programadora iOS",
    profile: "Desarrolladora de software especializa en ciberseguridad",
    img: "img/foto3.jpg"
  },
  {
    id: 4,
    description: "Desarrolladora BackEnd",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto4.jpg"
  },
  {
    id: 5,
    description: "DBA",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto5.jpg"
  },
  {
    id: 6,
    description: "Analista Data Scients",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto6.jpg"
  },
  {
    id: 7,
    description: "DEV iOS",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto7.jpg"
  },
  {
    id: 8,
    description: "Desarrollador DevOps Junior",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto8.jpg"
  },
  {
    id: 9,
    description: "Programadora BackEnd",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto9.jpg"
  },
  {
    id: 10,
    description: "Desarrollador DevOps Senior",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto10.jpg"
  },
  {
    id: 11,
    description: "Programadora FrontEnd",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto11.jpg"
  },
  {
    id: 12,
    description: "Desarrolladora UI/UX",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto12.jpg"
  },
  {
    id: 13,
    description: "Desarrolladora Angular",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto13.jpg"
  },
  {
    id: 14,
    description: "Programadora Ruby & Rails",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto14.jpg"
  },
  {
    id: 15,
    description: "Desarrolladora Junior",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto15.jpg"
  },
  {
    id: 16,
    description: "Desarrolladora DBA",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto16.jpg"
  },
  {
    id: 17,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto17.jpg"
  },
  {
    id: 18,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto18.jpg"
  },
  {
    id: 19,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto19.jpg"
  },
  {
    id: 20,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto20.jpg"
  },
  {
    id: 21,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto21.jpg"
  },
  {
    id: 22,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto22.jpg"
  },
  {
    id: 23,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto23.jpg"
  },
  {
    id: 24,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto24.jpg"
  },
  {
    id: 25,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto25.jpg"
  },
  {
    id: 26,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto26.jpg"
  },
  {
    id: 27,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto27.jpg"
  },
  {
    id: 28,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto28.jpg"
  },
  {
    id: 29,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto29.jpg"
  },
  {
    id: 30,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto30.jpg"
  },
  ,
  {
    id: 31,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto31.jpg"
  },
  ,
  {
    id: 32,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto32.jpg"
  },
  ,
  {
    id: 33,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto33.jpg"
  },
  ,
  {
    id: 34,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto34.jpg"
  },
  ,
  {
    id: 35,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto35.jpg"
  },
  ,
  {
    id: 36,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto36.jpg"
  },
  {
    id: 37,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto37.jpg"
  },
  {
    id: 38,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto38.jpg"
  },
  {
    id: 39,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto39.jpg"
  },
  {
    id: 40,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto40.jpg"
  },

  {
    id: 41,
    description: "Programadora de soportes",
    profile: "Desarrolladora con 5 años de experiencia como líder de proyectos",
    img: "img/foto41.jpg"
  }
];
