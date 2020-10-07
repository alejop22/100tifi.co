const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; 
    //location.hash. Trae el fragmento de la url a partir de donde encuentre un #. En este caso traeria #/1/
    //slice(1). Corta la url y muestra apartir del primer elemento. En este caso el resultado es /1/
    //toLocaleLowerCase(). Convierte en minuscula una cadena
    //split('/'). Separa la cadena en un array, y elimina el / quedadno espacios vacios = [' ','1',' ']
    //[1]. Trae el indice del array que hizo el split anterior, que en este caso es 1 (representa el id 1)
export default getHash;