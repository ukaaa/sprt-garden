import {Component, View, Input, Output, ElementRef, EventEmitter} from 'angular2/core';

@Component({
	selector: 'sprt-map',
	providers: []
})
@View({
	directives: [],
	template: `
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
			<rect id="one" x="240" y="120" width="160" height="400"/>
			<rect id="two" x="240" y="520" width="160" height="160"/>
			<rect id="three" x="500" y="220" width="260" height="240"/>
			<rect id="four" x="600" y="680" width="220" height="140"/>
		</svg>
	`,
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
