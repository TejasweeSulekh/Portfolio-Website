# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Portfolio Website

This is a portfolio website built with React and Vite.

### Customization

To customize the content of the portfolio, edit the following files:

- `src/components/Home.jsx`: Update your name, profession, and skills. Replace `src/assets/profile-placeholder.svg` with your own photo.
- `src/components/Experience.jsx`: Add your work experience.
- `src/components/Projects.jsx`: Showcase your projects.
- `src/components/Skills.jsx`: List your skills.
- `src/components/Contact.jsx`: This is a simple form. You can integrate it with a backend service or a form provider like Formspree.
- `src/components/Footer.jsx`: Update your name.

### Deployment to GitHub Pages

1.  **Create a new repository on GitHub.**
2.  **Push the code to the repository.**
3.  **Update `package.json`:**
    -   Replace `<your-github-username>` with your GitHub username.
    -   Replace `<your-repo-name>` with the name of your repository.
4.  **Update `vite.config.js`:**
    -   Replace `<your-repo-name>` with the name of your repository.
5.  **Run the deploy script:**
    ```bash
    npm run deploy
    ```
    This will build the website and deploy it to the `gh-pages` branch of your repository.
6.  **Enable GitHub Pages:**
    -   In your repository's settings, go to the "Pages" section.
    -   Select the `gh-pages` branch as the source.
    -   Your website will be live at `https://<your-github-username>.github.io/<your-repo-name>`.
