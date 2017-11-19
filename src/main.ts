import {enableProdMode}         from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule}              from './app.module'
import './polyfills'


// if(process.env.NODE.ENV === 'production'){
//     enableProdMode()
// }

platformBrowserDynamic().bootstrapModule(AppModule)

