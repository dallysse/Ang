import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {WriteArticleComponent} from './write-article/write-article.component';


const routes: Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: '', component: AcceuilComponent},
  {path: 'writeArticle', component: WriteArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
