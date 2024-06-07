import { Routes } from '@angular/router';
import { ListComponent } from './page/list/list.component';
import { AddComponent } from './page/add/add.component';
import { UpdateComponent } from './page/update/update.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
  {
    path: 'products/list',
    canActivate: [adminGuard],
    component: ListComponent,
  },
  {
    path: 'products/add',
    canActivate: [adminGuard],
    component: AddComponent,
  },
  {
    path: 'products/update/:id',
    canActivate: [adminGuard],
    component: UpdateComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
];
