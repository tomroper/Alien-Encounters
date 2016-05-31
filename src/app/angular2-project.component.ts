import { Component } from '@angular/core';
import { OccupationService, ColonistService, AlienService, EncounterService } from './shared/services';
import { IOccupation, Colonist, IAlien, Encounter} from './shared/models';


@Component({
  moduleId: module.id,
  selector: 'angular2-project-app',
  templateUrl: 'angular2-project.component.html',
  styleUrls: ['angular2-project.component.css'],
  providers: [OccupationService, ColonistService, AlienService, EncounterService]
})
export class Angular2ProjectAppComponent {
  
  title = 'angular2-project works! Hello Tom!';
  
  
  
  public job: IOccupation;
  public colonist: Colonist;
  public alien: IAlien;
  public encounter: Encounter;
  
  constructor(
    private occupationService: OccupationService,
    private colonistService: ColonistService,
    private alienService: AlienService,
    private encounterService: EncounterService
    ){
      
    this.colonist = new Colonist('Tom', '28', "4");
    this.encounter = new Encounter("Endomorph", "2016-05-31", "Poked Him", "555");
      
    // get jobs
    occupationService.getJobs().then(( jobs ) => {
      this.job = jobs[0];
      console.log(this.job);
    });
    //  post colonist
    colonistService.createColonist(this.colonist).then(( colonist ) => {
      console.log(colonist);
    })
    //get aliens
    alienService.getAliens().then(( aliens ) => {
      this.alien = aliens[0];
      console.log(this.alien);
    })
    // get encounter
    encounterService.getEncounters().then(( encounters ) => {
      this.encounter = encounters[0];
    })
    // post encounter
    encounterService.postEncounters(this.encounter).then(( encounter ) => {
      console.log( encounter );
      
    })
    
  }
 
}
