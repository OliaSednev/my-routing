import { Component, OnInit } from '@angular/core';
import {ServersService} from '../../services/servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //  this.router.navigate(['/servers'], {relativeTo: this.route});
  }
}
