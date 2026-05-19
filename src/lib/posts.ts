export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	content: string;
}

export const posts: Post[] = [
	{
		slug: 'introducing-autoemulate',
		title: 'Introducing AutoEmulate: Differentiable Emulation for Physical Systems',
		date: '2025-03-12',
		description:
			'A look at how AutoEmulate makes it easy for non-ML experts to build fast, differentiable surrogate models for complex physical simulations.',
		content: `
## What is AutoEmulate?

Physical simulations can be extraordinarily expensive to run. A single evaluation of a computational fluid dynamics model might take hours on a supercomputer. AutoEmulate addresses this by learning a fast, differentiable surrogate — an *emulator* — directly from simulation data.

## Key features

- **Automatic model selection**: AutoEmulate benchmarks a range of emulator architectures (Gaussian processes, neural networks, gradient-boosted trees) and returns the best performer for your dataset.
- **Differentiability**: All emulators expose gradients, enabling downstream optimisation and uncertainty propagation.
- **Non-ML friendly API**: A scikit-learn–style interface means you can get started with just a few lines of Python.

## Getting started

\`\`\`python
from autoemulate import AutoEmulate

ae = AutoEmulate()
ae.setup(X_train, y_train)
ae.compare()
best = ae.get_best_emulator()
predictions = best.predict(X_test)
\`\`\`

We are actively developing AutoEmulate and welcome contributions. See the [GitHub repository](https://github.com/alan-turing-institute/autoemulate) to get involved.
		`
	},
	{
		slug: 'spatiotemporal-forecasting-with-autocast',
		title: 'Spatiotemporal Forecasting with AutoCast',
		date: '2025-05-01',
		description:
			'AutoCast brings a unified framework for spatiotemporal forecasting to physical systems — from weather prediction to wildfire spread modelling.',
		content: `
## The challenge of spatiotemporal forecasting

Many physical systems evolve in both space and time simultaneously: ocean currents, atmospheric pressure fields, pollutant plumes. Forecasting such systems accurately requires models that can capture long-range spatial dependencies alongside temporal dynamics.

## How AutoCast helps

AutoCast wraps state-of-the-art spatiotemporal architectures — including neural operators and graph-based models — behind a consistent, composable API. Users can:

- **Load spatial datasets** in standard formats (NetCDF, GeoTIFF, NumPy).
- **Train and evaluate** multiple forecasting architectures with a single command.
- **Visualise predictions** on an interactive map.

## Example: 72-hour temperature forecast

\`\`\`python
from autocast import AutoCast

model = AutoCast(architecture='fno')
model.fit(train_dataset)
forecast = model.predict(steps=72)
forecast.plot()
\`\`\`

AutoCast is part of the AutoX toolkit and integrates seamlessly with AutoEmulate and AutoSim. Check out the [GitHub repository](https://github.com/alan-turing-institute/autocast) for installation instructions and tutorials.
		`
	}
];
