import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './Servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No Server has been created!";
  serverName = "";

  constructor()
  {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created!"
  }

  onUpdateServerControl(event: Event)
  {
this.serverName = (<HTMLInputElement>event.target).value;
  }
}
