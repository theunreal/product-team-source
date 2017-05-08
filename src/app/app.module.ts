import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Additional required modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdDialogModule} from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { ProductMembersComponent } from './product-members/product-members.component';
import { MemberComponent } from './member/member.component';
import { ViewMemberComponent } from './view-member/view-member.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductMembersComponent,
    MemberComponent,
    ViewMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ViewMemberComponent
  ]
})
export class AppModule { }
