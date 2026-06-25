<script lang="ts">
	import autoxImg from '$lib/assets/AutoX_blank.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={autoxImg} />
	<title>AutoX</title>
</svelte:head>

<main>
	{@render children()}
</main>

<footer>
	<p>Contact: <a href="mailto:aiphys@turing.ac.uk">aiphys@turing.ac.uk</a></p>
	<p class="small">AutoX – AI for Physical Systems toolkit</p>
</footer>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
		background: #0d0d1a;
		color: #e8eaf0;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	:global(a) {
		color: #7eb8f7;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	main {
		flex: 1;
	}

	footer {
		text-align: center;
		padding: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		color: #7a8299;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	footer a {
		color: #7eb8f7;
	}

	.small {
		font-size: 0.8rem;
		opacity: 0.6;
	}
</style>
