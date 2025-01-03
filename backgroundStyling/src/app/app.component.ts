import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPickerComponent } from "./color-picker/color-picker.component";

@Component({
  selector: 'bsa-root',
  imports: [RouterOutlet, ColorPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'backgroundStyling';
}
