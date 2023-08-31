document.addEventListener('DOMContentLoaded', function (){

    const div= document.getElementById("div_container");

    function clickdiv(event){
        if (event.target === div){
            alert('Hola, soy el Div.')
        }
        
    }


     div.addEventListener('click', clickdiv );
    

})