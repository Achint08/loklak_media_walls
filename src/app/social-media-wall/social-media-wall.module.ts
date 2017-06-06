import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from '@angular/material';
import { LoklakSocialMediaWallRoutingModule } from './social-media-wall-routing.module';
import { SocialMediaWallComponent } from './social-media-wall.component';
import { MediaWallCustomComponent } from './media-wall-custom/media-wall-custom.component';
import { MediaWallQueryComponent } from './media-wall-query/media-wall-query.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		LoklakSocialMediaWallRoutingModule
	],
	declarations: [
		SocialMediaWallComponent,
		MediaWallCustomComponent,
		MediaWallQueryComponent
	]
})
export class SocialMediaWallModule { }
