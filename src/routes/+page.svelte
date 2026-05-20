<script lang="ts">
	import autoxImg from '$lib/assets/AutoX_blank.png';
</script>

<section class="hero">
	<h1>Auto<img src={autoxImg} alt="X" class="hero-x" /></h1>
	<p class="tagline">AI for Physical Systems team at the Alan Turing Institute</p>
</section>

<section class="packages">
	<h2>Software Packages</h2>
	<div class="cards">
		<a
			href="https://github.com/alan-turing-institute/autoemulate"
			target="_blank"
			rel="noopener noreferrer"
			class="card"
		>
			<img
				src="https://raw.githubusercontent.com/alan-turing-institute/autoemulate/main/misc/AE.png"
				alt="AutoEmulate logo"
			/>
			<p><b>Differentiable emulation toolkit for non-ML experts.</b><br><br> Run a complete machine learning pipeline to compare and optimise a wide range of emulators, with support for downstream tasks like sensitivity analysis and calibration.</p>
		</a>

		<a
			href="https://github.com/alan-turing-institute/autocast"
			target="_blank"
			rel="noopener noreferrer"
			class="card"
		>
			<img
				src="https://raw.githubusercontent.com/alan-turing-institute/autocast/refs/heads/main/AC.png"
				alt="AutoCast logo"
			/>
			<p><b>Spatiotemporal forecasting framework.</b><br><br>End-to-end training with SotA architectures. Supports both generative and deterministic pipelines, training in ambient or latent space, and CRPS-family ensemble objectives.</p>
		</a>

		<a
			href="https://github.com/alan-turing-institute/autosim"
			target="_blank"
			rel="noopener noreferrer"
			class="card"
		>
			<img
				src="https://raw.githubusercontent.com/alan-turing-institute/autosim/refs/heads/main/AS.png"
				alt="AutoSim logo"
			/>
			<p><b>Physical systems data generation.</b><br><br>Provides multiple simulators through a consistent API, making it easy to generate data at different resolutions and parameter ranges for rapid prototyping.</p>
		</a>


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
		align-items: center;
		gap: 2rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 1.5rem 2rem;
		transition:
			transform 0.2s,
			border-color 0.2s,
			box-shadow 0.2s;
		color: inherit;
		text-decoration: none;
	}

	.card:hover {
		transform: translateY(-3px);
		border-color: rgba(126, 184, 247, 0.4);
		box-shadow: 0 8px 32px rgba(126, 184, 247, 0.1);
		text-decoration: none;
	}

	.card img {
		width: 150px;
		height: 150px;
		object-fit: contain;
		border-radius: 10px;
		flex-shrink: 0;
	}

	.card p {
		font-size: 1rem;
		color: #9aa0b4;
		line-height: 1.5;
	}
</style>
