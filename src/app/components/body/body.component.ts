import { Component } from '@angular/core'

@Component ({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent{

  show = true;
  frase: any = {
    message: 'Tenemos que fabricar máquinas que nos permitan seguir fabricando máquinas, porque lo que no van a hacer nunca las máquinas es fabricar máquinas a su vez',
    author: 'M. Rajoy'
  };
  characters: string[] = ['Máquinas', 'Personas', 'Alcalde', 'Vecino']
}