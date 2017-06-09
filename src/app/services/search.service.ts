import { Injectable } from '@angular/core';
import { Jsonp, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ApiResponse } from '../models/api-response';

@Injectable()
export class SearchService {
	private static readonly apiUrl: URL = new URL('http://api.loklak.org/api/search.json');
	private static maximum_records_fetch = 20;
	private static minified_results = true;
	private static source = 'all';
	private static fields = 'created_at,screen_name,mentions,hashtags';
	private static limit = 10;
	private static timezoneOffset: string = new Date().getTimezoneOffset().toString();

	constructor(
		private jsonp: Jsonp
	) { }

	// TODO: make the searchParams as configureable model rather than this approach.
	public fetchQuery(query: string, lastRecord = 0): Observable<ApiResponse> {
		const searchParams = new URLSearchParams();
		searchParams.set('q', query);
		searchParams.set('callback', 'JSONP_CALLBACK');
		searchParams.set('minified', SearchService.minified_results.toString());
		searchParams.set('source', SearchService.source);
		searchParams.set('maximumRecords', SearchService.maximum_records_fetch.toString());
		searchParams.set('timezoneOffset', SearchService.timezoneOffset);
		searchParams.set('startRecord', (lastRecord + 1).toString());
		searchParams.set('fields', SearchService.fields);
		searchParams.set('limit', SearchService.limit.toString());
		return this.jsonp.get(SearchService.apiUrl.toString(), { search: searchParams })
			.map(this.extractData)
			.catch(this.handleError);

	}

	private extractData(res: Response): ApiResponse {
		try {
			return <ApiResponse>res.json();
		} catch (error) {
			console.error(error);
		}
	}

	private handleError(error: any) {
		// In some advance version we can include a remote logging of errors
		const errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // Right now we are logging to console itself
		return Observable.throw(errMsg);
	}
}
