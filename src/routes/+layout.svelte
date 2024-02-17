<script lang="ts">
	import { page } from '$app/stores';
	const paths = {
		Home: '/',
		ferrets: '/ferrets',
	};
    
</script>
<header>
	{#each Object.entries(paths) as [name, route]}
		<a href={route} class={$page.url.pathname === route ? 'active' : 'inactive'}>{name}</a>
	{/each}
</header>

<slot />

<style lang="scss">
	$active-color: rgb(103, 122, 170);
	$inactive-color: rgb(102, 106, 116);
    $hover-color: rgb(13, 0, 83);

	header {
		background-color: #282c31;
		padding: 16px;
		font-family: sans-serif;
		text-align: center;
	}
	header > a {
		padding: 20px;
		text-decoration: none;
	}
	header > a:hover {
		text-shadow: 1px 1px 5px $hover-color;
		transition: 1s;
		transition-timing-function: cubic-bezier(.24,.81,.3,.68);
	}
	.active {
		color: $active-color;
	}
	.inactive {
		color: $inactive-color;
	}
</style>
