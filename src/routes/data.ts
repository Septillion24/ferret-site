export interface FerretData {
	src: string;
	name: string;
	male: boolean;
	birthdate: string;
}

export const ferrets: FerretData[] = [
	{
		src: '/Noodle.png',
		name: 'Noodle',
		male: true,
		birthdate: '2/11/2024'
	},
	{
		src: '/Bear.png',
		name: 'Bear',
		male: true,
		birthdate: '2/11/2024'
	},
	{
		src: '/Willow.png',
		name: 'Willow',
		male: true,
		birthdate: '2/11/2024'
	},
	{
		src: '/Coco.png',
		name: 'Coco',
		male: false,
		birthdate: '2/11/2024'
	}
];
