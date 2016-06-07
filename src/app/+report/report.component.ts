import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/common';

import { IAlien, Encounter, Colonist } from '../shared/models';
import { AlienService, EncounterService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers:[AlienService, EncounterService]
})
export class ReportComponent implements OnInit {

  public sessioncolonist: string;
  public aliens: IAlien[];
  public report: Encounter;
  public date: string;
  public NO_ALIEN_SELECTED: string;
  public log(report){
    console.log(report);
  }

  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {
     this.NO_ALIEN_SELECTED = "(none)";
  }

  ngOnInit() {

    this.sessioncolonist = sessionStorage.getItem('sessionColonist');

    this.date = Date().slice(0,15);

    this.report = new Encounter(this.NO_ALIEN_SELECTED, this.date, null, this.sessioncolonist);

    this.alienService.getAliens().then(( result => this.aliens = result ));
  }

  onSubmit(event, form){

    this.encounterService.postEncounters(this.report)
                          .then( report => this.router.navigate(['/encounters']))

  }

   get noAlien() : boolean {
    return this.report.atype === this.NO_ALIEN_SELECTED;
  }


}
