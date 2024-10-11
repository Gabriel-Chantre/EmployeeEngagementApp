import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: any

  constructor() {
    // Mock user data, replace with actual user data retrieval
    this.currentUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      photoUrl: 'https://example.com/john-doe-photo.jpg',
      certifications: ['Project Management', 'Agile Scrum Master'],
      skills: ['JavaScript', 'Angular', 'NativeScript']
    }
  }

  getCurrentUser() {
    return this.currentUser
  }

  updateUser(userData: any) {
    // Update user data, replace with actual API call
    this.currentUser = { ...this.currentUser, ...userData }
    console.log('User data updated:', this.currentUser)
  }
}