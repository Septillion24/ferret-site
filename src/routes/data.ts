import { base } from '$app/paths';

export interface FerretData {
	src: string;
	name: string;
	male: boolean;
	birthdate: string;
	icon: string;
	atk: number; // Just a little bit of fun
	def: number;
	speed: number;
	stamina: number;
    description:string;
}

export const ferrets: FerretData[] = [
	{
		src: `${base}/Noodle.png`,
		name: 'Noodle',
		male: true,
		birthdate: '3/1/2020',
		icon: `${base}/NoodleIcon.png`,
		atk: 33,
		def: 34,
		speed: 42,
		stamina: 60,
        description:"Noodle is our first-ever ferret, we adopted him on his own in the summer of 2020. At that time, ferrets were very difficult to find and we had to travel all the way to South Carolina to find him."
	},
	{
		src: `${base}/Bear.png`,
		name: 'Bear',
		male: true,
		birthdate: '1/9/2022',
		icon: `${base}/BearIcon.png`,
        atk: 53,
		def: 12,
		speed: 35,
		stamina: 54,
        description:"We adopted Bear and Willow at the same time in early 2022. Bear is the clumsiest ferret we have, and walks with a limp most of the time."
	},
	{
		src: `${base}/Willow.png`,
		name: 'Willow',
		male: true,
		birthdate: '12/12/2021',
		icon: `${base}/WillowIcon.png`,
        atk: 45,
		def: 75,
		speed: 56,
		stamina: 42,
        description:"Willow was adopted in early 2022 with his brother Bear. He is the only white ferret we have, and is also the most rambunctious, climbing on every surface in the house."
	},
	{
		src: `${base}/Coco.png`,
		name: 'Coco',
		male: false,
		birthdate: '6/17/2023',
		icon: `${base}/CocoIcon.png`,
        atk: 67,
		def: 25,
		speed: 84,
		stamina: 39,
        description:"Coco is the newest and youngest ferret we have, being adopted in January of 2024. She had been in the pet store we found her at for half a year on her own, so we decided to give her a real home"
	}
];
