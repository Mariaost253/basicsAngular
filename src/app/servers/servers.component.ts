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
  serverCreatedStatus : string = "No server created";
  serverName: string ='';
  serverCreated: boolean = false;
  servers: string[] = [''];
  serversNum: number [] = [];

  constructor() { 
  setTimeout((/*args*/)=>{/*func body*/
  this.allowNewServer=true;
  },(2000));//execute a fun after 2s
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.serversNum.push(this.servers.length+1);
    console.log(this.servers[0]);
    this.serverCreatedStatus= this.serversNum.length + ".Was created " + this.servers[this.serversNum.length]  ;
  }
  
  onUpdateServerName(event : Event){
   this.serverName = (<HTMLInputElement>event.target).value;
  }

}
