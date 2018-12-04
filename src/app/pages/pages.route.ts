import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ModeloComponent } from './modelo/modelo.component';
import { MFormularioComponent } from './modelo/formulario/formulario.component';
import { CGestionComponent } from './cotizacion/gestion/gestion.component';
import { CFormularioComponent } from './cotizacion/formulario/formulario.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: 'modelo', component: ModeloComponent },
            { path: 'modelo/:id', component: MFormularioComponent },
            { path: 'cotizacion', component: CGestionComponent },
            { path: 'cotizacion/:id', component: CFormularioComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];
export const PAGES_ROUTE = RouterModule.forChild(pagesRoutes);
