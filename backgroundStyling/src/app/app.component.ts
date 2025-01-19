import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandSettingComponent } from "./brand-setting/brand-setting.component";

@Component({
  selector: 'bsa-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BrandSettingComponent]
})
export class AppComponent {
  title = 'backgroundStyling';
  theme = 'light';
}
