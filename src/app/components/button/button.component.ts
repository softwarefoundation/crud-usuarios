import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() textButton: string = 'LOGIN';
  @Input() size: string = 'auto';

  constructor() {
    console.log('Componente constrído');
  }

  ngOnChanges(){
    console.log('Componente Change');
  }

  ngOnInit(){
    console.log('Componente init')
  }

  ngDoCheck(){
    console.log('Componente Check')
  }


}
