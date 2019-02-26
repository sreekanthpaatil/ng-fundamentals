import { Component,OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
//import { toBase64String } from '@angular/compiler/src/output/source_map';
//import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'
declare let toastr
@Component({

    selector: 'events-list',
    template: `
    <div>
          <h1>Upcoming Angualr Events</h1>
             <hr/>
          <div class="row">
           <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail #thumbnail  [event]="event"
           ></event-thumbnail>
           </div>
         </div>
          <h3>{{thumbnail.someProperty}}</h3>

          <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
     

    </div>
     `
})
export class EventsListComponent implements OnInit {
  events:IEvent[]
  constructor(private eventService: EventService,private route:ActivatedRoute) {
    
  }

  ngOnInit(){
   // this.events = this.eventService.getEvents().subscribe( events => { this.events = events})
    
   this.events = this.route.snapshot.data['event']


  }

 /*
  handleThumbnailClick(eventName){

    this.toastr.success(eventName)
  }
  */

}