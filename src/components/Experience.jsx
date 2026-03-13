import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div>
        <h3>AI R&D Engineer at IPHIPI, Hyderabad</h3>
        <p>July 2025 - Present</p>
        <ul>
          <li>Engineered custom asymmetric and multi-resolution loss functions to penalize false positives in low-SNR environments, improving speech quality metric by 10% and noise reduction quality by 13% compared to the baseline.</li>
          <li>Executed end-to-end Edge AI deployments from Python to bare-metal hardware via Data-path and Quantization-Aware Training (QAT), achieving 95% quantization retention and 30% higher speech quality compared to baseline.</li>
          <li>Architected a sub-150ms multi-threaded python inference engine, utilizing a thread-safe producer-consumer queues with 0% deadlock and active health monitoring dashboard for overflow and underflow detection.</li>
          <li>Optimized neural network bottlenecks by replacing standard GRUs with Dilated Convolutional Networks, achieving 1:1 speech power transparency retention and improving temporal context.</li>
          <li>Abstracted data buffering and pre-processing pipelines, decoupling ML architectures from low-level hardware constraints to enable rapid model retraining across diverse Bluetooth chipsets compatibility with the product.</li>
          <li>Prototyped an ultra-low latency (4ms) inference system, utilizing filter coefficients which were dynamically evolving for every 0.5ms (8 samples) driven by real-time neural network masks in a multi-data-path pipeline.</li>
          <li>Developed automated data augmentation pipelines, teaching the model to dynamically handle varying digital gain levels via magnitude independent loss function at natural logarithmic scale.</li>
          <li>Spearheaded technical integrations as the lead liaison between the client and silicon manufacturers, resolving OTA blockers and advancing solutions from technical POC to the commercial pricing stage.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
