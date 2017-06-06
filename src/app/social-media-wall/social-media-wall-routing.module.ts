import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialMediaWallComponent } from './social-media-wall.component';

const routes: Routes = [
	{
		path: 'media',
		component: SocialMediaWallComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class LoklakSocialMediaWallRoutingModule { }
