---
title: "Interior Point Linear Programming Solver"
description: "A Julia implementation of a primal-dual central path following algorithm for solving linear programming problems. Achieves 7+ digit accuracy on LPnetlib benchmarks, solving problems with 144,000+ non-zero entries in under 300 iterations."
image: "https://api.dicebear.com/9.x/shapes/svg?seed=IPLP"
startDate: "2025-03-31"
endDate: "2025-05-02"
skills: ["Julia", "Optimization", "Linear Programming", "Numerical Methods", "Sparse Matrices"]
sourceLink: "https://github.com/SauquetAlex/primal-dual-interior-point-linear-program-solver"
---

# Interior Point Linear Programming Solver

Built as the final project for CS 52000 Computational Methods in Optimization at Purdue University, this solver implements a generalized primal-dual central path following algorithm based on Robert Vanderbei's textbook "Linear Programming: Foundations and Extensions".

## The Challenge

Linear programming is fundamental to optimization—from logistics and manufacturing to finance and machine learning. While the simplex method dominated for decades, interior point methods revolutionized the field in the 1980s by providing polynomial-time guarantees and superior performance on large-scale problems.

The challenge was to implement a production-grade interior point solver that could handle real-world problems from the LPnetlib benchmark suite, including those with hundreds of thousands of constraints and variables.

## Technical Approach

Rather than traversing the edges of the feasible region like simplex methods, interior point methods move through the interior along the "central path"—a trajectory that balances optimality with staying away from boundaries.

The algorithm maintains both primal variables $(x, f, t, g)$ and dual variables $(y, v, s, h)$, updating them simultaneously at each iteration. A barrier parameter $\mu$ controls the trade-off between optimizing the objective and maintaining strict feasibility, gradually decreasing from $10^7$ to below $10^{-13}$ as the algorithm converges.

**Key technical decisions**:

- **Automatic rank reduction**: Used QR decomposition to detect and eliminate redundant constraints, which plagued many LPnetlib problems
- **Adaptive regularization**: Added $\mu$-scaled regularization to the Newton system ($D = ST^{-1} + HG^{-1} + \mu \cdot 10^{-3} I$), providing numerical stability when needed while having minimal impact near the optimum
- **Smart convergence criteria**: Monitored $\mu$ rather than traditional KKT residuals—once $\mu < 10^{-13}$, the solution is guaranteed accurate regardless of tolerance settings

## Results

Tested on the LPnetlib benchmark suite with strong performance:

| Problem | Size | Non-zeros | Iterations | Time | Accuracy |
|---------|------|-----------|------------|------|----------|
| lp_afiro | 27×51 | 102 | 52 | <1s | 8 digits |
| lp_agg | 488×615 | 2,862 | 147 | ~30s | 7 digits |
| lp_maros_r7 | 3,136×9,408 | 144,848 | 224 | ~60min | 7 digits |

The solver achieved convergence on all tested problems, matching or exceeding reference solutions from commercial solvers. For `lp_maros_r7`, my implementation computed an objective of 1.4971851664796441e6 compared to the expected 1.4971851665e6 which is accurate to 10 significant figures.
