---
title: "TE Connectivity AI Cup Winner"
description: "A diffusion model for manufacturing action segmentation achieving 88.7% accuracy. Implemented YOLO-based hand detection with automatic task labeling for pipeline generalization across multiple production lines."
image: "https://api.dicebear.com/9.x/shapes/svg?seed=TEAICup"
startDate: "2023-10-17"
endDate: "2024-05-10"
skills: ["PyTorch", "Python", "YOLO", "Diffusion Models", "Computer Vision", "Ultralytics"]
projectLink: "https://www.te.com/en/about-te/stories/ai-cup.html"
---
# TE Connectivity AI Cup 2024
I competeted in the [TE Connectivity](https://www.te.com/en/home.html) AI cup in 2024 representing Purdue University, winning first place in the US and 2nd place internationally. My team and I implemented a pipeline for collecting and labelling data and training a diffusion model (based on https://arxiv.org/pdf/2303.17959) to segment the various steps in the manufacturing process.

I trained a YOLO model using [Ultralytics](https://www.ultralytics.com/) to detect the gloved hands of a worker during a video of a manufacturing process. Using a sliding window technique and a web app, we created a novel way of creating action segmentation datasets to identify the various stages of the manufacturing process. We then trained a diffusion action segmentation model to automatically cluster and classify various sections of a full video into the manufacturing stages. I optimized the hyperparameters to get a peak 88.7% accuracy on test datasets.

This scalable solution generates \$170k per manufacturing line with over 50 deployment opportunities (so a total of \$8.5 million a year if implemented everywhere) as it allows industrial engineers to optimize manufacturing processes and compare the productivity of workers.

Note: some aspects of this project are being filed for patents, I will update this project description with more information when I am allowed to.
