<script lang="ts">
	import { ferrets } from './data';
	import FerretCard from './ferretCard.svelte';
	import { onMount } from 'svelte';

	let numFerrets: number = ferrets.length;
	let currentFerretIndex: number = 1;
	let cardGroup: HTMLDivElement;
	let cardContainers: NodeListOf<ChildNode>;
	onMount(() => {
		cardContainers = cardGroup.childNodes;
		console.log(cardContainers.length);
	});
</script>

<input type="number" bind:value={currentFerretIndex} />

<div class="cardGroup" bind:this={cardGroup}>
	{#each ferrets as ferret, index}
		<div
			class="cardContainer
            {index === currentFerretIndex ? 'active' : ''} 
            {index < currentFerretIndex ? 'leftCard' : ''} 
            {index > currentFerretIndex ? 'rightCard' : ''} "
			data-index="{index}
            "
		>
			{index}

			<FerretCard data={ferret} />
		</div>
	{/each}
</div>

<style>
	.cardContainer {
		width: 20vmin;
		aspect-ratio: 2/3;
		transform-origin: center;
		position: absolute;
		opacity: 0.5;
	}
	.leftCard {
		transform: translateX(-50vmin);
		transition: 1s;
	}
	.active {
		opacity: 1;
		transition: 1s;
	}
	.rightCard {
		transform: translateX(50vmin);
		transition: 1s;
	}
	.cardGroup {
		height: 90vh;
		display: grid;
		place-items: center;
	}
</style>
