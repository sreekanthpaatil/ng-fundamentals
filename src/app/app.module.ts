import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {
  
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  //EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe,
  EventResolver,

} from './events/index';

import { EventsAppComponent } from './events-app.component';

import { NavBarComponent } from './nav/navbar.component';

//import { ToastrService } from './common/toastr.service';
//import { TOASTR_TOKEN,Toastr } from './common/toastr.service';
//import { TOASTR_TOKEN as TOASTR_TOKEN2 } from './common/toastr2.service';
import { JQ_TOKEN,TOASTR_TOKEN,Toastr,CollapsibleWellComponent,SimpleModalComponent,ModalTriggerDirective } from './common/index';
//import { CollapsibleWellComponent } from './common/collapsible-well.component'

import { RouterModule,ActivatedRouteSnapshot, PreloadAllModules } from '@angular/router';
import { appRoutes} from './routes';

import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//declare let toastr:Toastr

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    DurationPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules}),
    HttpClientModule
  ],
  providers: [
    
    EventService,
    //ToastrService,
    { provide: TOASTR_TOKEN,useValue: toastr},
    { provide: JQ_TOKEN,useValue: jQuery},
    //EventRouteActivator,
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    {
           provide: 'canDeactivateCreateEvent',
           useValue: checkDirtyState

    }
  
  
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
     if (component.isDirty)
     return window.confirm('you have not saved this event, do you really wants to cancel?')
     return true
  
}