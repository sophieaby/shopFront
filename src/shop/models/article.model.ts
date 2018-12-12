import { Categorie } from './categorie.model' ;

export class Article {
    id: number ;
    title : string ;
    description : string ;
    prix : number ;
    quantite : number ;
    image : string ;
    categori : Categorie ; 
}
