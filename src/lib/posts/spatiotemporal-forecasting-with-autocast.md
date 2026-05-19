---
title: "Spatiotemporal Forecasting with AutoCast"
date: 2025-05-01
description: "AutoCast brings a unified framework for spatiotemporal forecasting to physical systems — from weather prediction to wildfire spread modelling."
---

## The challenge of spatiotemporal forecasting

Many physical systems evolve in both space and time simultaneously: ocean currents, atmospheric pressure fields, pollutant plumes. Forecasting such systems accurately requires models that can capture long-range spatial dependencies alongside temporal dynamics.

## How AutoCast helps

AutoCast wraps state-of-the-art spatiotemporal architectures — including neural operators and graph-based models — behind a consistent, composable API. Users can:

- **Load spatial datasets** in standard formats (NetCDF, GeoTIFF, NumPy).
- **Train and evaluate** multiple forecasting architectures with a single command.
- **Visualise predictions** on an interactive map.

## Example: 72-hour temperature forecast

```python
from autocast import AutoCast

model = AutoCast(architecture='fno')
model.fit(train_dataset)
forecast = model.predict(steps=72)
forecast.plot()
```

AutoCast is part of the AutoX toolkit and integrates seamlessly with AutoEmulate and AutoSim. Check out the [GitHub repository](https://github.com/alan-turing-institute/autocast) for installation instructions and tutorials.
