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
		birthdate: '3/1/2020'
	},
	{
		src: '/Bear.png',
		name: 'Bear',
		male: true,
		birthdate: '1/9/2022'
	},
	{
		src: '/Willow.png',
		name: 'Willow',
		male: true,
		birthdate: '12/12/2021'
	},
	{
		src: '/Coco.png',
		name: 'Coco',
		male: false,
		birthdate: '6/17/2023'
	}
];
