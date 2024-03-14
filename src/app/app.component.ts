import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostModule } from './post/post.module';
import { FormComponent } from './post/view/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-project';
}
