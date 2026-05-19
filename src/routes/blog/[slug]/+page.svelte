<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';

	let { data }: { data: PageData } = $props();

	const htmlContent = $derived(marked(data.post.content));
</script>

<svelte:head>
	<title>{data.post.title} – AutoX Blog</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<article>
	<header>
		<a href="/blog" class="back">← Back to Blog</a>
		<span class="date">
			{new Date(data.post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
		</span>
		<h1>{data.post.title}</h1>
		<p class="description">{data.post.description}</p>
	</header>

	<div class="content">{@html htmlContent}</div>
</article>

<style>
	article {
		max-width: 740px;
		margin: 0 auto;
		padding: 3rem 2rem 5rem;
	}

	header {
		margin-bottom: 3rem;
	}

	.back {
		display: inline-block;
		font-size: 0.9rem;
		color: #7eb8f7;
		margin-bottom: 1.5rem;
	}

	.back:hover {
		text-decoration: underline;
	}

	.date {
		display: block;
		font-size: 0.82rem;
		color: #7a8299;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.75rem;
	}

	h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		color: #ffffff;
		line-height: 1.25;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.1rem;
		color: #9aa0b4;
		line-height: 1.6;
		border-left: 3px solid rgba(126, 184, 247, 0.5);
		padding-left: 1rem;
	}

	.content :global(h2) {
		font-size: 1.4rem;
		font-weight: 700;
		color: #ffffff;
		margin: 2.5rem 0 0.75rem;
	}

	.content :global(p) {
		color: #c0c8dc;
		line-height: 1.75;
		margin-bottom: 1.25rem;
	}

	.content :global(ul),
	.content :global(ol) {
		color: #c0c8dc;
		padding-left: 1.5rem;
		line-height: 1.75;
		margin-bottom: 1.25rem;
	}

	.content :global(li) {
		margin-bottom: 0.4rem;
	}

	.content :global(strong) {
		color: #ffffff;
		font-weight: 600;
	}

	.content :global(em) {
		color: #b8c4dc;
	}

	.content :global(a) {
		color: #7eb8f7;
	}

	.content :global(pre) {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	.content :global(code) {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.88rem;
		color: #a8d8ff;
	}

	.content :global(pre code) {
		background: none;
		padding: 0;
	}
</style>
