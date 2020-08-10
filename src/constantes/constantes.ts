export const Constantes = {
    logoCliente: './assets/imagenes/logocliente.png',
    regex: {
        patternMail: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
    },
    menuCorriente: [
        {
            seccion: 'entrada',
            titulo: 'ELIGE TU ENTRADA',
            opciones : [
                {
                    id: 1,
                    nombre: 'SOPA DE PLATANO'
                },

                {
                    id: 2,
                    nombre: 'PETO'
                },

                {
                    id: 3,
                    nombre: 'FRUTA'
                }
            ],

        },

        {
            seccion: 'principio',
            titulo: 'ELIGE TU PRINCIPIO',
            opciones : [
                {
                    id: 1,
                    nombre: 'FRIJOL'
                },

                {
                    id: 2,
                    nombre: 'ESPAGUETTI',
                },

                {
                    id: 3,
                    nombre: 'POTECA AHUYAMA',
                }
            ],

        },

        {
            seccion: 'proteina',
            titulo: 'ELIGE TU PROTEINA',
            opciones : [
                {
                    id: 1,
                    nombre: 'ALBONDIGAS',
                },

                {
                    id: 2,
                    nombre: 'CERDO EN SALSA BBQ',
                },

                {
                    id: 3,
                    nombre: 'POLLO AL HORNO',
                }
            ],

        },
        {
            seccion: 'bebida',
            titulo: 'ELIGE TU BEBIDA',
            opciones : [
                {
                    id: 1,
                    nombre: 'JUGO DE MORA',
                },

                {
                    id: 2,
                    nombre: 'LIMONADA',
                }
            ],

        }
    ],
    costo: {
        valor: 8000,
        domicilio: 0
    }
};