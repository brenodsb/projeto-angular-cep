import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent as HeaderComponent } from "./shared/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  [x: string]: any;

}
