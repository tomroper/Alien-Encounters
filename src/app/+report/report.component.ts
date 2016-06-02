import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/common';

import { IAlien, Encounter } from '../shared/models';
import { AlienService, Encounter Service } from '../shared/services'; 

import


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
