import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent{
serverID: number=20;
serverStatus: string = 'good';

getServerStatus(){
    return this.serverStatus;
}

}