---
title: "Introducing AutoEmulate: Differentiable Emulation for Physical Systems"
date: 2025-03-12
description: "A look at how AutoEmulate makes it easy for non-ML experts to build fast, differentiable surrogate models for complex physical simulations."
---

## What is AutoEmulate?

Physical simulations can be extraordinarily expensive to run. A single evaluation of a computational fluid dynamics model might take hours on a supercomputer. AutoEmulate addresses this by learning a fast, differentiable surrogate — an *emulator* — directly from simulation data.

## Key features

- **Automatic model selection**: AutoEmulate benchmarks a range of emulator architectures (Gaussian processes, neural networks, gradient-boosted trees) and returns the best performer for your dataset.
- **Differentiability**: All emulators expose gradients, enabling downstream optimisation and uncertainty propagation.
- **Non-ML friendly API**: A scikit-learn–style interface means you can get started with just a few lines of Python.

## Getting started

```python
from autoemulate import AutoEmulate

ae = AutoEmulate()
ae.setup(X_train, y_train)
ae.compare()
best = ae.get_best_emulator()
predictions = best.predict(X_test)
```

We are actively developing AutoEmulate and welcome contributions. See the [GitHub repository](https://github.com/alan-turing-institute/autoemulate) to get involved.
