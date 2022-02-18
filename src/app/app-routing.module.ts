import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { InfoComponent } from './info/info.component';
import { HelpComponent } from './help/help.component';

//Os caminhos para as páginas redirecionadas pela Sidebar estão definidas dentro do componente Sidebar
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'pacientes', component: SidebarComponent},
  {path: 'info', component: SidebarComponent},
  {path: 'help', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }