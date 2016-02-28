import {Component, View} from 'angular2/core';
import {MapComponent} from './components/map/';
import {PlantDetailComponent} from './components/plant-detail/';

let getRandomElementFromArray = (a: Array<any>) => {
	return a[Math.floor(Math.random() * a.length)];
};

@Component({
	selector: 'app',
	providers: []
})
@View({
	directives: [MapComponent, PlantDetailComponent],
	template: `
		<main>
			<sprt-map class="left"></sprt-map>
			<sprt-plant-detail class="right" [plantId]="plantId"></sprt-plant-detail>
		</main>`
})

export class AppComponent {
	plantId = getRandomElementFromArray([10699, 214902, 11491]);
}
