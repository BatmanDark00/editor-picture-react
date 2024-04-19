# Editor de fotos (PicShur)

`PicShur` es una aplicación de edición fotográfica diseñada para ofrecerte herramientas simples y potentes para embellecer tus imágenes con facilidad. Con una interfaz intuitiva y una amplia gama de opciones de edición, puedes transformar tus fotos en obras de arte en cuestión de segundos. Desde ajustes básicos como brillo y contraste hasta filtros creativos y efectos especiales, `PicShur` te permite dar rienda suelta a tu creatividad y mejorar tus fotos de forma rápida y sencilla. Una vez que estés satisfecho con el resultado, simplemente descarga tus imágenes y compártelas con tus amigos y familiares. ¡Haz que tus recuerdos brillen con PhotoShur


## Iniciar el proyecto
  - npm install
  - npm run dev

## Publicar aplicación
  - npm build

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

