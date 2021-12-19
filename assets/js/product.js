/**
 * récupère l'ID du produit
 */
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

/**
 * sélection d'un produit
 */
fetch('/tableau.json')
    .then(response => response.json())
    .then(products => {
        //recupere le produit dans le tableaugrace à l'ID passé en parametre
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const product = products.find(product => product.id === parseInt(params.id));

        //si le produit existe, afficher le produit dans le DOM ( voir le fichier HTML)
        if (product){
            //cacher le message d'erreur
            document.querySelector('#not-found').style.display = 'none';

            //nom du produit 
            document.querySelector('#procut-name').innerHTML = product.name;

            //prix
            document.querySelector('#product-price').innerHTML = product.price;

            //Description produit
            document.querySelector('#product-description').innerHTML = product.description;

            //image
            document.querySelector('#product-image').src = product.image;
            document.querySelector('#product-image').alt = product.name;
        }
        //sinon afficher un message d'erreur
        else{
            document.querySelector('#product').style.display = 'none';
            document.querySelector('#not-found').style.display = 'block';
        }
    });

    /**
     * Ajoute le produit au panier
     */
    document.querySelector('#add-to-cart').addEventListener('submit', (event) => {
        //empeche le navigateur de soumettre le formulaire
        event.preventDefault();

        //Recupere le prix du produit
        const priceValue = document.querySelector('#product-price').innerHtml;

        //recupere la quantité de produit
       const quantityValue = document.querySelector('#quantity').value;

       //Calcul le prix total du produit
       // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt
       const totalValue = parseInt(priceValue) * parseInt(quantityValue);
       //console.log(priceValue, quantityValue, totalvalue);

       //créé un objet contenant les infos du produit
       const product = {
           id: parseInt(params,id),
           name: document.querySelector('#product-name').innerHtml,
           price: priceValue,
           image: document.querySelector('#product-image').src,
           quantity: parseInt(quantityValue),
           total: totalValue
       };

       //recupere le panier dans le localStorage s'il existe,sinon crée un tableau vide
       const cart = JSON.parse(localStorage.getItem('cart')) || [];

       //recupere le produit dans le tableau correspondant à l'ID passé en parametre
       const productCart = cart.find(product => product.id === parseInt(params.id));

       //si le produit existe dans le panier, augmenter la quantité
       if(productCart) {
           productCart.quantity += parseInt(quantityValue);
           productCart.total = productCart.quantity * productCart.price;
       }
       //sinon ajouter le produit dans le panier
       else{
           cart.push(product);
       }

       //enregister le panier dans le localStorage
       localStorage.setItem('cart', JSON.stringify(cart));

       //redigerer l'utilisateur vers la page du panier
       location.href = './cart.html';
    });