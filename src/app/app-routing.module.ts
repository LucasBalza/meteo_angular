// Import des modules nécessaires
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants depuis leurs classes dans leur fichier .ts
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Quand aucune route n'est précisée, on redirige l'utilisateur vers le dashboard
  { path: 'dashboard', component: MainComponent }, // Redirection vers la page dashboard
  { path:'form', component: FormComponent } // Redirection vers la page du formulaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
