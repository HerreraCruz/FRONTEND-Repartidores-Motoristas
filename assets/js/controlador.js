var usuarios = [
    {
        id: 1,
        nombre: "Goku",
        imagenPerfil: "assets/img/profile-pics/goku.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    },
    {
        id: 2,
        nombre: "videl",
        imagenPerfil: "assets/img/profile-pics/videl.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    },
    {
        id: 3,
        nombre: "freezer",
        imagenPerfil: "assets/img/profile-pics/freezer.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    },
    {
        id: 4,
        nombre: "Gohan",
        imagenPerfil: "assets/img/profile-pics/gohan.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    }
];

var categorias = [
    {
        id: 1,
        nombre: "COMIDA",
        icono: "assets/img/categorias/1.jpg",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "BIGOS",
            logo: "assets/img/restaurantes/R1.jpg",
            productos: [
                {
                    nombre: "HAMBURGUESA GIGANTE",
                    precio: 139,
                    imagen: 'assets/img/productos/bigos/B1.jpg',
                },{
                    nombre: "BURRITOS DE POLLO",
                    precio: 78,
                    imagen: 'assets/img/productos/bigos/B2.jpg',
                },{
                    nombre: "SANWITCH CUBANO",
                    precio: 184,
                    imagen: 'assets/img/productos/bigos/B3.jpg',
                },{
                    nombre: "HAMBURGUESA KRISPY",
                    precio: 109,
                    imagen: 'assets/img/productos/bigos/B4.jpg',
                },{
                    nombre: "HAMBURGUESA JALAPEÑA",
                    precio: 128,
                    imagen: 'assets/img/productos/bigos/B5.jpg',
                },{
                    nombre: "SANDWICH TEJANO",
                    precio: 199,
                    imagen: 'assets/img/productos/bigos/B6.jpg',
                }
            ]

            },
            {
                id: 2,
                palabra: "BURGER KING",
                logo: "assets/img/restaurantes/R2.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 3,
                palabra: "POLLO CAMPERO",
                logo: "assets/img/restaurantes/R3.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 4,
                palabra: "FURIWA",
                logo: "assets/img/restaurantes/R4.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 5,
                palabra: "PIZZA HUT",
                logo: "assets/img/restaurantes/R5.jfif",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 6,
                palabra: "DENNY'S",
                logo: "assets/img/restaurantes/R6.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 7,
                palabra: "EL PATIO",
                logo: "assets/img/restaurantes/R7.jfif",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 8,
                palabra: "PUPUSAS MIRAFLORES",
                logo: "assets/img/restaurantes/R8.jpg",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 9,
                palabra: "ALITAS KENNEDY",
                logo: "assets/img/restaurantes/R9.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 2,
        nombre: "BEBIDA",
        icono: "assets/img/categorias/2.jpg",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 3,
        nombre: "REPOSTERÍA",
        icono: "assets/img/categorias/3.jpg",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 4,
        nombre: "CAFÉ Y TÉ",
        icono: "assets/img/categorias/4.jpg",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 5,
        nombre: "PAQUETERÍA",
        icono: "assets/img/categorias/5.webp",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 6,
        nombre: "ABARROTERÍA",
        icono: "assets/img/categorias/6.webp",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 7,
        nombre: "GIFTS",
        icono: "assets/img/categorias/7.webp",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 8,
        nombre: "FARMACIA",
        icono: "assets/img/categorias/8.webp",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 9,
        nombre: "FERRETERÍA",
        icono: "assets/img/categorias/9.webp",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 10,
        nombre: "PAPELERÍA",
        icono: "assets/img/categorias/10.jfif",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 11,
        nombre: "TECNOLOGÍA",
        icono: "assets/img/categorias/11.webp",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 12,
        nombre: "DEPORTE",
        icono: "assets/img/categorias/12.jpg",
        color: "#F27B7B",
        preguntas: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    }
];



//console.log('Usuarios', usuarios);

console.log('ver',categorias[0].preguntas);


var localstorage = window.localStorage;

if(localStorage.getItem('usuarios')== null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

if(localStorage.getItem('categorias')== null) {
    localStorage.setItem('categorias', JSON.stringify(categorias));
}
console.log('a', JSON.parse(localstorage.getItem('categorias'))[0].preguntas);
console.log('b', JSON.parse(localstorage.getItem('categorias'))[0].preguntas[0].id);

function login() {
    if (document.getElementsByClassName('origen0')[0].id!='titulo') {
        document.getElementsByClassName('origen0')[0].id='titulo';
        document.getElementsByClassName('origen1')[0].id='facetas';
    }
    document.getElementById('titulo').innerHTML= `<div>aunClick</div>`
    document.getElementById('facetas').innerHTML =
    `<div><img src="assets/img/1.png" alt="" id="imagen"></div>
    <div id="login-signup">
        <button id="login" onclick="generarUsuarios(0)">LOGIN</button>
        <hr>
        <div style="color: #4C33E7; font-size: 2.0rem;">REGISTRARSE</div>
    </div>`
}


function generarUsuarios(opcion) {
    if (opcion==0) {
        /*document.getElementById('facetas').innerHTML =
        `<h1>hola</h1>`;*/
        let i=1;
        document.getElementById('facetas').innerHTML = null;
        document.getElementById('facetas').id='personas';
        document.getElementById('titulo').id='titulo2';
        document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="login()"></i></div>
         <div>aunClick-USUARIOS</div>
         <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
        JSON.parse(localStorage.getItem('usuarios')).forEach(function(foto) {
            console.log("i", i);
            document.getElementById('personas').innerHTML +=
            `<button class="btn" style="border-radius: 15%;" onclick="generarCategorias(${i}); console.log('id', ${i});">
                <img src="${foto.imagenPerfil}" id="otraFoto" style="border-radius: 15%;">
                <div id="rubro">${foto.nombre}
                        
                </div>
            </button>`;
           i++;
           });  
    }
}


function menu() {
    document.getElementsByClassName("fa-solid fa-angle-left")[0].innerHTML=
    `<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">MENU</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div><i class="fa-regular fa-circle-user"></i> PERFIL</div>
            <div><i class="fa-solid fa-cart-shopping"></i> COMPRAS</div>
            <div><i class="fa-regular fa-comment-dots"></i> MENSAJES</div>
            <div><i class="fa-regular fa-bell"></i> NOTIFICACIONES</div>
            <div onclick="login()" data-bs-dismiss="modal"><i class="fa-solid fa-right-from-bracket"></i> SALIR</div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
        </div>
        </div>
    </div>
    </div>`;
}

function generarCategorias(iden) {
    //if(JSON.parse(localstorage.getItem('categorias'))[0].preguntas[0].id==iden) {console.log('func', JSON.parse(localstorage.getItem('categorias'))[0].preguntas[0].id);}
    document.getElementById('personas').innerHTML=null;
    document.getElementById('personas').id='categoria';
    let i=1;
    JSON.parse(localStorage.getItem('categorias')).forEach(function(rubro){
        document.getElementById('categoria').innerHTML +=
           `<button class="btn col-6" id="botonSelect" onclick="generarRestaurantes(${i})">
                <img src="${rubro.icono}" style="border-radius: 15%; width:140px; height:115px;">
                <div id="rubro">${rubro.nombre}
                </div>
            </button>`;
            i++;
       }); 
}

function generarRestaurantes(iden) {
    console.log('iden', iden);
    document.getElementById('categoria').innerHTML=null;
    let i=1;
    //document.getElementById('personas').id='categoria';
    JSON.parse(localStorage.getItem('categorias'))[iden-1].preguntas.forEach(function(ques){
        
            document.getElementById('categoria').innerHTML +=
            `<button class="btn col-6" id="botonSelect" onclick="generarProductos(${iden}, ${i})">
                 <img src="${ques.logo}" style="border-radius: 15%; width:130px; height:130px;">
                 <div id="rubro">${ques.palabra}
                 </div>
             </button>`;
            i++;
       }); 
}

function generarProductos(a,b) {
    document.getElementById('categoria').innerHTML=null;
    //document.getElementById('personas').id='categoria';
    let i=1;
    JSON.parse(localStorage.getItem('categorias'))[a-1].preguntas[b-1].productos.forEach(function(pro){
        
            document.getElementById('categoria').innerHTML +=
            `<button class="btn col-6" id="botonSelect" onclick="compraProducto(${a},${b},${i})">
                 <img src="${pro.imagen}" style="border-radius: 15%; width:130px; height:130px;">
                 <div id="rubro">${pro.nombre}
                 </div>
             </button>`;

        i++;
       }); 
}

function compraProducto(a,b,c) {
    document.getElementById('categoria').innerHTML=null;
    //document.getElementById('personas').id='categoria';
        document.getElementById('categoria').innerHTML =
        `<div id="compra"><img src="assets/img/productos/bigos/bigos.jpg" style="border-radius: 15%; width:350px;">
        <br><br><br>
        <button class="btn col-6" id="botonSelect">
                <img src="${JSON.parse(localStorage.getItem('categorias'))[a-1].preguntas[b-1].productos[c-1].imagen}" style="border-radius: 15%; width:150px; height:150px;">
                <div id="rubro">${JSON.parse(localStorage.getItem('categorias'))[a-1].preguntas[b-1].productos[c-1].nombre}
                </div>      
        </button>
        <br><div id="rubro" style="font-size:2rem;">L ${JSON.parse(localStorage.getItem('categorias'))[a-1].preguntas[b-1].productos[c-1].precio}.00</div><br>
        
        <div style="font-size:2rem; width:100%; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; align-items: center; align-content: center;" id="rubro"><div><i class="fa-solid fa-circle-plus"></i></div><div>cantidad</div><div><i class="fa-solid fa-circle-minus"></i></div></div>
        <div id="titulo3">AGREGAR A ORDEN</div>
        </div>`;
}


