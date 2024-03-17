import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ToolbarComponent]
})
export class AppComponent {
  title = 'meteor';
}
