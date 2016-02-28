interface IPlant {
	name: string;
	synonyms?: Array<string>;
	commonNames?: Array<string>;
	family?: string;
	genus?: string;
	details?: string;
	media?: Array<string>;
	height?: number; // in metres
	spread?: number; // in metres
	time?: number; // in years
	sowTime?: Array<number>;
	flowerTime?: Array<number>;
	color?: string;
	hardy: boolean;
}

export default IPlant;
