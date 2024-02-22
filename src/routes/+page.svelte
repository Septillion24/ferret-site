<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { ferrets } from './data';
	import FerretCard from './ferretCard.svelte';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	let numFerrets: number = ferrets.length;
	let currentFerretIndex: number = 0;
	let cardGroup: HTMLDivElement;
	let cardContainers: NodeListOf<ChildNode>;
	let mouseDownPosition: number = 0;

	let trackHorizontal = tweened(0, { duration: 500, easing: cubicOut });
	let currentPosition = 0;

	onMount(() => {
		cardContainers = cardGroup.childNodes;
	});

	function handleMouseDown(event: MouseEvent): void {
		mouseDownPosition = event.clientX;
	}
	function handleMouseMovememnt(event: MouseEvent): void {
		if (mouseDownPosition === 0) return;
		const mouseDelta = mouseDownPosition - event.clientX;
		const maxDelta = window.innerWidth / 2;

		let deltaPercent = (mouseDelta / maxDelta) * -100 + currentPosition;
		deltaPercent = Math.min(deltaPercent, 0);
		deltaPercent = Math.max(deltaPercent, -100);

		// trackHorizontal.set(deltaPercent);
        $trackHorizontal = deltaPercent;
		console.log(trackHorizontal);
	}
	function handleMouseUp(): void {
		mouseDownPosition = 0;
		currentPosition = $trackHorizontal;
	}
</script>

<svelte:head>
	<title>{ferrets[currentFerretIndex].name}</title>
</svelte:head>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="content"
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMovememnt}
	on:mouseup={handleMouseUp}
>
	<div
		bind:this={cardGroup}
		class="cardGroup"
		style="transform: translate({$trackHorizontal}%, -50%)"
	>
		{#each ferrets as ferret, index}
			<div class="cardContainer">
				<FerretCard data={ferret} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	$cardSize: 35vmin;
	.content {
		height: 100vh;
		width: 100%;
	}
	.cardGroup {
		display: flex;
		box-sizing: border-box;
		position: absolute;
		left: 50%;
		top: 50%;
		gap: 50vmin;
		// transform: ;
	}

	.cardContainer {
		width: $cardSize;
		height: auto;
		aspect-ratio: 2/3;
		transform-origin: center;
		// position: absolute;
		opacity: 0.5;
		transition: 0.5s;
		transition-timing-function: cubic-bezier(0.18, 0.63, 0.6, 0.95);
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
	:global(body) {
		overflow: hidden;
	}
</style>
