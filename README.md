# Rice Syngergy igem refresh

push all new changes to gh-pages subbranch (the branch that is being published as the website right now. the main and master branches are not deployed or published.)

# for now, push using sequence:

npm run build
git add -f dist
git commit -m "fix GitHub Pages refresh routing"
git subtree split --prefix dist -b gh-pages-temp
git push origin gh-pages-temp:gh-pages --force
git branch -D gh-pages-temp

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
