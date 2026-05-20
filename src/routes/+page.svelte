<script lang="ts">
	import autoxImg from '$lib/assets/AutoX_blank.png';
</script>

<section class="hero">
	<h1>Auto<img src={autoxImg} alt="X" class="hero-x" /></h1>
	<p class="tagline">AI for Physical Systems team at the Alan Turing Institute</p>
</section>

<section class="packages">
	<h2>Software</h2>
	<div class="cards">
		<div class="card">
			<img
				src="https://raw.githubusercontent.com/alan-turing-institute/autoemulate/main/misc/AE.png"
				alt="AutoEmulate logo"
			/>
			<div class="card-body">
				<p><b>Differentiable emulation toolkit for non-ML experts.</b><br><br> Run a complete machine learning pipeline to compare and optimise a wide range of emulators, with support for downstream tasks like sensitivity analysis and calibration.</p>
				<div class="card-links">
					<a href="https://github.com/alan-turing-institute/autoemulate" target="_blank" rel="noopener noreferrer" class="card-link github">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
						GitHub
					</a>
					<a href="https://alan-turing-institute.github.io/autoemulate/" target="_blank" rel="noopener noreferrer" class="card-link docs">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
						Docs
					</a>
				</div>
			</div>
		</div>

		<div class="card">
			<img
				src="https://raw.githubusercontent.com/alan-turing-institute/autocast/refs/heads/main/AC.png"
				alt="AutoCast logo"
			/>
			<div class="card-body">
				<p><b>Spatiotemporal forecasting framework.</b><br><br>End-to-end training with SotA architectures. Supports both generative and deterministic pipelines, training in ambient or latent space, and CRPS-family ensemble objectives.</p>
				<div class="card-links">
					<a href="https://github.com/alan-turing-institute/autocast" target="_blank" rel="noopener noreferrer" class="card-link github">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
						GitHub
					</a>
					<!-- <a href="https://alan-turing-institute.github.io/autocast/" target="_blank" rel="noopener noreferrer" class="card-link docs">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
						Docs
					</a> -->
				</div>
			</div>
		</div>

		<div class="card">
			<img
				src="https://raw.githubusercontent.com/alan-turing-institute/autosim/refs/heads/main/AS.png"
				alt="AutoSim logo"
			/>
			<div class="card-body">
				<p><b>Physical systems data generation.</b><br><br>Provides multiple simulators through a consistent API, making it easy to generate data at different resolutions and parameter ranges for rapid prototyping.</p>
				<div class="card-links">
					<a href="https://github.com/alan-turing-institute/autosim" target="_blank" rel="noopener noreferrer" class="card-link github">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
						GitHub
					</a>
					<!-- <a href="https://alan-turing-institute.github.io/autosim/" target="_blank" rel="noopener noreferrer" class="card-link docs">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
						Docs
					</a> -->
				</div>
			</div>
		</div>
	</div>
</section>

<section class="papers">
	<h2>Papers</h2>
	<div class="paper-list">

		<div class="paper-card">
			<div class="paper-meta">
				<span class="venue preprint">Preprint · arXiv · 2026</span>
			</div>
			<h3 class="paper-title">Reliability of Probabilistic Emulation of Physical Systems</h3>
			<p class="paper-authors">Sam F. Greenbury, Radka Jersakova, Paolo Conti, Marjan Famili, Christopher Iliffe Sprague, Edwin Brown, Jason D McEwen</p>
			<p class="paper-abstract">Benchmarking probabilistic models of physical systems</p>
			<div class="paper-links">
				<a href="https://arxiv.org" class="paper-link" target="_blank" rel="noopener noreferrer">arXiv →</a>
				<a href="https://github.com/alan-turing-institute/autocast" class="paper-link" target="_blank" rel="noopener noreferrer">Code →</a>
			</div>
		</div>

		<div class="paper-card">
			<div class="paper-meta">
				<span class="venue">The Journal of Open Source Software· 2025</span>
			</div>
			<h3 class="paper-title">AutoEmulate: A Python package for semi-automated emulation</h3>
			<p class="paper-authors">Martin A. Stoffel, Bryan M. Li, Kalle Westerling, Sophie Arana, Max Balmus, Eric Daub, Steve Niederer</p>
			<p class="paper-abstract">Replace complex simulations with fast, accurate emulators</p>
			<div class="paper-links">
				<a href="https://joss.theoj.org/papers/10.21105/joss.07626" class="paper-link" target="_blank" rel="noopener noreferrer">Paper →</a>
				<a href="https://github.com/alan-turing-institute/autoemulate" class="paper-link" target="_blank" rel="noopener noreferrer">Code →</a>
			</div>
		</div>

	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding: 6rem 2rem 4rem;
	}

	.hero h1 {
		font-size: clamp(3rem, 8vw, 6rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, #ffffff 30%, #7eb8f7 70%, #a78bfa);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.1;
		display: inline-flex;
		align-items: center;
	}

	.hero-x {
		height: 0.9em;
		width: auto;
		margin-left: -0.05em;
		vertical-align: middle;
		isolation: isolate;
		position: relative;
	}

	.tagline {
		margin-top: 1rem;
		font-size: 1.25rem;
		color: #b0b8cc;
		letter-spacing: 0.02em;
	}

	.packages {
		padding: 2rem 2.5rem 5rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.packages h2 {
		text-align: center;
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #7a8299;
		margin-bottom: 2.5rem;
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 680px;
		margin: 0 auto;
	}

	.card {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 2rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 1.5rem 2rem;
	}

	.card img {
		width: 150px;
		height: 150px;
		object-fit: contain;
		border-radius: 10px;
		flex-shrink: 0;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}

	.card p {
		font-size: 1rem;
		color: #9aa0b4;
		line-height: 1.5;
	}

	.card-links {
		display: flex;
		gap: 0.75rem;
	}

	.card-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		font-weight: 600;
		padding: 0.35rem 0.85rem;
		border-radius: 8px;
		text-decoration: none;
		transition: opacity 0.2s, transform 0.15s;
	}

	.card-link:hover {
		opacity: 0.85;
		transform: translateY(-1px);
		text-decoration: none;
	}

	.card-link svg {
		width: 15px;
		height: 15px;
		flex-shrink: 0;
	}

	.card-link.github {
		background: rgba(255, 255, 255, 0.08);
		color: #e8eaf0;
		border: 1px solid rgba(255, 255, 255, 0.12);
	}

	.card-link.docs {
		background: rgba(126, 184, 247, 0.12);
		color: #7eb8f7;
		border: 1px solid rgba(126, 184, 247, 0.25);
	}

	.papers {
		padding: 0 2.5rem 5rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.papers h2 {
		text-align: center;
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #7a8299;
		margin-bottom: 2.5rem;
	}

	.paper-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 680px;
		margin: 0 auto;
	}

	.paper-card {
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.paper-meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.venue {
		font-size: 0.8rem;
		color: #7a8299;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	/* .venue.preprint {
		color: #f0a070;
	} */

	.paper-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: #ffffff;
		line-height: 1.35;
	}

	.paper-authors {
		font-size: 0.9rem;
		color: #7eb8f7;
	}

	.paper-abstract {
		font-size: 0.95rem;
		color: #9aa0b4;
		line-height: 1.6;
	}

	.paper-links {
		display: flex;
		gap: 1.25rem;
		margin-top: 0.25rem;
	}

	.paper-link {
		font-size: 0.9rem;
		color: #7eb8f7;
		transition: opacity 0.2s;
	}

	.paper-link:hover {
		opacity: 0.75;
		text-decoration: none;
	}
</style>
