import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/common';

import { IAlien, Encounter } from '../shared/models';
import { AlienService, EncounterService } from '../shared/services'; 




@Component({    
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers:[AlienService, EncounterService]
})
export class ReportComponent implements OnInit {
  
  public aliens: IAlien[];
  public report: Encounter;

  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {}

  ngOnInit() {
    this.report = new Encounter("","","","");
    this.alienService.getAliens().then(( result => this.aliens = result ))

  }

  onSubmit(event, form){
    
    this.encounterService.postEncounters(this.report)
                          .then( report => this.router.navigate(['/encounters']))
    
  }

}
