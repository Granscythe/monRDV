import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statutCategori'
})
export class StatutCatePipe implements PipeTransform {

  transform(statut:string): string {
    if(statut=='ANNULER'){
      return 'red';
    }else {
      return 'BLUE';
    }
  }

}
