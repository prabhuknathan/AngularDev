import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    
})
export class ServerComponent
{
    serverid:number = 10;
    serverStatus:string = 'offline';

    getServerStatus()
    {
        return this.serverStatus = 'xxxx';
    }
}