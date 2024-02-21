<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	const paths = {
		Home: '/',
		ferrets: '/ferrets'
	};
</script>

<nav>
	{#each Object.entries(paths) as [name, route]}
		<a href={`${base}${route}`} class={$page.url.pathname === route ? 'active' : 'inactive'}>{name}</a>
	{/each}
</nav>
<!-- <div class="content"> -->
	<slot />
<!-- </div> -->

<style lang="scss">
	$active-color: rgb(103, 122, 170);
	$inactive-color: rgb(102, 106, 116);
	$hover-color: rgb(13, 0, 83);

	.content {
		background-image: linear-gradient(rgba(255, 0, 0, 0), 80%, rgb(0, 0, 0));
		background-repeat: no-repeat;
		height: 110vh;
	}
	:root::-webkit-scrollbar {
		width: 1.2vmin;
	}

	:root::-webkit-scrollbar-thumb {
		border-radius: 30px;
		background: -webkit-gradient(linear, left top, left bottom, from(#0a0f16), to(#1b273b));
		box-shadow:
			inset 2px 2px 2px rgba(255, 255, 255, 0.15),
			inset -2px -2px 2px rgba(0, 0, 0, 0.25);
	}

	:root::-webkit-scrollbar-track {
		background-color: #fff;
		border-radius: 10px;
		background: linear-gradient(to right, #201c29, #201c29 1px, #100e17 1px, #100e17);
	}

	nav {
		background-color: #282c31;
		padding: 16px;
		font-family: sans-serif;
		text-align: center;
		a {
			padding: 20px;
			text-decoration: none;
		}
		a:hover {
			text-shadow: 1px 1px 5px $hover-color;
			transition: 1s;
			transition-timing-function: cubic-bezier(0.24, 0.81, 0.3, 0.68);
		}
		.active {
			color: $active-color;
		}
		.inactive {
			color: $inactive-color;
		}
	}

	:global(body) {
		margin: 0px;
		padding: 0px;
		background-color: #34383f;
	}
</style>
