import {Component, View, Input} from 'angular2/core';

@Component({
	selector: 'sprt-detail-row',
	providers: []
})
@View({
	directives: [DetailRowComponent],
	template: `
		<div *ngIf="_data && _data.length">
			<label>{{title}}</label>
			<p *ngIf="_isDataString" [innerHTML]="style(_data)"></p>
			<ul *ngIf="!_isDataString">
				<li *ngFor="#item of _data" [innerHTML]="style(item)"></li>
			</ul>
		</div>
	`,
	styleUrls: ['component-style.css']
})

export class DetailRowComponent {
	private _data: any;
	private _isDataString = false;

	@Input()
	latin: boolean;

	@Input()
	title: string;

	@Input()
	set data (value: string | Array<string>) {
		this._isDataString = typeof value === 'string';
		this._data = value;
	};

	get data () {
		return this._data;
	};

	style (text: string) {
		if (this.latin) {
			return '<span style="font-style:italic">' + text + '</span>';
		}

		return text;
	}
}
