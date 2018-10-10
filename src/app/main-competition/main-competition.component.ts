import {Component, Inject, OnInit} from '@angular/core';
import {GetFootBallDataServise} from '../getFootBallData.servise';
import {Router} from '@angular/router';
import {DataIdServise} from '../dataId.servise';
import {DOCUMENT} from '@angular/common';

interface Competition {
  id: number;
  name: string;
  area: string;
}

@Component({
  selector: 'app-main-competition',
  templateUrl: './main-competition.component.html',
  styleUrls: ['./main-competition.component.css']
})
export class MainCompetitionComponent implements OnInit {
  dataCompetition = [];
  tempAll;
  tempAv;
  searchString = '';
  showUnderDiv;
  againOpen = false;
  constructor(private fbservise: GetFootBallDataServise, private rout: Router, private data: DataIdServise) { }

  choseCompetition(i: Competition) {
    this.data.setData(i);
    if (this.showUnderDiv === i) {
    this.againOpen = !this.againOpen;
    } else {
      this.againOpen = true;
    }
    this.showUnderDiv = i;
  }
  available_competitions = [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
  ngOnInit() {
    this.fbservise.getCompetition().subscribe(
      (response) => {
        console.log(response['competitions']);
        this.tempAll = response['competitions'];

        response['competitions'].forEach((item) => {
          this.available_competitions.forEach((id) => {
            if (item['id'] === id) {
              this.dataCompetition.push(item);
            }
          });
        });
        this.tempAv = this.dataCompetition;
      }
    );
  }
  loadAll() {
    this.dataCompetition = this.tempAll;
  }
  loadAv() {
    this.dataCompetition = this.tempAv;
  }

}
