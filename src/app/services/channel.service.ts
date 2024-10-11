import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  getChannels() {
    // Mock data, replace with actual API call
    return [
      { name: 'General', description: 'Company-wide announcements and work-based matters' },
      { name: 'Marketing', description: 'Marketing team discussions' },
      { name: 'Engineering', description: 'Engineering team discussions' },
      { name: 'HR', description: 'Human Resources team discussions' }
    ]
  }
}