import {Component, OnInit} from '@angular/core';
import {GetFootBallDataServise} from '../getFootBallData.servise';
import {Router} from '@angular/router';
import {DataIdServise} from '../dataId.servise';

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

  dataCompetition;
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
    //this.rout.navigate(['/match']);
  }

  ngOnInit() {
    this.fbservise.getCompetition().subscribe(
      (response) => {
        console.log(response['competitions']);
        this.dataCompetition = response['competitions'];
      }
    );
  }

}
