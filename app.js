let pokemon = [];

let favoritos = JSON.parse(localStorage.getItem('favoritos'));

function saveFavorite(){

    if(pokemon != undefined){
        if(favoritos == null){
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        }else{
            //agregar favorito
            favorito = buscarFavorito(id);
            if(favorito == null){
                favoritos.push(objeto);        
            }
        }
    }

    updateFavoriteList();
}   

function buscarFavorito(id){
    let favoritoEncontrado = null;
    if(favoritos != null){
        for (let favorito of favoritos){
            if(favorito.id === id){
                favoritoEncontrado = favorito;
            }
        }
    }
     return favoritoEncontrado;       
}




















