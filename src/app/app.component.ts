import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxInfiniteScrollComponent } from './components/ngx-infinite-scroll/ngx-infinite-scroll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxInfiniteScrollComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
