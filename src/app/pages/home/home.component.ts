import { UserListService } from './../../../shared/services/user-list.service';
import { Component, inject, OnInit } from '@angular/core';
import { UiFormComponent } from './components/ui-form/ui-form.component';
import { UiDataContactComponent } from './components/ui-data-contact/ui-data-contact.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UiFormComponent, UiDataContactComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private useList = inject(UserListService);
  list: { value: string; name: string }[] = [
    { value: '1', name: 'One' },
    { value: '2', name: 'Two' },
    { value: '3', name: 'Three' },
    { value: '4', name: 'Four' },
  ];

  ngOnInit() {
    this.useList.loadUsers();
  }
}
