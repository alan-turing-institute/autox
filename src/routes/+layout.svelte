<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>AutoX – AI for Physical Systems toolkit</title>
</svelte:head>

<nav>
	<a href="/" class="nav-logo">AutoX</a>
	<ul>
		<li><a href="/" class={page.url.pathname === '/' ? 'active' : ''}>Home</a></li>
		<li><a href="/blog" class={page.url.pathname.startsWith('/blog') ? 'active' : ''}>Blog</a></li>
	</ul>
</nav>

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

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2.5rem;
		background: rgba(255, 255, 255, 0.04);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(8px);
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.nav-logo {
		font-size: 1.4rem;
		font-weight: 700;
		color: #ffffff;
		letter-spacing: 0.04em;
		text-decoration: none;
	}

	nav ul {
		list-style: none;
		display: flex;
		gap: 2rem;
	}

	nav ul a {
		font-size: 0.95rem;
		color: #b0b8cc;
		transition: color 0.2s;
	}

	nav ul a:hover,
	nav ul a.active {
		color: #ffffff;
		text-decoration: none;
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
