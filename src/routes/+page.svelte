<script lang="ts">
	import { ferrets } from './data';
	import FerretCard from './ferretCard.svelte';
	import { onMount } from 'svelte';

	let numFerrets: number = ferrets.length;
	let currentFerretIndex: number = 0;
	let cardGroup: HTMLDivElement;
	let cardContainers: NodeListOf<ChildNode>;
	onMount(() => {
		cardContainers = cardGroup.childNodes;
		console.log(cardContainers.length);
	});
</script>

<div class="cardGroup" bind:this={cardGroup}>
	{#each ferrets as ferret}
		<div class="cardContainer">
			<FerretCard data={ferret} />
		</div>
	{/each}
</div>

<style>
	.cardContainer {
		width: 40vmin;
		aspect-ratio: 2/3;
		transform-origin: center;
		position: absolute;
		opacity: 0.5;
	}
	.cardGroup {
		height: 90vh;
		display: grid;
		place-items: center;
	}
</style>
