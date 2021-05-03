var mongoose = require('mongoose')
var schema = require('./schema')

mongoose.connect('mongodb://localhost:27017/eje05')

//PARAMETROS: NOMBRE DEL MODELO, ESQUEMA, NOMBRE DE LA COLECCION
var Book = mongoose.model('Book',schema, 'Libros',)

let book = new Book({
    title: "COSMOS",
    author: "Carl Sagan",
    grade: 95,
    comments: [{
        body: "Estupendo", date: "2012-12-12"
    }],
    meta: {
        votes: 123,
        favs: 45
    }
});

book.save(function(error){
    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log('Creacion exitosa')
    process.exit(0)
})