import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { UserListService, UserType } from '../../../shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  listUser = inject(UserListService);
  private route = inject(Router);

  users: Observable<UserType[]> = this.listUser.getListUser();
  displayedColumns: string[] = [
    'id',
    'sex',
    'date_birthday',
    'name',
    'last_name',
    'email',
    'addres',
    'country',
    'Deparment',
    'City',
    'comment',
  ];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.listUser.loadUsers();
    this.listUser.users$.subscribe((users) => {
      this.dataSource.data = users;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToCreate() {
    this.route.navigate(['/']);
  }
}
