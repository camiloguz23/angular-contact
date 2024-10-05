import { Component } from '@angular/core';
import { PhonePipe } from '../../../../../shared';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ui-data-contact',
  standalone: true,
  imports: [PhonePipe, MatIconModule, FontAwesomeModule],
  templateUrl: './ui-data-contact.component.html',
  styleUrl: './ui-data-contact.component.css',
})
export class UiDataContactComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
}
