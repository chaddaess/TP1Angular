import { Component } from '@angular/core';
import {ColorTextDirective} from "../../../directives/change-color/color-text.directive";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-magic-text',
  standalone: true,
  imports: [
    ColorTextDirective,
    FormsModule
  ],
  templateUrl: './magic-text.component.html',
  styleUrl: './magic-text.component.css'
})
export class MagicTextComponent {
  text=""

}
