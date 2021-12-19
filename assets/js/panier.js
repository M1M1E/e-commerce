function totalPanier(id, qte, prix){
    this.idArticle = id;
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;
    }
        this.getPrixTotal = function(){
            var result = this.prixArticle * this.qteArticle;
            return result;
        }
        this.getId = function(){
            return this.idArticle;
        }
    }


    function panier(){
        this.liste = [];
        this.ajouterArticle = function(id, qte, prix){
            var index = this.getArticle(id);
            if(index ==-1) this.liste.push(new totalPanier(id, qte, prix));
            else this.liste[index].ajouterQte(qte);
        }
        this.getPrixPanier = function() {
            var total = 0;
            for(i =0; i < this.liste.length; i++)
            total += this.liste[i].getPrixPanier();
            return total;
        }
        this.getArticle = function(code){
            for(i =0; i < this.liste.length; i++)
            if(id == this.liste[i].getCode()) return i;
            return -1;
        }
        this.supprimerArticle = function(id){
            var index = this.getArticle(id);
            if(index > -1) this.liste.splice(inde, 1);
        }
    }