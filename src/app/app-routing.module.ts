import { AboutUsModule } from './about-us/about-us.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './shared/content/content.component';
import { AdminContentComponent } from './shared/admin-content/admin-content.component';
import { AuthGuardComponent } from './auth/auth-guard/auth-guard.component';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./c19checksteps/c19checksteps.module').then(m => m.C19checkstepsModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'aboutus',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
      },
      {
        path: 'health',
        loadChildren: () => import('./health/health.module').then(m => m.HealthModule)
      },
      {
        path: 'universalconcept',
        loadChildren: () => import('./universal-concept/universal-concept.module').then(m => m.UniversalConceptModule)
      },
      {
        path: 'broadcast',
        loadChildren: () => import('./broad-cast/broad-cast.module').then(m => m.BroadCastModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren:  () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: AdminContentComponent,
    canActivate: [AuthGuardComponent],
    children: [
      {
        path: '',
        loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
