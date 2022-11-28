var usuarios = [
    {
        id: 1,
        nombre: "Goku",
        imagenPerfil: "assets/img/profile-pics/goku.jpg",
        correo: 'goku@unah.hn',
        contraseña:'madrid',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 1,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 2,
                productos: 3,
                unidades: 2,
            },
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 4,
                unidades: 4,
            }
        ]
    },
    {
        id: 2,
        nombre: "videl",
        imagenPerfil: "assets/img/profile-pics/videl.jpg",
        correo: 'videl@unah.hn',
        contraseña:'motagua',
        direccion: 'boulevard Centroamérica',
        numero: 99887766,
        pedidos: [
            {
                status: 1,
                category: 1,
                socios: 2,
                productos: 3,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 1,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 2,
                unidades: 1,
            }
        ]
    },
    {
        id: 3,
        nombre: "freezer",
        imagenPerfil: "assets/img/profile-pics/freezer.jpg",
        correo: 'freezer@unah.hn',
        contraseña:'olimpia',
        direccion: 'boulevard Fuerzas Armadas',
        numero: 99887766,
        pedidos: [
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 1,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 2,
                productos: 2,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 3,
                productos: 3,
                unidades: 1,
            }
        ]
    },
    {
        id: 4,
        nombre: "gohan",
        imagenPerfil: "assets/img/profile-pics/gohan.jpg",
        correo: 'gohan@unah.hn',
        contraseña:'barcelona',
        direccion: 'boulevard Morazán',
        numero: 99887766,
        pedidos: [
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 4,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 2,
                productos: 5,
                unidades: 1,
            },
            {
                status: 1,
                category: 1,
                socios: 1,
                productos: 6,
                unidades: 1,
            }
        ]
    }
];

