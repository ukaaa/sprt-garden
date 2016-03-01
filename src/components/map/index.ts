import {Component, View, Input, Output, ElementRef, EventEmitter} from 'angular2/core';

@Component({
	selector: 'sprt-map',
	providers: []
})
@View({
	directives: [],
	templateUrl: 'http://localhost:9271/maps/garden.svg',
	styleUrls: ['component-style.css']
})

export class MapComponent {
	@Input()
	config: any;

	dom: any;

	constructor (myElement: ElementRef) {
		this.dom = myElement.nativeElement;
	}

	ngOnChanges () {
		if (this.config) {
			let config = JSON.parse(this.config);

			for (let item of config) {
				let el = this.dom.querySelector('#' + item.id);

				if (el) {
					el.setAttribute('plantId', item.plantId);
					el.style.setProperty('cursor', 'pointer', '');
					el.addEventListener('mouseenter', (e: any) => {
						this.onShapeHover(e);
					});
				}
			}
		}
	}

	onShapeHover (e: any) {
		let plantId = parseInt(e.target.getAttribute('plantId'), 10);
		this.hover.emit(plantId);
	}

	@Output()
	hover = new EventEmitter();
}
