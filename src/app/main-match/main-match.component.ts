import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataIdServise} from '../dataId.servise';
import {GetFootBallDataServise} from '../getFootBallData.servise';

@Component({
  selector: 'app-main-match',
  templateUrl: './main-match.component.html',
  styleUrls: ['./main-match.component.css']
})
export class MainMatchComponent implements OnInit {

  private data;
  errorMessage: string;
  dataMatch;
  constructor(private dataSer: DataIdServise, private fbservise: GetFootBallDataServise) {
    this.data = dataSer.getData();
  }

  ngOnInit() {
    this.fbservise.getMatchList(this.data['id']).subscribe(
      (response) => {
        this.dataMatch = response;
      },
      (error) => {
      this.errorMessage = error['message'] + ' -> redirect to local DB ';

        this.fbservise.getLocalMatchList().subscribe(
          (response) => {
            this.dataMatch = response;
            console.log(response);
          },
          (error1) => {
            this.errorMessage += '-> ' + error1['message'];
          }
        );

      }
    );
  }

}
