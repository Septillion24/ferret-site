<script lang="ts">

    import type { FerretData } from "./data";
    export let data: FerretData;
    let src: string = data.src;
	let name: string = data.name;
    let birthdate: string = data.birthdate;
</script>

<div class="mainCard">
	<img {src} alt="" />
	<div class="content">
		<h1>
			{name}
		</h1>
        <p>{birthdate}</p>
		<p>{name} is a good {data.male ? "boy" : "girl"}</p>
	</div>
</div>

<style lang="scss">
	.mainCard {
		aspect-ratio: 2/3;
		width: inherit;
		position: absolute;
		overflow: hidden;
		background-color: black;
		font-family: Arial, Helvetica, sans-serif;
		color: rgba(255, 255, 255, 0.9);
		border-radius: 2vmin;
        opacity: inherit;
    }
    .mainCard:hover .content{
        opacity: 1;
        transition: 1s;
        // transition-timing-function: cubic-bezier(1,0,.88,.27);
        transition-delay: 0.2s;
    }
	.content {
		position: absolute;
		top: 0px;
		width: 100%;
        height:100%;
        opacity: 0;
	}
    .content>h1{
        text-align: center;
    }
    .content>p{
        margin-left:40px;
    }
	img {
		margin: auto;
		height: 100%;
		width: auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.8;
        transition: 0.2s;
	}
    .mainCard:hover img{
        filter: blur(5px);
        transition: 0.5s;
    }
</style>
