import {Routes}           from '@angular/router';
import {AppComponent}     from './app/app.component';




export const appRoutes: Routes = [
    
    {path: '', component: AppComponent},
    {path: '**', component: AppComponent},
]