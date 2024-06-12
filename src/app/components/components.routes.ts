import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { guardiaGuard } from '../core/guards/guardia.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'download', component: DownloadComponent, canActivate: [guardiaGuard] }
];
