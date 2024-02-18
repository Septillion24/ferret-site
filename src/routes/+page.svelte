<script lang="ts">
	import { ferrets } from './data';
	import FerretCard from './ferretCard.svelte';
	import { onMount } from 'svelte';
    import { base } from '$app/paths';

	let numFerrets: number = ferrets.length;
	let currentFerretIndex: number = 1;
	let cardGroup: HTMLDivElement;
	let cardContainers: NodeListOf<ChildNode>;
	let ferretDeckRight: HTMLDivElement;
	let ferretDeckLeft: HTMLDivElement;
	onMount(() => {
		cardContainers = cardGroup.childNodes;
		ferretDeckLeft.addEventListener('click', handleLeftDeckClick);
		ferretDeckRight.addEventListener('click', handleRightDeckClick);
	});
	function handleLeftDeckClick(event: MouseEvent) {
		currentFerretIndex = currentFerretIndex === 0 ? currentFerretIndex : currentFerretIndex - 1;
	}
	function handleRightDeckClick(event: MouseEvent) {
		currentFerretIndex =
			currentFerretIndex === numFerrets - 1 ? currentFerretIndex : currentFerretIndex + 1;
	}
</script>

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
			<FerretCard data={ferret} />
		</div>
	{/each}
	<div
		class="leftCard {currentFerretIndex === 0 ? 'emptyDeck' : 'fullDeck'}"
		bind:this={ferretDeckLeft}
	>
		<img src="{base}/ferret-back-blue.png" alt="" class="ferretDeck" />
	</div>
	<div
		class="rightCard {currentFerretIndex === numFerrets - 1 ? 'emptyDeck' : 'fullDeck'}"
		bind:this={ferretDeckRight}
	>
		<img src="{base}/ferret-back-red.png" alt="" class="ferretDeck" />
	</div>
</div>

<style lang="scss">
    $cardSize: 25vmin;

	.cardContainer {
		width: $cardSize;
        height: auto;
		aspect-ratio: 2/3;
		transform-origin: center;
		position: absolute;
		opacity: 0.5;
		transition: 0.5s;
		transition-timing-function: cubic-bezier(0.18, 0.63, 0.6, 0.95);
	}
	.leftCard {
		position: absolute;
		transform: translateX(-50vmin);
	}
	.active {
		opacity: 1;
	}
	.rightCard {
		position: absolute;
		transform: translateX(50vmin);
	}
	.cardGroup {
		height: 90vh;
		display: grid;
		place-items: center;
	}
	.ferretDeck {
		aspect-ratio: 2/3;
		width: $cardSize;
		border-radius: 2vmin;
		visibility: visible;
	}
	.emptyDeck {
		opacity: 0.5;
        transition:0.2s;
		cursor: not-allowed;
	}
	.fullDeck {
		cursor: pointer;
        transition:0.2s;
	}
</style>
