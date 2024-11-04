import {Component, computed, input, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ttc-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ttc-calculator.component.html',
  styleUrl: './ttc-calculator.component.css'
})
export class TtcCalculatorComponent {
  price=signal<number>(0)
  quantity=signal<number>(1)
  tva=signal<number>(18)
  discount=computed<number>(()=>{
    if(this.quantity()>10 && this.quantity()<=15){
      return 0.2;
    }
    if(this.quantity()>15){
      return 0.3;
    }
    return 0;
  })
  unit_price_ttc=computed<number>(()=>(
    this.price()*(1-this.discount())*(1+this.tva()/100)
  ))
  total_price_ttc=computed<number>(()=>(
    this.unit_price_ttc()*this.quantity()
  ))

}
