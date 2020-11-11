/* A continuación procederemos a realizar consultas en la colección 
ciudades. Estas consultas contendrán diferentes tipos de operadores
y caracteres especiales, los cuales irán acompañados del operador $regex
 y otros vistos anteriormente*/

 /*El campo habitantes acabara por la combinacion de numeros "23"*/
 db.ciudades.find( { habitantes: {$regex: /^43/ } } )

 /*En este caso  buscaremos aquellas ciudades que empiezen por el caracter L*/
 db.ciudades.find( { nombre: {$regex: /^L/} } )

 /*Si tenemos nombres de ciudades que están escritos en minusculas
  tendremos que habilitar la opción "i", de esta manera podremos 
  buscar ciudades cuya primera letra sea L minuscula*/
  db.ciudades.find( { nombre: {$regex: /^L/i} } )

  /*Si queremos buscar en el campo Pais aquellos que contengan la letra "a"
  independientemente de que sea mayuscula o minuscula tendremos lanzar la siguiente
  consulta*/
  db.ciudades.find( { pais: {$regex: /A/i} } )

  /*Si lo que quremos es hacer una consulta en la que apararezcan los documentos de ciudades
  cuya cantidad de habitantes de la ciudad empieze por 1 y acabe por 1 tendremos que ejecutar la siguiente
  consulta*/
  db.ciudades.find( { habitantes: { $regex: /1*1/ } } )

  /*En el caso de que quisieramos hacer la misma consulta anterior pero qusieramos que el
  numero de habitantes sea mayor a 13431 tendriamos que lanzar la siguiente consulta*/
db.ciudades.find( { $and: [{ habitantes: { $gt: 13431 }}, { habitantes: { $regex: /1*1/ }}]} )

/*Si lo que queremos es buscar una ciudad que empieze por "y el segundo caracter sea uno cualquiera el procedimiento
a seguir sera el siguiente, ademas usaremos la opción i para no diferenciar entre mayuscula y minuscula */
db.ciudades.find({ nombre: {$regex: /^M./i}})

/*Para realizar una consulta en la que queramos buscar una ciudad que sea igual a 250km de ancho y su nombre
acabe por "a" tendremos que ejecutar la siguiente consulta*/
db.ciudades.find( { $and: [{ "extension.w": { $eq: 250 }}, { nombre: { $regex: /$a/ }}]} )

/*Si queremos hacer esta misma consulta anterior pero deseamos que la extension sea diferentes de 250 la consulta quedará así  */
db.ciudades.find( { $and: [{ "extension.w": { $ne: 250 }}, { nombre: { $regex: /$a/ }}]} )

/*Si queremos hacer una consulta igual a la anterior pero deseamos que en la cadena numerica de extension no contenga un 5 tendremos que ejecutar lo siguiente*/
db.ciudades.find( { $and: [{ "extension.w": { $nin: 5 }}, { nombre: { $regex: /$a/ }}]})

/*Para realizar una consulta que muestre una ciudad que empieze con L y acabe con l tendremos que ejecutar lo siguiente*/
db.ciudades.find( { $and: [{ nombre: { $regex: /^L/ }}, { nombre: { $regex: /$l/ }}]})

/*En este caso haremos una consulta que seleccione los documentos cuyos ciudades sean o londres o Madrid*/
db.ciudades.find( { $or: [{nombre: "Madrid" }, {nombre: "Londres"} ] } )

