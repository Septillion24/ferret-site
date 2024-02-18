import { base } from '$app/paths';

export interface FerretData {
	src: string;
	name: string;
	male: boolean;
	birthdate: string;
}

export const ferrets: FerretData[] = [
	{
		src: `${base}/Noodle.png`,
		name: 'Noodle',
		male: true,
		birthdate: '3/1/2020'
	},
	{
		src: `${base}/Bear.png`,
		name: 'Bear',
		male: true,
		birthdate: '1/9/2022'
	},
	{
		src: `${base}/Willow.png`,
		name: 'Willow',
		male: true,
		birthdate: '12/12/2021'
	},
	{
		src: `${base}/Coco.png`,
		name: 'Coco',
		male: false,
		birthdate: '6/17/2023'
	}
];
