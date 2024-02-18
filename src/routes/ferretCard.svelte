<script lang="ts">
	import { scale } from 'svelte/transition';

	import type { FerretData } from './data';

	export let data: FerretData;
	let src: string = data.src;
	let name: string = data.name;
	let birthdate: string = data.birthdate;
	let flipped = false;
	function handleFlipping() {
		flipped = !flipped;
	}
</script>

<div class="card" on:click={handleFlipping} role="presentation">
	<div class="cardFace back {flipped ? 'flipped' : 'notFlipped'}">
		<h1>
			{name}
		</h1>
		<p>{birthdate}</p>
		<p>{name} is a good {data.male ? 'boy' : 'girl'}</p>
	</div>
	<div class="cardFace front {flipped ? 'flipped' : 'notFlipped'}">
		<img {src} alt="" />
	</div>
</div>

<style lang="scss">
	$transition-time: 0.2s;

	.card {
		width: inherit;
		height: inherit;
		cursor: pointer;
	}
	.cardFace {
		aspect-ratio: 2/3;
		height: inherit;
		width: inherit;
		position: absolute;
		overflow: hidden;
		border-radius: 2vmin;
		font-family: Arial, Helvetica, sans-serif;
		transition: $transition-time;
		background-color: white;
		transition-timing-function: linear;
	}

	.front.notFlipped {
		transform: scaleX(100%);
		transition-delay: $transition-time;
	}
	.front.flipped {
		transform: scaleX(0);
	}
	.back.notFlipped {
		transform: scaleX(0);
	}
	.back.flipped {
		transform: scaleX(100%);
		transition-delay: $transition-time;
	}
	.notFlipped > .content {
		transform: scaleX(0%);
		// opacity:0;
	}
	img {
		margin: auto;
		height: 100%;
		width: auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		// opacity: 0.8;
		transition: 0.2s;
	}
	.content {
		position: absolute;
		top: 0px;
		width: inherit;
		height: inherit;
		background-color: white;
	}
	.content > h1 {
		text-align: center;
	}
	.content > p {
		margin-left: 40px;
	}
</style>
