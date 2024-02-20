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
		aspect-ratio: 2/3;
		width: inherit;
		height: auto;
		cursor: pointer;
		border-radius: 2vmin;
	}
	.cardFace {
		aspect-ratio: 2/3;
		height: inherit;
		width: inherit;
		position: absolute;
		overflow: hidden;
		border-radius: inherit;
		font-family: Arial, Helvetica, sans-serif;
		transition: $transition-time;
		background-color: white;
		transition-timing-function: linear;
		box-shadow: 0.5vmin 0.5vmin 0.8vmin 0vmin rgba(0, 0, 0, 0.75);
	}

	.front {
		&.notFlipped {
			transform: scaleX(100%);
			transition-delay: $transition-time;
		}
		&.flipped {
			transform: scaleX(0);
		}
	}
	.back {
		&.notFlipped {
			transform: scaleX(0);
		}
		&.flipped {
			transform: scaleX(100%);
			transition-delay: $transition-time;
		}

        p{
            font-size: 1.5vmin;
        }

	}
	.notFlipped > .content {
		transform: scaleX(0%);
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
</style>
