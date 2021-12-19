//récupere le panier dans localStorage s'il existe, sinon créé un tableau vide
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//déclaration des variables globales à zéro pour les prix et le nb total d'articles
let cart_total = 0;
let cart_items = 0;

//si le panier n'est pas vide
if(cart.lenght > 0){
    //cache le message d'erreur
    document.querySelector('#not-items').style.display = 'none';

    //Récupère le nombre total d'articles en comptant le nb d'élements du tableau
    cart_items = cart.lenght;

    /**boucle sur chaque élément du panier pour récupérer les prix
     * et les additionner pour avoir le prix total
     **/
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    cart_total = cart.reduce((total,item) => total + item.price * item.quantity,0);

    //Affiche le nombre total d'articles et le panier dans le DOM
    document.querySelector('#cart-items').innerHTML = `Vous avez ${cart_items} produits en panier`;
    document.querySelector('#cart-total').innerHTML = `${cart_total} euros`;

    //boucle sur chaque élement du panier pour afficher les infos dans le DOM
    cart.forEach(item => {
        //créé un nouvel élément HTML
        const cart_item = document.createElement('div');

        //ajoute une classe CSS à l'élement
        cart_item.classList.add('col-12');

        //ajoute le contenu HTML à l'élement
        cart_item.innerHTML = `
        <div class="row pt-5">
            <div class="col-1">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="col-11">
                <div>
                <h4>${item.name}</h4>
                <p>P.U. : ${item.price} euros</p>
                <input data-id="${item.id}" id="quantity" type="number" min="1" value="${item.quantity}">
                <p>Total : ${item.total} euros</p>
                <span class="remove-item btn btn-danger" dat-id="${item.id}">Supprimer</span>
            </div>
            <div>
                <i class="fas fa-chevron-up" data-id="${item.id}"></i>
                <i class="fas fa-chevron-down" data-id="${item.id}"></i>
            </div>
        </div>
    </div>
    `;

    //Ajoute l'élement au DOM
    document.querySelector('#cart-items-container').appendChild(cart_item);
    });
}

//sinon, affiche un message d'erreur
else{
    document.querySelector('#not-items').style.display = 'block'; 
}

/** 
 * modifier la quantité
*/
document.querySelectorAll('#quantity').forEach(quantity => {
    //ajoute un ecouteur d'evenement au changement de la valeur de 'input quantité
    quantity.addEventListener('click', event => {
        //recupere l'id du produit
        const id = event.target.dataset.id;

        //récupère la quantité du produit dans le panier à l'ai de l'ID produit
        const item = cart.find(item => item.id === parseInt(id));

        //si la quantité est inférieure à 1, la valeur est mise à 1
        if(event.target.value < 1 ){
            event.target.value = 1;
        }
        //sinon la valeur est mise à jour
        else{
            //Récupère la quantité du produit
            item.quantity = parseInt(event.targert.value);

            //calcule le total du produit
            item.total = item.price * item.quantity;

            //mettre à jour le total du panier en fonction du nouveau total du produit
            cart_total = cart.reduce((total,item) => total + item.price * item.quantity, 0);
        }

        //mettre à jour le total du panier dans le DOM
        localStorage.setItem('cart', JSON.stringifu(cart));

        //Recharge la page pour afficher les nvlls données
        location.reload();
    });
})

/**
 * supprimer un produit du panier
 */
document.querySelectorAll('.remove-item').forEach(button => {
    //ajoute ecouteur d'evenement au clic sur bouton de suppression
    button.addEventListener('click', event => {
        //recupere l'ID du produit
        const id = event.target.dataset.id;

        //supprime le produit du panier grace à l'ID du produit
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        cart = cart.filter(item => item.id !== parseInt(id));

        //mets à jour le panier dans le localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        //Recharge la page pour affihcer les nouvelles données
        location.reload();
    });
})