var cardContainer=document.getElementById('card-container');  /* Capturamos un elemento del arbol DOM (que yo le voy a meter CARD a dentro), puede ser por getElement o el query */


for( var i=1; i<=19 ; i++)   /* puse i<=19 ya que segun el api store que pienso consumir tiene 10 productos */
{

    var cardDiv=document.createElement('div');  /* Cree un elemento div */
    cardDiv.className='col-md-4'; /* Clase de boostrap, para manejar las grillas de boostrap */
    
             /* A la la card que cree le ingreso  */
    cardDiv.innerHTML= `
                   <div class="card mt-5">
                   <img src="	"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"?random=${i}" class="card-img-top" alt="">
                   <div class="card-body">/
                       <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
    `;
    cardContainer.appendChild(cardDiv);

}
