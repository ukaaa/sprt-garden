import {Component, View} from 'angular2/core';
import {MapComponent} from './components/map/';
import {PlantDetailComponent} from './components/plant-detail/';

@Component({
	selector: 'app',
	providers: []
})
@View({
	directives: [MapComponent, PlantDetailComponent],
	template: `
		<main>
			<section class="left">
				<sprt-map [config]="mapConfig" (hover)="onShapeHover($event)"></sprt-map>
			</section>
			<section class="right">
				<sprt-plant-detail *ngIf="plantId" [plantId]="plantId"></sprt-plant-detail>
			</section>
		</main>`
})

export class AppComponent {
	plantId: number;
	mapConfig = '[{"id":"one","plantId":10699},{"id":"two","plantId":214902},{"id":"three","plantId":11491},{"id":"four","plantId":42883}]';

	onShapeHover (plantId: any) {
		this.plantId = plantId;
	}
}
