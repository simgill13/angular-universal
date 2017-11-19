import {Component,OnInit} from '@angular/core';

@Component({
    selector: 'second',
    templateUrl:'./second.component.html',
    styleUrls:['../css/app.component.css']
    
})

export class SecondComponent {
    title:'second'

    constructor(){

    }

    ngOnInit(){
        console.log('hello')
    }
}