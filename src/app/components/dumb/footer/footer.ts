import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrentYearPipe } from '@shared/pipes/current-year-pipe';

@Component({
  selector: 'app-footer-smart',
  imports: [RouterModule, CurrentYearPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterSmart {

}
