import {Component, OnInit} from '@angular/core';
import {DataIdServise} from '../dataId.servise';
import {GetFootBallDataServise} from '../getFootBallData.servise';


@Component({
  selector: 'app-main-match',
  templateUrl: './main-match.component.html',
  styleUrls: ['./main-match.component.css']
})
export class MainMatchComponent implements OnInit {

  private data;
  dataMatch;
  emptyError = false;

  constructor(private dataSer: DataIdServise, private fbservise: GetFootBallDataServise) {
    this.data = dataSer.getData();
  }
  ngOnInit() {
    this.fbservise.getMatchList(this.data['id']).subscribe(
      (response) => {
        this.dataMatch = response['matches'];
        console.log(response);
      },
      () => {
        this.emptyError = true;
        this.fbservise.getLocalMatchList().subscribe(
          (response) => {
            this.dataMatch = response;
            console.log(response);
          }
        );
      }
    );
  }
}
