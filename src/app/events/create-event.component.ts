import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/index'

@Component({
templateUrl:'create-event.component.html',
styles:[`
    em {float:right;color:orange;padding-left:10px;}
    .error input{background-color:#E3C3C5}
    .error ::-webkit-input-placeholder { color:#999}
    .error ::-moz-placeholder { color:#999}
    .error ::ms-input-placeholder { color:#999}


  
  `]

})
export class CreateEventComponent{
    
    //event:any
    isDirty:boolean = true
    constructor(private router:Router,private eventService:EventService){

    }
    /*  ngOnInit(){
     this.event = {
       name: 'srekji',
       date: '3/4/1234',
       time:'10am',
       price:456,
       location: {
         address:'456',
         city:'rtt',
         country: 'ffkg'
       },
       onlineUrl:'http://ngspectacular.com',
       imageUrl:'http://ngspectacular.com/logo.png',
    }
  }
    */
   saveEvent(formValues){
     this.eventService.saveEvent(formValues).subscribe(() => {
     
     this.isDirty=false
     this.router.navigate(['/events'])
     });
    //console.log(formValues)
     
   }

    cancel(){
      this.router.navigate(['/events'])
    }


}