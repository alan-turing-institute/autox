<script lang="ts">
	import { posts } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog – AutoX</title>
</svelte:head>

<section class="blog-list">
	<h1>Blog</h1>
	<p class="subtitle">Research and software updates from the AI for Physical Systems team at the Alan Turing Institute.</p>

	<ul>
		{#each posts as post}
			<li>
				<a href="/blog/{post.slug}" class="post-card">
					<span class="date">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
					<h2>{post.title}</h2>
					<p>{post.description}</p>
					<span class="read-more">Read more →</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.blog-list {
		max-width: 780px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		color: #ffffff;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #7a8299;
		margin-bottom: 3rem;
		font-size: 1.05rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.post-card {
		display: block;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 1.75rem 2rem;
		transition:
			border-color 0.2s,
			transform 0.2s,
			box-shadow 0.2s;
		color: inherit;
		text-decoration: none;
	}

	.post-card:hover {
		border-color: rgba(126, 184, 247, 0.4);
		transform: translateY(-2px);
		box-shadow: 0 6px 24px rgba(126, 184, 247, 0.08);
		text-decoration: none;
	}

	.date {
		font-size: 0.82rem;
		color: #7a8299;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.post-card h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0.5rem 0 0.75rem;
		line-height: 1.35;
	}

	.post-card p {
		color: #9aa0b4;
		line-height: 1.65;
		font-size: 0.97rem;
	}

	.read-more {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.9rem;
		color: #7eb8f7;
	}
</style>
