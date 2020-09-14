import { Component, OnInit, Input} from '@angular/core';
import {faEnvelope,faMapMarkedAlt,faPhone,faDatabase,faCalendar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() 
  user;

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  faCalendar = faCalendar;
  constructor() { }

  ngOnInit(): void {
  }

}
