import {Component, OnInit} from '@angular/core';
import {DataIdServise} from '../dataId.servise';
import {GetFootBallDataServise} from '../getFootBallData.servise';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main-match',
  templateUrl: './main-match.component.html',
  styleUrls: ['./main-match.component.css'],
  animations: [
    trigger('moveError', [
      state('start', style({
        position: 'relative',
        left: ' 0px'
      })),
      state('end', style({
          position: 'relative',
          left: '-100%'
        })),
      transition('start => end', animate(300))
    ])
  ]
})
export class MainMatchComponent implements OnInit {
  private data;
  errorMessage: {
    name: string;
    color: string;
    animation: string;
  }[] = [];
  visibleLocal = true;
  dataMatch;
  emptyError: boolean;
  constructor(private dataSer: DataIdServise, private fbservise: GetFootBallDataServise) {
    this.data = dataSer.getData();
  }
  deleteError(i) {
    i.animation = 'end';
    setTimeout(() => {
      const index = this.errorMessage.indexOf(i);
      if (index > -1) {
        this.errorMessage.splice(index, 1);
      }
    }, 300);
  }
  showLocalDb(){
    this.visibleLocal = false;
  }
  ngOnInit() {
    this.fbservise.getMatchList(this.data['id']).subscribe(
      (response) => {
        this.dataMatch = response;
      },
      (error) => {
        this.errorMessage.push({name: error['message'].toString(), color: 'red', animation: 'start'});
        this.errorMessage.push({name: 'redirect to local DB', color: 'green', animation: 'start'});
        this.emptyError = true;
        this.fbservise.getLocalMatchList().subscribe(
          (response) => {
            this.dataMatch = response;
            console.log(response);
          },
          (error1) => {
            this.errorMessage.push({name: error1['message'].toString(), color: 'red', animation: 'start'});
          }
        );

      }
    );
  }
}
