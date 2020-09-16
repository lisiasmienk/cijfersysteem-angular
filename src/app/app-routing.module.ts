import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewLeerlingenPageComponent } from './pages/view-leerlingen-page/view-leerlingen-page.component';
import { ViewKlassenPageComponent } from './pages/view-klassen-page/view-klassen-page.component'
import { ViewVakkenPageComponent } from './pages/view-vakken-page/view-vakken-page.component';
import { ViewDocentenPageComponent } from './pages/view-docenten-page/view-docenten-page.component';
import { ViewDocentVakPageComponent} from './pages/view-docent-vak-page/view-docent-vak-page.component';
import { ViewLeerlingenVanKlasPageComponent } from './pages/view-leerlingen-van-klas-page/view-leerlingen-van-klas-page.component';
import { ViewToetsenPageComponent } from './pages/view-toetsen-page/view-toetsen-page.component';
import { ViewToetsenVanVakPageComponent } from './pages/view-toetsen-van-vak-page/view-toetsen-van-vak-page.component';
import { ViewCijfersDocentPageComponent } from './pages/view-cijfers-docent-page/view-cijfers-docent-page.component';
import { ViewKlasVakkenPageComponent } from './pages/view-klas-vakken-page/view-klas-vakken-page.component';
import { ViewKlasToetsenPageComponent } from './pages/view-klas-toetsen-page/view-klas-toetsen-page.component';
import { ViewKlasPageComponent } from './pages/view-klas-page/view-klas-page.component';
import { ViewDocentVakKlassenPageComponent } from './pages/view-docent-vak-klassen-page/view-docent-vak-klassen-page.component';
import { ViewDocentKlassenComponent } from './pages/view-docent-klassen/view-docent-klassen.component';
import { ViewDocentKlasVakkenPageComponent } from './pages/view-docent-klas-vakken-page/view-docent-klas-vakken-page.component';
import { ViewCijfersLeerlingComponent } from './pages/view-cijfers-leerling/view-cijfers-leerling.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: 'leerlingen', component: ViewLeerlingenPageComponent},
  {path: 'leerling/:leerlingid/cijfers', component: ViewCijfersLeerlingComponent},
  {path: 'klassen', component: ViewKlassenPageComponent},
  {path: 'vakken', component: ViewVakkenPageComponent},
  {path: 'docenten', component: ViewDocentenPageComponent},
  {path: 'docent/:id', component: ViewDocentVakPageComponent},
  {path: 'docent/:docentid/vakken', component: ViewDocentVakPageComponent},
  {path: 'docent/:docentid/klassen', component: ViewDocentKlassenComponent},
  {path: 'docent/:docentid/vak/:vakid/klassen', component: ViewDocentVakKlassenPageComponent},
  {path: 'klas/:klasid/leerlingen' , component: ViewLeerlingenVanKlasPageComponent},
  {path: 'toetsen', component: ViewToetsenPageComponent},
  {path: 'toetsen/:vakid', component: ViewToetsenVanVakPageComponent},
  {path: 'docent/:docentid/vak/:vakid/klas/:klasid/cijfers', component: ViewCijfersDocentPageComponent},
  {path: 'klas/:klasid/vakken', component: ViewKlasVakkenPageComponent},
  {path: 'klas/:klasid/toetsen', component: ViewKlasToetsenPageComponent},
  {path: 'klas/:klasid', component: ViewKlasPageComponent},
  {path: 'docent/:docentid/klas/:klasid/vakken', component: ViewDocentKlasVakkenPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
