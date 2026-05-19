<script lang="ts">
	import { posts } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog – AutoX</title>
</svelte:head>

<section class="blog-list">
	<h1>Blog</h1>
	<p class="subtitle">Research and software updates from the AIPHYS team at the Alan Turing Institute.</p>

	<ul>
		{#each posts as post}
			<li>
				<a href="/blog/{post.slug}" class="post-card">
					<div class="card-meta">
						<span class="date">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
						<span class="badge {post.category}">
							{#if post.category === 'software'}
								<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<polyline points="5,3.5 1,8 5,12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
									<polyline points="11,3.5 15,8 11,12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								Software
							{:else}
								<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<rect x="2.5" y="1.5" width="9" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
									<line x1="5" y1="5.5" x2="9" y2="5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
									<line x1="5" y1="8" x2="9" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
									<line x1="5" y1="10.5" x2="7.5" y2="10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
								</svg>
								Research
							{/if}
						</span>
					</div>
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

	.card-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.1rem;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		padding: 0.25rem 0.65rem;
		border-radius: 999px;
		text-transform: uppercase;
	}

	.badge svg {
		width: 13px;
		height: 13px;
		flex-shrink: 0;
	}

	.badge.software {
		background: rgba(126, 184, 247, 0.12);
		color: #7eb8f7;
		border: 1px solid rgba(126, 184, 247, 0.25);
	}

	.badge.research {
		background: rgba(167, 139, 250, 0.12);
		color: #a78bfa;
		border: 1px solid rgba(167, 139, 250, 0.25);
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
