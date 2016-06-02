import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { Colonist, IOccupation } from '../shared/models';
import { ColonistService, OccupationService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [ColonistService, OccupationService]
})
export class RegisterComponent implements OnInit {
  
  public NO_OCCUPATION_SELECTED: string;
  public occupations: IOccupation[];
  public colonist: Colonist;
  public log(colonist){
    console.log(colonist);
  }
  
  constructor(
    private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService
  ) {
   this.NO_OCCUPATION_SELECTED = "(none)";
  }

  ngOnInit() {
    this.colonist = new Colonist(null, null, this.NO_OCCUPATION_SELECTED);
    this.occupationService.getJobs().then( ( response => this.occupations = response ));
    }
    
  onSubmit(event, form){
    
    this.colonistService.createColonist(this.colonist)
                        .then( colonist => this.router.navigate(['/encounters']))
    
  }
  
  get noOccupation() : boolean {
    return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  }
  
  
  
}