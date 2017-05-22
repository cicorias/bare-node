import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { StartupService } from './startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    //constructor(private router: Router, private startup: StartupService) { }
    constructor( private startup: StartupService) { }

    ngOnInit() {

        // If there is no startup data received (maybe an error!)
        // navigate to error route
        if (!this.startup.startupData) {
            //this.router.navigate(['error'], { replaceUrl: true });
        }
    }

}
