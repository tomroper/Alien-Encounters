import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { Encounter } from '../shared/models';
import { EncounterService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  providers: [EncounterService]
})
export class EncountersComponent implements OnInit {
  
  public encounters: Encounter[];

  constructor(
    private router: Router,
    private encounterService: EncounterService
  ) {}

  ngOnInit() {    
    this.encounterService.getEncounters().then( ( response => this.encounters = response) );
  }
  
  clicked(event) {
    this.router.navigate(['/report']);
  }

}
