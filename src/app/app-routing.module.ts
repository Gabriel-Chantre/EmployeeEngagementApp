import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { LoginComponent } from './login/login.component'
import { OnboardingComponent } from './onboarding/onboarding.component'
import { ChannelComponent } from './channel/channel.component'
import { HierarchyComponent } from './hierarchy/hierarchy.component'
import { PersonalInfoComponent } from './personal-info/personal-info.component'
import { TechnicalSupportComponent } from './technical-support/technical-support.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'channels', component: ChannelComponent },
  { path: 'hierarchy', component: HierarchyComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'technical-support', component: TechnicalSupportComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}