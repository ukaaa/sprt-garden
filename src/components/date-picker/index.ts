import {Component, View, Output, Input, EventEmitter} from 'angular2/core';

@Component({
	selector: 'sprt-date-picker',
	providers: []
})
@View({
	directives: [],
	template: `
	<select *ngIf="month" [(ngModel)]="month" (change)="onChange($event)">
		<option *ngFor="#month of months" [value]="month.sequence">{{month.name}}</option>
	</select>
	`,
	styleUrls: ['component-style.css']
})

export class DatePickerComponent {
	@Input()
	public month: number = (new Date()).getMonth() + 1;

	months = [
		{sequence: 1, name: 'January'},
		{sequence: 2, name: 'February'},
		{sequence: 3, name: 'March'},
		{sequence: 4, name: 'April'},
		{sequence: 5, name: 'May'},
		{sequence: 6, name: 'June'},
		{sequence: 7, name: 'July'},
		{sequence: 8, name: 'August'},
		{sequence: 9, name: 'September'},
		{sequence: 10, name: 'October'},
		{sequence: 11, name: 'November'},
		{sequence: 12, name: 'December'}
	];

	@Output()
	datechange = new EventEmitter();

	onChange (e: any) {
		this.datechange.emit(this.month);
	}
}
