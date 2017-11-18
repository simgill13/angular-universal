import {BrowserModule}      from '@angular/platform-browser';
import {NgModule}           from '@angular/core';
import {FormsModule}        from '@angular/forms';
import {HttpModule}         from '@angular/http';
import {Route, RouterModule}from '@angular/router';
import {AppComponent}       from './app/app.component';
import {appRoutes}          from './app.route'



@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing:false}
        )
    ],
    providers:[],
    bootstrap:[AppComponent]
})


export class AppModule { }