import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'standingSort'
})
export class StandingSortPipe implements PipeTransform {

  transform(standings: any[], args?: any): any {
    standings.sort((a: any, b: any) => {
      if (a.points < b.points) {
        return 1;
      } else if (a.points > b.points) {
        return -1;
      } else if (a.GD < b.GD) {
        return 1;
      } else if (a.GD > b.GD) {
        return -1;
      } else {
        return 0;
      }
    });
    return standings;
  }

}
