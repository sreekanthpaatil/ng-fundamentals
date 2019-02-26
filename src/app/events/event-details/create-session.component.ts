import { Component,OnInit, Output,EventEmitter } from '@angular/core'
import { FormControl,FormGroup,Validators } from '@angular/forms'
//import { leaveView } from '@angular/core/src/render3/instructions';
import { ISession,restrictedWords } from '../shared/index'
//import { EventEmitter } from 'protractor';

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles:[`
    em {float:right;color:orange;padding-left:10px;}
    .error input,.error select,.error textarea{background-color:#E3C3C5}
    .error ::-webkit-input-placeholder { color:#999}
    .error ::-moz-placeholder { color:#999}
    .error ::ms-input-placeholder { color:#999}


  
  `]

})

export class CreateSessionComponent implements OnInit{
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
   newSessionForm: FormGroup
   name: FormControl
   presenter: FormControl
   duration: FormControl
   level: FormControl
   abstract: FormControl
   
   
    ngOnInit(){
       this.name = new FormControl('',Validators.required)
       this.presenter = new FormControl('',Validators.required)
       this.duration = new FormControl('',Validators.required)
       this.level = new FormControl('',Validators.required)
       this.abstract = new FormControl('',[Validators.required,Validators.maxLength(400),restrictedWords(['foo','bar'])])

       this.newSessionForm = new FormGroup({
           name: this.name,
           presenter: this.presenter,
           duration: this.duration,
           level: this.level,
           abstract: this.abstract

       })
   }

  

   saveSession(formValues){
       //console.log(formValues)
       let session:ISession = {
           id : undefined,
           name : formValues.name,
           duration : +formValues.duration,
           level : formValues.level,
           presenter : formValues.presenter,
           abstract : formValues.abstract,
           voters : []


       }
       //console.log(session)
       this.saveNewSession.emit(session)
   }
    cancel(){
        this.cancelAddSession.emit()
    }
}