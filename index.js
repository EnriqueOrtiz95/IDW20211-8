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

book.save(function (error) {
    if (error) {
      console.log(console.error());
      process.exit(1);
    }
    console.log("Creación exitosa");
    Book.find({}, function (error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }
      console.log("---- Consulta general 1 ----");
      console.log(docs);
      Book.update(
        {
          _id: "60916142d8ebf822e7b439b5",
        },
        {
          $set: {
            title: "Viaje al centro de la tierra",
            author: "Julio Verne"
          },
        },
        function (error, docs) {
          if (error) {
            console.log(error);
            process.exit(1);
          }
          console.log("---- Actualización ----");
          console.log(docs);
          Book.find({}, function (error, docs) {
            if (error) {
              console.log(error);
              process.exit(1);
            }
            console.log("---- Consulta general 3 ----");
            console.log(docs);
            Book.find({}, function (error, docs) {
              if (error) {
                console.log(error);
                process.exit(1);
              }
              console.log("---- Consulta general 2 ----");
              console.log(docs);
              Book.find({}, function (error, docs) {
                if (error) {
                  console.log(error);
                  process.exit(1);
                }
                console.log("---- Consulta general 3 ----");
                console.log(docs);
                Book.findByIdAndRemove(
                  { _id: "60916142d8ebf822e7b439b5" },
                  function (error, docs) {
                    if (error) {
                      console.log(error);
                      process.exit(1);
                    }
                    console.log("---- Eliminación ----");
                    console.log(docs);
                    Book.find({}, function (error, docs) {
                      if (error) {
                        console.log(error);
                        process.exit(1);
                      }
                      console.log("---- Consulta general 3 ----");
                      console.log(docs);
                      process.exit(0);
                    });
                  }
                );
              });
            });
          });
        }
      );
    });
  });

/*
book.save(function(error){
    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log('Creacion exitosa')
    //process.exit(0)
})
Book.find({}, function(error, docs) {
    if(error){
        console.log(error) 
        process.exit(1)
    }
    console.log("-------Consulta general 1--------")
    console.log(docs)
    Book.update({_id:'60900d85757bf826f276e161'},
{$set:
    {title: 'Viaje al centro de la tierra',author:'Julio Verne'}
},
function(error,docs){
    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log("-----Actualizacion-------");
    console.log(docs);
    //process.exit(0)
}
)
})


Book.findByIdAndRemove({_id: '60900d85757bf826f276e161'}, function(error,docs){
    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log('----Eliminacion------')
    console.log(docs)
    //process.exit(0)
    Book.find({}, function(error, docs) {
        if(error){
            console.log(error) 
            process.exit(1)
        }
        console.log("-------Consulta general eliminacion--------")
        console.log(docs)
        process.exit(0)
    })
})*/
