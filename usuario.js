class Usuario {
    constructor(nombre, apellido, nombreUsuario, tipo) {
        this.id = parseInt(Math.random() * 100000)
        this.nombre = nombre
        this.apellido = apellido
        this.nombreUsuario = nombreUsuario
        this.tipo = tipo
        //this.biblioteca = []
        //this.promociones = CODIGOSPROMO
    }
}