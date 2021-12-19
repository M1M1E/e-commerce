/******************
 *   Menu burger
 ******************/

document.querySelector(".burger").addEventListener('click', function(){
    document.querySelector("ul").classList.toggle("hidden");
});



// /*******************
//  *      Carrousel
//  *******************/

// let images = ['../../assets/images/bleu-chine.png' , '../../assets/images/sac-bleu.png', '../../assets/images/bleu-chine.png', '../images/fleurs.png'];

// let pointeur = 0;

// let timer ;

// let img = document.querySelector('.sacCarrousel');
// img.addEventListener('mouseout', startCarrousel);
// img.addEventListener('mouseover', stopCarrousel);

// startCarrouse();


// function stopCarrousel(){
//     clearInterval(timer);
// }


//     function startCarrousel() {
//         timer = setInterval(NEXT,2500);
//     }


// function NEXT(){
//     if(pointeur === images.lentgh -1){
//         pointeur = 0;
//     } 
//     else{
//         pointeur ++ ;
//     }

//     document.querySelector('.sacCarrousel').setAttribute('src', images[pointeur]);
// }


//     function BEFORE(){
//         if(pointeur  === 0){
//             pointeur = images.lentgh -1;
//         }
//         else{
//             pointeur --;
//         }
//         document.querySelector('.sacCarrousel').setAttribute('src', images[pointeur]);
//     }


// function totalPanier(id, qte, prix){
//     this.idArticle = id;
//     this.qteArticle = qte;
//     this.prixArticle = prix;
//     this.ajouterQte = function(qte)
//     {
//         this.qteArticle += qte;
//     }
//         this.getPrixTotal = function(){
//             var result = this.prixArticle * this.qteArticle;
//             return result;
//         }
//         this.getId = function(){
//             return this.idArticle;
//         }
//     }


//     function panier(){
//         this.liste = [];
//         this.ajouterArticle = function(id, qte, prix){
//             var index = this.getArticle(id);
//             if(index ==-1) this.liste.push(new totalPanier(id, qte, prix));
//             else this.liste[index].ajouterQte(qte);
//         }
//         this.getPrixPanier = function() {
//             var total = 0;
//             for(i =0; i < this.liste.length; i++)
//             total += this.liste[i].getPrixPanier();
//             return total;
//         }
//         this.getArticle = function(id){
//             for(i =0; i < this.liste.length; i++)
//             if(id == this.liste[i].getId()) return i;
//             return -1;
//         }
//     }


//     function ajouter(){
//         var id = parseInt(document.getElementById)
//     }