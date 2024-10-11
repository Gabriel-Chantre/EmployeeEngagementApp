import { Component, OnInit } from '@angular/core'
import { UserService } from '../services/user.service'

@Component({
  selector: 'ns-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  user: any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser()
  }

  saveChanges() {
    this.userService.updateUser(this.user)
    // Show success message
  }
}