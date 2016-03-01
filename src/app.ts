import {Component, View} from 'angular2/core';
import {MapComponent} from './components/map/';
import {PlantDetailComponent} from './components/plant-detail/';
import {DatePickerComponent} from './components/date-picker/';

@Component({
	selector: 'app',
	providers: []
})
@View({
	directives: [MapComponent, PlantDetailComponent, DatePickerComponent],
	template: `
		<main>
			<section class="left">
				<sprt-map [config]="mapConfig" (hover)="onMapShapeHover($event)"></sprt-map>
				<sprt-date-picker (datechange)="onDateChange($event)"></sprt-date-picker>
			</section>
			<section class="right">
				<sprt-plant-detail *ngIf="plantId" [plantId]="plantId"></sprt-plant-detail>
			</section>
		</main>`
})

export class AppComponent {
	plantId: number;
	mapConfig = '[{"id":"one","plantId":10699},{"id":"two","plantId":214902},{"id":"three","plantId":11491},{"id":"four","plantId":42883}]';

	onMapShapeHover (plantId: number) {
		this.plantId = plantId;
	}

	onDateChange (month: number) {
		// console.log('Month change to: ' + month);
	}
}
