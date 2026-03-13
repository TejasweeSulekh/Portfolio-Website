import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <h3>Explainable Fraud Detection System | Self Project</h3>
      <ul>
        <li>Built an automated MLflow MLOps pipeline, training a 99.96% accuracy XGBoost classifier for imbalanced datasets.</li>
        <li>Created a Kubernetes microservices architecture to process Kafka event streams for real-time inference within 15ms.</li>
        <li>Engineered a ReAct agentic AI workflow via LangGraph, with automated risk reports based on extracted SHAP values.</li>
        <li>Executed a RAG pipeline utilizing LLM embeddings, for historical similarity searches monitored on a live Streamlit.</li>
      </ul>

      <h3>Academic & Course Projects</h3>
      <ul>
        <li><strong>GPT from Scratch:</strong> Engineered a 10M parameter decoder-only transformer from scratch in PyTorch, implementing multi-head self-attention and residual pathways to train a generative model on the Tiny Shakespeare dataset.</li>
        <li><strong>Hierarchical Object Detection:</strong> Led a 6-member team to build a multi-label dental X-ray detector using wavelet compression, fine-tuned Co-DETR, and Efficient-Net with Focal loss, increasing accuracy from 72.7% to 78.9%.</li>
        <li><strong>Chest X-Ray Classifier:</strong> Trained EfficientNet and ResNet models on a 100k+ image dataset for 14-class disease classification, utilizing Haar wavelets for denoising and decentralized Federated Learning for client-server training.</li>
        <li><strong>Algorithmic Trading Predictor:</strong> Developed a customizable LSTM network utilizing OHLCV time-series data to forecast short-term stock prices, integrating a simulated trading module for automated long/short strategy execution.</li>
        <li><strong>Computer Vision Fundamentals:</strong> Applied Wavelet transforms, SIFT, and Wiener filtering for image restoration and feature extraction, benchmarking traditional CV algorithms against a custom CNN using OpenCV.</li>
      </ul>
    </section>
  );
};

export default Projects;
