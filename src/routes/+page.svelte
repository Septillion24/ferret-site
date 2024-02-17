<script>
	import { ferrets } from './data';
	import FerretCard from './ferretCard.svelte';
</script>

{#each ferrets as ferret}
	<FerretCard data={ferret} />
{/each}
