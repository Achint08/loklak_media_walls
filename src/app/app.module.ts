import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


import { LoklakAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';

@NgModule({
	declarations: [
		/**
		 * The `<app-root>` component of the application which gets Bootstrapped.
		 * It is the top level component which `Angular` controls.
		 */
		AppComponent
	],
	imports: [
		/**
		 * `BrowserModule` registers critical application service providers.
		 * It also includes common directives like `NgIf` and `NgFor` which become immediately
		 * visible and usable in any of this modules component templates.
		 */
		BrowserModule,

		/**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
		 *
		 * The time travel debugging is pretty handy tool but it makes the application slow.
		 * So the developer who need this can un-comment the line below.
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
		StoreDevtoolsModule.instrumentOnlyWithExtension(),

		/**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
		 * Must be called multiple times for each effect class you want to run.
		 *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */

		/**
		 * Defines the routes at `root` level of the application.
		 */
		LoklakAppRoutingModule,

		/**
		 * Module responsible for `Home Page` of the Application.
		 */


		/**
		 * Module responsible for `Feed Page` of the Application.
		 * Comprises of `SearchHeader` and `FeedSearchResults`.
		 */


		/**
		 * Module defines the `About Page` of the Loklak Project.
		 */

		/**
		 * Module defines the `ContactUs Page` of the FossAsia Team.
		 */


		/**
		 * Module defines the `TermsAndServices Page` for the Loklak Project.
		 */


		/**
		/* Module defines the '404 Not found Page' for the Loklak Project.
		*/

		PageNotFoundModule
	],
	providers: [
		/**
		 * Angular bridges the gap by providing a `Title` service as part of the `Browser platform`.
		 * The Title service is a simple class that provides an API for
		 * `getting` and `setting` the current HTML document title.
		 */
		Title,

		/**
		 * The major service used for making queries to the `Backend Lokalak Server`.
		 */
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
