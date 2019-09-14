import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './header/nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { SchematicTableComponent } from './schematic-table/schematic-table.component';
import { SchematicTreeComponent } from './schematic-tree/schematic-tree.component';

const routes: Routes = [
  { path: 'header/nav/', component: NavComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dragdrop', component: DragdropComponent },
  { path: 'schematic-table', component: SchematicTableComponent },
  { path: 'schematic-tree', component: SchematicTreeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
