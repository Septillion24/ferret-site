<script lang="ts">
	import { scale } from 'svelte/transition';

	import type { FerretData } from './data';

	export let data: FerretData;
	let flipped = false;
	function handleFlipping() {
		flipped = !flipped;
	}
</script>

<div class="card" on:click={handleFlipping} role="presentation">
	<div class="cardFace back {flipped ? 'flipped' : 'notFlipped'}">
		<h1>
			<img src={data.icon} alt="" />
			{data.name}
			{#if data.male}
				<i class="fa-solid fa-mars" style="color:blue"></i>
			{:else}
				<i class="fa-solid fa-venus" style="color:pink"></i>
			{/if}
		</h1>

		<div class="birthdate">
			{data.birthdate}
		</div>

		<div class="stats">
			<table>
				<tr>
					<td><i class="fa-solid fa-hand-fist" title="Attack"></i>: {data.atk} </td><td> <i class="fa-solid fa-shield-halved" title="Defense"></i>: {data.def} </td>
				</tr>
				<tr>
					<td><i class="fa-solid fa-wind" title="Speed"></i>: {data.speed}</td><td> <i class="fa-solid fa-bolt" title="Stamina"></i>: {data.stamina}</td>
				</tr>
			</table>
		</div>

        <div class="description">
            {data.description}
        </div>

	</div>
	<div class="cardFace front {flipped ? 'flipped' : 'notFlipped'}">
		<img src={data.src} alt="" draggable="false" />
	</div>
</div>

<style lang="scss">
	$transition-time: 0.2s;

	.back {
		* {
			margin: 0;
            -webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
		img {
			width: 3vmin;
			height: auto;
			
		}
		h1 {
			margin-top: 0.5vmin;
			font-size: 2.6vmin;
			text-align: center;
		}
		.birthdate {
			border-bottom: 1px solid black;
			font-size: 1.7vmin;
			margin-top: 0.2vmin;
			width: inherit;
			text-align: center;
		}

		.stats {
            font-size: 1.7vmin;
            table {
				width: 100%;
				border: 1px solid black;
				border-collapse: collapse;
				text-align: center;

				td {
					border: 1px solid black;
				}
			}
		}
        .description{
            padding:0.5vmin;
            font-size: 1.6vmin;
        }
	}

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
