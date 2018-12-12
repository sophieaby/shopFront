import { Component, OnInit } from "@angular/core";
import { Article } from "src/shop/models/Article.model";
import { ArticleService } from "src/shop/services/article/article.service";
import { Categorie } from "src/shop/models/categorie.model";
import {Router} from '@angular/router';

@Component({
    selector: 'shop-add-article' ,
    templateUrl: 'add-article.component.html' ,
    styleUrls: ['add-article.component.css'] 
}) 

export class AddArticleComponent implements OnInit{
    article : Article ;
    category : Categorie[] ;
    constructor(private articleService : ArticleService,private router: Router){
        
    }

    ngOnInit(){
        console.log("redirection effectuéé") ;
        this.article = JSON.parse( localStorage.getItem('article')) ;
        this.category= [ 
            { id:1, nom: "ALIMENTAIRE" } ,
            { id:2, nom: "ELECTROMENAGER" } ,
            { id:3, nom: "OUTILLAGE" } 
         ] ;
    }
    onAdd(article : Article){
        localStorage.setItem('article', JSON.stringify(article) ) ;
        this.router.navigate(['/add-article']) ;
    }

}

