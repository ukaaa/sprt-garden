import {Component, View, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {DetailRowComponent} from '../../components/detail-row/';
import IPlant from '../../interfaces/plant';
import {PlantsService} from '../../services/plants/';

let hexToRgb = (hex: any) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
};

let rgbToHsl = (rgb: any) => {
	let r = rgb.r / 255;
	let g = rgb.g / 255;
	let b = rgb.b / 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return {h, s, l};
};

@Component({
	selector: 'sprt-plant-detail',
	providers: []
})
@View({
	directives: [DetailRowComponent, NgClass],
	template: `
		<div class="card" *ngIf="data">
			<header [ngClass]="{'high-contrast':isHighContrast(data.color)}" [ngStyle]="{background:data.color}">
				<h2 class="serif">{{data.name}}</h2>
				<h3 *ngIf="data.commonNames && data.commonNames[0]">{{data.commonNames[0]}}</h3>
			</header>

			<section class="meta">
				<sprt-detail-row [title]="'Common names'" [data]="data.commonNames"></sprt-detail-row>
				<sprt-detail-row [title]="'Synonyms'" [data]="data.synonyms" [latin]="true"></sprt-detail-row>
				<sprt-detail-row [title]="'Details'" [data]="data.details"></sprt-detail-row>
				<img *ngIf="data.media && data.media[0]" src="{{data.media[0]}}">
			</section>
		</div>
	`,
	styleUrls: ['component-style.css']
})

export class PlantDetailComponent {
	private _plantId: number;
	public data: IPlant;

	constructor (private _plantsService: PlantsService) {}

	@Input()
	public set plantId (id: number) {
		this._plantId = id;
		this.data = undefined;

		this._plantsService
			.getPlantById(id)
			.subscribe((data: any) => {
				this.data = data;
			}, (error: any) => {
				throw error;
			});
	}

	public get plantId () {
		return this._plantId;
	}

	isHighContrast (hex: string) {
		if (!hex) {
			return false;
		}

		const rgb = hexToRgb(hex);
		const hsl = rgbToHsl(rgb);
		return hsl.l > 0.75;
	}
}
