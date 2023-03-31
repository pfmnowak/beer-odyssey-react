export type Beer = {
	id: number;
	name: string;
	tagline: string;
	firstBrewed: string;
	description: string;
	imageUrl: string;
	abv: number;
	ibu: number;
	ingredients: {
		malt: {
			name: string;
			amount: {
				value: number;
				unit: string;
			};
		}[];
		hops: {
			name: string;
			amount: {
				value: number;
				unit: string;
			};
			add: string;
			attribute: string;
		}[];
		yeast: string;
	};
	foodPairing: string[];
	brewersTips: string;
	contributedBy: string;
};
