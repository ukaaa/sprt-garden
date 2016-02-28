import {Component, View, Input} from 'angular2/core';

@Component({
	selector: 'sprt-detail-row',
	providers: []
})
@View({
	directives: [DetailRowComponent],
	template: `
		<div *ngIf="_data">
			<label>{{title}}</label>
			<p *ngIf="_isDataString">{{_data}}</p>
			<ul *ngIf="!_isDataString">
				<li *ngFor="#item of _data">{{item}}</li>
			</ul>
		</div>
	`,
	styleUrls: ['component-style.css']
})

export class DetailRowComponent {
	private _data: any;
	private _isDataString = false;

	@Input()
	title: string;

	@Input()
	set data (value: string | Array<string>) {
		let parsedValue = value;

		if (typeof value === 'string') {
			this._isDataString = true;
		} else {
			if (value.length === 1) {
				this._isDataString = true;
				parsedValue = value[0];
			}
		}

		this._data = parsedValue;
	};

	get data () {
		return this._data;
	};
}
