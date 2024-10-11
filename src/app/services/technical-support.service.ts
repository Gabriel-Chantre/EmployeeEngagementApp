import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TechnicalSupportService {
  getKnowledgebaseItems() {
    // Mock data, replace with actual API call
    return [
      { title: 'How to reset your password', description: 'Step-by-step guide for password reset' },
      { title: 'VPN setup instructions', description: 'Instructions for setting up VPN access' },
      { title: 'Company software installation guide', description: 'Guide for installing required software' },
      { title: 'IT security best practices', description: 'Overview of IT security guidelines' }
    ]
  }
}