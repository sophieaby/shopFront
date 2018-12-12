import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/shop/services/article/article.service";
import { Article } from "src/shop/models/Article.model";
import { Router } from "@angular/router";

@Component({ 
    selector: 'shop-list-article' ,
    templateUrl: './list-article.component.html',
    styleUrls: [ './list-article.component.css' ]
 })
export class ListArticleComponent implements OnInit{
    
    articles : Article[] ;
    article: Article = new Article();
    constructor(private articleService: ArticleService, private router : Router){
        
    }  

    ngOnInit(){
        this.articleService.getAllAriticle().subscribe( 
            (data : Article[]) => {
                // console.log(data) ;
                this.articles = data ;
            } ,
            (error : any) => {
                console.log('erreur: ', error) ;
            }
         ) ;
    }

    onSupprimer(article: Article): void{
        this.articleService.onSupprimer(article)
          .subscribe( data => {
            this.articles = this.articles.filter(u => u !== article);
            alert('Article supprimé');
          });

    }

    onEditer(article : Article){
        localStorage.setItem('article', JSON.stringify(article) ) ;
        this.router.navigate(['/edit-article']) ;
    }

    
    
}