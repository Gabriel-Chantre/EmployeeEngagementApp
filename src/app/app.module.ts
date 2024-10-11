import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'
import { NativeScriptHttpClientModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { OnboardingComponent } from './onboarding/onboarding.component'
import { ChannelComponent } from './channel/channel.component'
import { HierarchyComponent } from './hierarchy/hierarchy.component'
import { PersonalInfoComponent } from './personal-info/personal-info.component'
import { TechnicalSupportComponent } from './technical-support/technical-support.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    OnboardingComponent,
    ChannelComponent,
    HierarchyComponent,
    PersonalInfoComponent,
    TechnicalSupportComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}