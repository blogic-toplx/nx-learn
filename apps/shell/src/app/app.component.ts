import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BlsModelsComponent } from '@dashboard-web-client/bls-models';
import { BlsConfigsComponent } from '@dashboard-web-client/bls-configs';
import { BlsConstantsComponent } from '@dashboard-web-client/bls-constants';
import { BlsStoreComponent } from '@dashboard-web-client/bls-store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BlsModelsComponent, BlsConfigsComponent, BlsConstantsComponent, BlsStoreComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