var usuariosMotoristas = [
    {
        id: 1,
        nombre: "trunks",
        imagenPerfil: "assets/img/profile-pics/trunks.jpg",
        correo: 'trunks@unah.hn',
        contraseña:'alemania',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                status: 0,
                category: 1,
                socios: 4,
                productos: 1,
                unidades: 1,
            },
            {
                status: 0,
                category: 2,
                socios: 5,
                productos: 0,
                unidades: 2,
            },
            {
                status: 0,
                category: 3,
                socios: 5,
                productos: 0,
                unidades: 4,
            }
        ]
    },
    {
        id: 2,
        nombre: "baby",
        imagenPerfil: "assets/img/profile-pics/baby.jpg",
        correo: 'baby@unah.hn',
        contraseña:'españa',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                status: 0,
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                status: 0,
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                status: 0,
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
            }
        ]
    },
    {
        id: 3,
        nombre: "krilin",
        imagenPerfil: "assets/img/profile-pics/krilin.jpg",
        correo: 'krilin@unah.hn',
        contraseña:'suiza',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                status: 0,
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                status: 0,
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                status: 0,
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
            }
        ]
    },
    {
        id: 4,
        nombre: "androide 19",
        imagenPerfil: "assets/img/profile-pics/androide_19.jpg",
        correo: 'androide19@unah.hn',
        contraseña:'suecia',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                status: 0,
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                status: 0,
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                status: 0,
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
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
        socios: [
            {
            id: 1,
            socio: "BIGOS",
            logo: "assets/img/restaurantes/R1.jpg",
            direccion: "Mall Multiplaza",
            productos: [
                {
                    id: 1,
                    nombre: "HAMBURGUESA GIGANTE",
                    precio: 139,
                    imagen: 'assets/img/productos/bigos/B1.jpg',
                },{
                    id: 2,
                    nombre: "BURRITOS DE POLLO",
                    precio: 78,
                    imagen: 'assets/img/productos/bigos/B2.jpg',
                },{
                    id: 3,
                    nombre: "SANWITCH CUBANO",
                    precio: 184,
                    imagen: 'assets/img/productos/bigos/B3.jpg',
                },{
                    id: 4,
                    nombre: "HAMBURGUESA KRISPY",
                    precio: 109,
                    imagen: 'assets/img/productos/bigos/B4.jpg',
                },{
                    id: 5,
                    nombre: "HAMBURGUESA JALAPEÑA",
                    precio: 128,
                    imagen: 'assets/img/productos/bigos/B5.jpg',
                },{
                    id: 6,
                    nombre: "SANDWICH TEJANO",
                    precio: 199,
                    imagen: 'assets/img/productos/bigos/B6.jpg',
                }
            ]

            },
            {
                id: 2,
                socio: "BURGER KING",
                logo: "assets/img/restaurantes/R2.png",
                direccion: "Mall Multiplaza",
                productos: [
                    {
                        id: 1,
                        nombre: "PHILLY CHEESE",
                        precio: 139,
                        imagen: 'assets/img/productos/bk/BK1.png',
                    },{
                        id: 2,
                        nombre: "PHILLY CHEESE DOBLE",
                        precio: 78,
                        imagen: 'assets/img/productos/bk/BK2.png',
                    },{
                        id: 3,
                        nombre: "VEGGIE WHOPPER",
                        precio: 184,
                        imagen: 'assets/img/productos/bk/BK3.png',
                    },{
                        id: 4,
                        nombre: "RODEO BBQ",
                        precio: 109,
                        imagen: 'assets/img/productos/bk/BK4.jpg',
                    },{
                        id: 5,
                        nombre: "WHOPPER",
                        precio: 128,
                        imagen: 'assets/img/productos/bk/BK5.png',
                    },{
                        id: 6,
                        nombre: "WHOPPER DOBLE",
                        precio: 199,
                        imagen: 'assets/img/productos/bk/BK6.png',
                    }
                ]
        
            },
            {
                id: 3,
                socio: "POLLO CAMPERO",
                logo: "assets/img/restaurantes/R3.png",
                direccion: "Plaza Miraflores",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 4,
                socio: "FURIWA",
                logo: "assets/img/restaurantes/R4.png",
                direccion: "Mall La Galeria",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 5,
                socio: "PIZZA HUT",
                logo: "assets/img/restaurantes/R5.jfif",
                direccion: "City Mall",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 6,
                socio: "DENNY'S",
                logo: "assets/img/restaurantes/R6.png",
                direccion: "Mall Premier",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 7,
                socio: "EL PATIO",
                logo: "assets/img/restaurantes/R7.jfif",
                direccion: "Metrópolis",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 8,
                socio: "PUPUSAS MIRAFLORES",
                logo: "assets/img/restaurantes/R8.jpg",
                direccion: "Midence Soto",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 9,
                socio: "ALITAS KENNEDY",
                logo: "assets/img/restaurantes/R9.png",
                direccion: "Plaza Los Castaños",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
                id: 1,
                socio: "ITSMANIA",
                logo: "assets/img/restaurantes/B1.png",
                direccion: "Mall",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 2,
                socio: "GALEANO",
                logo: "assets/img/restaurantes/B2.jfif",
                direccion: "Mall",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 3,
                socio: "CIRCLE K",
                logo: "assets/img/restaurantes/B3.png",
                direccion: "Mall",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 4,
                socio: "CASA DEL RON",
                logo: "assets/img/restaurantes/B4.jpg",
                direccion: "Mall",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
            direccion: "Mall",
            productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
            direccion: "Mall",       
            productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
                direccion: "Mall",       
                productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
                direccion: "Mall",       
                productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
                direccion: "Mall",       
                productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
            direccion: "Mall",       
            productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
            direccion: "Mall",       
            productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
            direccion: "Mall",       
            productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
            direccion: "Mall",       
            productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
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
        socios: [
            {
            id: 1,
            socio: "Hermana",
            logo: "assets/img/restaurantes/",
                direccion: "Mall",       
                productos: [
                {
                    id: "Brother",
                    correcta: false,
                },{
                    id: "Mother",
                    correcta: false,
                },{
                    id: "water",
                    correcta: false,
                },{
                    id: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                socio: "Familia",
                logo: "assets/img/restaurantes/",
                direccion: "Mall",           
                productos: [
                    {
                        id: "Family",
                        correcta: true,
                    },{
                        id: "Mother",
                        correcta: false,
                    },{
                        id: "water",
                        correcta: false,
                    },{
                        id: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    }
];

var pedidosTomados =[];
var unit;
var localstorage = window.localStorage;

if(localStorage.getItem('usuarios')== null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
if(localStorage.getItem('usuariosMotoristas')== null) {
    localStorage.setItem('usuariosMotoristas', JSON.stringify(usuariosMotoristas));
}

if(localStorage.getItem('categorias')== null) {
    localStorage.setItem('categorias', JSON.stringify(categorias));
}

let usuario = JSON.parse(localstorage.getItem('usuarios'));
let producto = JSON.parse(localstorage.getItem('categorias'));

function login() {
    if (document.getElementsByClassName('origen0')[0].id!='titulo') {
        document.getElementsByClassName('origen0')[0].id='titulo';
        document.getElementsByClassName('origen1')[0].id='facetas';
    };
    document.getElementById('titulo').innerHTML= `<div>aunClick</div><div>DeliveryMen</div>`
    document.getElementById('facetas').innerHTML =
        `<div><img src="assets/img/1.png" alt="" id="imagen"></div>
        <div id="login-signup">
            <button id="login" onclick="generarUsuarios()">
                LOGIN
            </button>
            <hr>
            <div style="color: #4C33E7; font-size: 2.0rem;" onclick="registrarse()">
                REGISTRARSE
            </div>
        </div>`;
}

function generarUsuarios() {
        document.getElementsByClassName('origen1')[0].id='personas'
        document.getElementById('personas').innerHTML=null;
        document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="login()"></i></div>
            <div>aunClick-UsuariosMotor</div>
            <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
        JSON.parse(localStorage.getItem('usuariosMotoristas')).forEach(function(personaje) {
            document.getElementById('personas').innerHTML +=
                `<button class="btn" style="border-radius: 15%;" onclick="generarPedidos(${personaje.id}); console.log('id', ${personaje.id});">
                    <img src="${personaje.imagenPerfil}" id="otraFoto" style="border-radius: 15%;">
                    <div id="rubro">
                        ${personaje.nombre}    
                    </div>
                </button>`;
           });  
}

function generarPedidos(a) {
    let cont=0;
    let x=0;
        document.getElementsByClassName('origen1')[0].id='categoria'
        document.getElementById('categoria').innerHTML=null;
        document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="generarUsuarios(${a})"></i></div>
            <div>aunClick-OrdenDisp</div>
            <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
        JSON.parse(localStorage.getItem('usuarios')).forEach(function(personaje) {
            cont++;
            console.log('tamaño', personaje.pedidos.length);
            if (personaje.pedidos.length>0) {
                x++;
                document.getElementById('categoria').innerHTML +=
                `<div id="carrito">
                <button id="carrito" class="btn" style="border-radius: 20px; background-color:#9de40f;" onclick="generarPp(${a},${personaje.id-1}); console.log('id', ${personaje.id});">
                    <div style="font-size:2rem;">Orden ${x}</div>
                    <div>
                    <div style="width:170px;">
                       Cliente: ${personaje.nombre}    
                    </div>
                    <div>Ubicaciones: ${valoresLugares(personaje.id-1)}</div>
                    <div>Tiendas: ${valoresNegocios(personaje.id-1)}</div>
                    <div>Productos: ${valoresUnidades(personaje.id-1)}</div>
                    </div>
                </button>
                </div><br>`;
                
            }
            
           });  
}

function menu(a) {
    console.log('menu',a);
    if (unit==null) { unit=0;};
    if (a==undefined) {a=0};
    document.getElementsByClassName("modal-body")[0].innerHTML=
    `<div onclick="perfil(${a})" data-bs-dismiss="modal"><i class="fa-regular fa-circle-user"></i> PERFIL</div>
    <div onclick="ordenTomada(${a})" data-bs-dismiss="modal"><i class="fa-solid fa-motorcycle"></i> ordenes (${valoresUnidades(a-1)})</div>
    <div><i class="fa-regular fa-comment-dots"></i> MENSAJES</div>
    <div><i class="fa-regular fa-bell"></i> NOTIFICACIONES</div>
    <div onclick="login()" data-bs-dismiss="modal"><i class="fa-solid fa-right-from-bracket"></i> SALIR</div>`;
}
    
function generarPp(a,e) {
    document.getElementsByClassName('origen1')[0].id='categoria'
    document.getElementById('categoria').innerHTML=null;
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarPedidos(${a})"></i></div>
         <div>aunClick-Orden</div>
         <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    for (let i = 0; i < usuario[e].pedidos.length; i++) {
        if (usuario[e].pedidos[i].status==1) {
            document.getElementById('categoria').innerHTML += 
            `<div id="carrito">
                    <button class="btn" id="carrito" style="background-color: #9de40f;" onclick="tomarOrden(${a},${e},${i})">
                        <img src="${producto[usuario[e].pedidos[i].category-1].socios[usuario[e].pedidos[i].socios-1].productos[usuario[e].pedidos[i].productos-1].imagen}" style="width:100px">
                    
                    <div style="width: 170px;">
                        <div>${producto[usuario[e].pedidos[i].category-1].socios[usuario[e].pedidos[i].socios-1].socio}</div>
                        <div>${producto[usuario[e].pedidos[i].category-1].socios[usuario[e].pedidos[i].socios-1].direccion}</div>
                        <div>${producto[usuario[e].pedidos[i].category-1].socios[usuario[e].pedidos[i].socios-1].productos[usuario[e].pedidos[i].productos-1].nombre}</div>
                        <div>${usuario[e].pedidos[i].unidades} unidad(es)</div>
                    </div>
                    </button>
            </div>
            <br>`
            
        }
            
    }
    document.getElementById('categoria').innerHTML +=
    ` <div id="login-signup">
        <button id="login" onclick="ordenActiva(${a},${e}); eliminarProducto(${a},${e}); ordenTomada(${a},${e});" data-bs-toggle="modal" data-bs-target="#agregado">
            TOMAR
        </button>
        <hr>
    </div>`;
    
}

function ordenActiva(a,e) {
    console.log('ordenActiva',a);
    let otro;
    let aver=[];
    for (let i = 0; i < usuario[a-1].pedidos.length; i++) {
               otro = 
                    {
                    category: usuario[e].pedidos[i].category,
                    socios: usuario[e].pedidos[i].socios,
                    productos: usuario[e].pedidos[i].productos,
                    unidades: usuario[e].pedidos[i].unidades,
                    };
        aver.push(otro);
    }
    let amigo = {
            idM: a,
            id: e+1,
            datos: aver,
        }
    pedidosTomados.push(amigo);
    console.log('pedidos', pedidosTomados);  
    console.log('length',aver.length);  
    console.log('pedidos',pedidosTomados.length);
}

function tomarOrden(a,e,c) {
    unit=1;
    console.log('ec', e);
    console.log('ce', c);
    document.getElementById('categoria').innerHTML=null;
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarPp(${a},${e})"></i></div>
         <div>aunClick-Producto</div>
         <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    document.getElementById('categoria').innerHTML =
        `<div id="compra"><img src="assets/img/productos/bigos/bigos.jpg" style="border-radius: 15%; width:350px;">
            <br><br><br>
            <button class="btn col-6" id="botonSelect">
                    <img src="${producto[usuario[e].pedidos[c].category-1].socios[usuario[e].pedidos[c].socios-1].productos[usuario[e].pedidos[c].productos-1].imagen}" style="border-radius: 15%; width:150px; height:150px;">
                    <div id="rubro">${producto[usuario[e].pedidos[c].category-1].socios[usuario[e].pedidos[c].socios-1].productos[usuario[e].pedidos[c].productos-1].nombre}</div>      
            </button>
            <br><div id="rubro" style="font-size:2rem;">L ${producto[usuario[a].pedidos[e].category-1].socios[usuario[a].pedidos[e].socios-1].productos[usuario[a].pedidos[e].productos-1].precio}.00</div><br>
        </div>`;
}

function ordenTomada(a,e) {
    console.log('averde',a)
    let f;
    let g;
        document.getElementsByClassName('origen1')[0].id='categoria'
        document.getElementById('categoria').innerHTML=null;
        document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="generarPedidos(${a})"></i></div>
            <div>aunClick-OrdenTomada</div>
            <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
            for (let i = 0; i < pedidosTomados.length; i++) {
                f=i;
                console.log('ifor',i);
                if (pedidosTomados[i].idM==a) {
                    if (g!=a) {g=a; f=0;};
                    document.getElementById('categoria').innerHTML +=
                    `<div id="carrito">
                        <button id="carrito" class="btn" style="border-radius: 20px; background-color:#9de40f;" onclick="generarPp(${a},${pedidosTomados[i].id-1});">
                            <div style="font-size:2rem;">Orden Tomada ${f+1}</div>
                            <div>
                                <div style="width:170px;">
                                    Cliente: ${usuario[pedidosTomados[i].id-1].nombre}    
                                </div>
                                <div>Ubicaciones: ${valoresLugares(pedidosTomados[i].id-1)}</div>
                                <div>Tiendas: ${valoresNegocios(pedidosTomados[i].id-1)}</div>
                                <div>Productos: ${valoresUnidades(pedidosTomados[i].id-1)}</div>
                            </div>
                        </button>
                    </div><br>`;  
                }
            }
}

function eliminarProducto(a,e) {
    console.log('e',e);
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id==e+1) {
            usuarios[i].pedidos.splice(0);
            
        }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log('usuarios', usuarios);
    usuario = JSON.parse(localstorage.getItem('usuarios'));
    producto = JSON.parse(localstorage.getItem('categorias'));
    generarPedidos(a);
}

function generarProductos(a,b,c) {
    document.getElementById('categoria').innerHTML=null;
    //document.getElementById('personas').id='categoria';
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarAsociados(${a},${b})"></i></div>
         <div>aunClick-Prod/Serv</div>
         <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos.forEach(function(pro){
            document.getElementById('categoria').innerHTML +=
            `<button class="btn col-6" id="botonSelect" onclick="compraProducto(${a},${b},${c},${pro.id})">
                 <img src="${pro.imagen}" style="border-radius: 15%; width:130px; height:130px;">
                 <div id="rubro">${pro.nombre}
                 </div>
             </button>`;
       }); 
}

function compraProducto(a,b,c,d) {
    unit=1;
    document.getElementById('categoria').innerHTML=null;
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarProductos(${a},${b},${c})"></i></div>
         <div>aunClick-Compra</div>
         <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    document.getElementById('categoria').innerHTML =
        `<div id="compra"><img src="assets/img/productos/bigos/bigos.jpg" style="border-radius: 15%; width:350px;">
            <br><br><br>
            <button class="btn col-6" id="botonSelect">
                    <img src="${JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos[d-1].imagen}" style="border-radius: 15%; width:150px; height:150px;">
                    <div id="rubro">${JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos[d-1].nombre}</div>      
            </button>
            <br><div id="rubro" style="font-size:2rem;">L ${JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos[d-1].precio}.00</div><br>
            
            <div style="font-size:2rem; width:100%; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; align-items: center; align-content: center;" id="rubro">
                <div onclick="cantidad(0)"><i class="fa-solid fa-circle-minus"></i></div>
                <div id="num">${unit}</div>
                <div onclick="cantidad(1)"><i class="fa-solid fa-circle-plus"></i></div>
                
            </div>
            <div id="titulo3" onclick="ordenPendiente(${a},${b-1},${c-1},${d-1}); unidadesTotales(${a})" data-bs-toggle="modal" data-bs-target="#agregado">AGREGAR A ORDEN</div>
        </div>`;
}

function registrarse() {
    document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="login()"></i></div>
            <div>aunClick-REGISTRO</div>
            <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
    document.getElementById('facetas').innerHTML =
        `<div class="container">
            <div id="registro">
                    <input class="form-control" type="text" id="name" placeholder="Nombre de Usuario">
                    <input class="form-control" type="number" id="image" placeholder="Imagen perfil" min="1" max="2">
                    <input class="form-control" type="text" id="email" placeholder="Correo Electrónico">
                    <input class="form-control" type="password" id="password" placeholder="Contraseña">
                    <input class="form-control" type="text" id="address" placeholder="Dirección">
                    <input class="form-control" type="number" id="cell" placeholder="Número Celular">
            </div>
         </div>
        <div id="login-signup">
            <button id="login" onclick="guardar()">
                SIGN UP
            </button>
            <hr>
        </div>`;     
}

function guardar() {
    const user =  {
        id: JSON.parse(localstorage.getItem('usuarios')).length + 1,
        nombre: document.getElementById('name').value,
        imagenPerfil: `assets/img/profile-pics/${document.getElementById('image').value}.jpg`,
        correo: document.getElementById('email').value,
        contraseña:document.getElementById('password').value,
        direccion: document.getElementById('address').value,
        numero: document.getElementById('cell').value,
        pedidos: [],
    };
    console.log(user);
    usuarios.push(user);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log(usuarios);
    generarUsuarios();
}

function guardarE(a) {
    const user =  {
        id: JSON.parse(localstorage.getItem('usuarios'))[a-1].id,
        nombre: document.getElementById('nameE').value,
        imagenPerfil: `assets/img/profile-pics/${document.getElementById('imageE').value}.jpg`,
        correo: document.getElementById('emailE').value,
        contraseña: JSON.parse(localstorage.getItem('usuarios'))[a-1].contraseña,
        direccion: document.getElementById('addressE').value,
        numero: document.getElementById('cellE').value,
        pedidos: JSON.parse(localstorage.getItem('usuarios'))[a-1].pedidos,
    };
    for (let i = 0; i < JSON.parse(localstorage.getItem('usuarios')).length; i++) {
        if (JSON.stringify(localstorage.getItem('usuarios'))[i]==JSON.stringify(user)) {
            JSON.stringify(localstorage.getItem('usuarios'))[i]=JSON.stringify(user)
        }
    }
    console.log(user);
    usuarios.push(user);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log(usuarios);
    generarUsuarios();
}

function cantidad(valor) {
    if (valor==1) {
        unit++
    } else if(unit<2) {}
    else {
        unit--
    };
    console.log(unit); 
    document.getElementById('num').innerHTML = `${unit}`;
}

function ordenPendiente(a,b,c,d) {
  const preliminar = {
        id: a,
        categoria: b,
        socios: c,
        productos: d,
        unidades: unit,
    }     
    console.log('pre', preliminar);
    pedidosTomados.push(preliminar);
    console.log('pp', pedidosTomados);
    //localstorage.setItem('pp', JSON.stringify(pedidosTomados));
}

function perfil(a) {
    if (a!=null) {
        console.log('a', a);
    document.getElementsByClassName('origen1')[0].id='personas'
    document.getElementById('personas').innerHTML=null;
    document.getElementsByClassName('origen0')[0].id='titulo2'
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarPedidos(${a})"></i></div>
        <div>aunClick-Perfil</div>
        <div><i class="fa-solid fa-bars" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="menu()"></i></div>`
    let personaje = JSON.parse(localStorage.getItem('usuariosMotoristas'))[a-1];
        document.getElementById('personas').innerHTML =
            `<button class="btn" style="border-radius: 15%; padding-top:100px; padding-bottom:70px;">
                <img src="${personaje.imagenPerfil}" id="otraFoto" style="border-radius: 15%; width:200px">
            </button>
            <div id="perfil">
                <div>id: ${personaje.id}</div>
                <div>nombre: ${personaje.nombre}</div>
                <div>correo: ${personaje.correo}</div>
                <div>dirección: ${personaje.direccion}</div>
                <div>número Cel.: ${personaje.numero}</div>
                <div id="login-signup">
                    <button id="login" onclick="editar(${a})">
                        Editar
                    </button>
                    <hr>
                </div>
            </div>`; 
    }
    
}


function editar(a) {
    document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="perfil(${a})"></i></div>
            <div>aunClick-Perfil</div>
            <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
    document.getElementById('personas').innerHTML =
        `<div class="container">
            <div id="registro">
                    <input class="form-control" type="text" id="nameE" placeholder="Nombre de Usuario">
                    <input class="form-control" type="number" id="imageE" placeholder="Imagen perfil" min="1" max="2">
                    <input class="form-control" type="text" id="emailE" placeholder="Correo Electrónico">
                    <input class="form-control" type="text" id="addressE" placeholder="Dirección">
                    <input class="form-control" type="number" id="cellE" placeholder="Número Celular" min="8" max="8">
            </div>
         </div>
        <div id="login-signup">
            <button id="login" onclick="guardarE(${a})">
                GUARDAR
            </button>
            <hr>
        </div>`;
    
}

function carrito(a) {
    if (a!=null) {
        console.log('carritoA',a);
        let tot=0;
        let pendiente = JSON.parse(localstorage.getItem('categorias'));
        document.getElementsByClassName('origen1')[0].id='categoria'
        document.getElementById('categoria').innerHTML=null;
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="generarPp(${a})"></i></div>
            <div>aunClick-Carrito</div>
            <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
        for (let j = 0; j < pedidosTomados.length; j++) {
            if (pedidosTomados[j].id==(a)) {
                document.getElementById('categoria').innerHTML += 
                `<div id="carrito">
                    <div><img src="${pendiente[pedidosTomados[j].categoria].socios[pedidosTomados[j].socios].productos[pedidosTomados[j].productos].imagen}" style="width:100px"></div>
                    <div style="width: 170px;">
                        <div>${pendiente[pedidosTomados[j].categoria].socios[pedidosTomados[j].socios].productos[pedidosTomados[j].productos].nombre}</div>
                        <div>L${pendiente[pedidosTomados[j].categoria].socios[pedidosTomados[j].socios].productos[pedidosTomados[j].productos].precio}.00 x ${pedidosTomados[j].unidades}</div>
                        <div>TOTAL = L${multiplicar(j)}.00</div>
                    </div>
                </div>
                <br><br>`
                tot+= multiplicar(j);
            }
        }
        document.getElementById('categoria').innerHTML +=
        `<div id="carrito" style="font-size:1.5rem;">DELIVERY = L49.00</div>
        <br><br>
        <div id="carrito" style="font-size:2rem;">GRAN TOTAL = L${tot+49}.00</div>
        <div id="login-signup">
        <button id="login" onclick="tarjeta(${a})">
            COMPRAR
        </button>
        <hr>
        </div>
        <br><br> `
    }
}

function multiplicar(e) {
    let pendiente = JSON.parse(localstorage.getItem('categorias'));
    return pendiente[pedidosTomados[e].categoria].socios[pedidosTomados[e].socios].productos[pedidosTomados[e].productos].precio*pedidosTomados[e].unidades;
    
}

function unidadesTotales(a) {
    x=0;
    for (let i = 0; i < pedidosTomados.length; i++) {
        console.log('id', pedidosTomados[i].id);
        if (pedidosTomados[i].id==a) {
            x+=pedidosTomados[i].unidades;
            console.log('x', x);
        }    
    }
    console.log('pedidos', pedidosTomados.length);
    console.log('a', a);
    console.log('x', x);
    return x;
}

function tarjeta(a) {
    document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="carrito(${a})"></i></div>
            <div>aunClick-Compra</div>
            <div><i class="fa-solid fa-bars" onclick="menu(${a})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
    document.getElementById('categoria').innerHTML =
        `<div class="container">
            <div id="registro">
                    <input class="form-control" type="number" id="" placeholder="Número de Tarjeta">
                    <input class="form-control" type="number" id="" placeholder="Código de Seguridad">
                    <input class="form-control" type="text" id="" placeholder="Nombre En Tarjeta">
                    <input class="form-control" type="date" id="" placeholder="Fecha de Caducidad">
                    <input class="form-control" type="text" id="direc" placeholder="Dirección de Entrega">
            </div>
         </div>
        <div id="login-signup">
            <button id="login" onclick="direccion(${a}); completado(${a})" data-bs-toggle="modal" data-bs-target="#exito">
                PAGAR
            </button>
            <hr>
        </div>`;  
}

function direccion(a) {
    document.getElementById('exitoCompra').innerHTML =
    `PEDIDO REALIZADO <br>
    Se Entregará en la dirección: ${document.getElementById('direc').value} `;
}

function completado(a) {
    for (let j = 0; j < pedidosTomados.length; j++) {
        if (pedidosTomados[j].id==(a)) {
            pedidosTomados.splice(j);
        }
    }
    console.log('final', pedidosTomados);
}

function valoresLugares(a) {
    let arreglo=[];
    let cont2=0;
    for (let j = 0; j < usuario[a].pedidos.length; j++) {
        arreglo[j]=producto[usuario[a].pedidos[j].category-1].socios[usuario[a].pedidos[j].socios-1].direccion;
    }
    for (let i = 0; i < usuario[a].pedidos.length; i++) {
        let lugar3= producto[usuario[a].pedidos[i].category-1].socios[usuario[a].pedidos[i].socios-1].direccion;
        //console.log('lugar3', lugar3);
        for (let m = 0; m < usuario[a].pedidos.length; m++) {
            if(i!=m){
                //console.log('arreglom', arreglo[m]);
                //console.log('m', m);
                if (lugar3==arreglo[m]) {
                    cont2++;
                    //arreglo.splice(m,1);
                    delete(arreglo[m])
                    //console.log('arregloe', arreglo);
                    //console.log('cont2', cont2);
                } 
            }  
        }
        delete(arreglo[i])
    }
    return (usuario[a].pedidos.length - cont2); 
}

function valoresNegocios(a) {
    let arreglo=[];
    let cont2=0;
    for (let j = 0; j < usuario[a].pedidos.length; j++) {
        arreglo[j]=producto[usuario[a].pedidos[j].category-1].socios[usuario[a].pedidos[j].socios-1].socio;
    }
    for (let i = 0; i < usuario[a].pedidos.length; i++) {
        let lugar3= producto[usuario[a].pedidos[i].category-1].socios[usuario[a].pedidos[i].socios-1].socio;
        //console.log('lugar3', lugar3);
        for (let m = 0; m < usuario[a].pedidos.length; m++) {
            if(i!=m){
                //console.log('arreglom', arreglo[m]);
                //console.log('m', m);
                if (lugar3==arreglo[m]) {
                    cont2++;
                    delete(arreglo[m])
                    //console.log('arregloe', arreglo);
                    //console.log('cont2', cont2);
                } 
            }  
        }
        delete(arreglo[i])
    }
    return (usuario[a].pedidos.length - cont2);
}

function valoresUnidades(a) {
    let cont1=0;
    if (a>=0) {
        console.log('loco', a)
        for (let j = 0; j < (usuario[a].pedidos.length); j++) {
            //console.log('unidades',usuario[a].pedidos[j].unidades)
            cont1 += usuario[a].pedidos[j].unidades;
        }
    return cont1;   
    }
    
}