import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
 // selector:'.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <h1>Hell Ya</h1>
  // <app-server></app-server>`,
 // styleUrls: ['./servers.component.css']
 styles:[`
 h1{
   color:gray;
 }
 `]

})
export class ServersComponent implements OnInit {

  allowNewServer: boolean= false;

  constructor() { 
  setTimeout((/*args*/)=>{/*func body*/
  this.allowNewServer=true;
  },(2000));//execute a fun after 2s
  }

  ngOnInit() {
  }

}
