# React + TypeScript + Vite
This is a straightforward Todo List Application that enables users to input Todo List items based on categories. Users can select a category from a dropdown menu and enter the item using an input tag. The application then displays the items in tabbed panes categorized as All, Personal, Work, Educational, and Gym. The All tabbed pane shows all stored Todo List items, the Personal tabbed pane displays items categorized as Personal, the Work tabbed pane shows items categorized as Work, the Education tabbed pane displays items categorized as Educational, and the Gym tabbed pane shows items categorized as Gym. For the styling, I utilized a combination of custom CSS and Tailwind CSS.

To add a new Todo List item, users can write the item in the input tag, select the category from the dropdown menu, and click the Add button. The application stores tasks in the browser's local storage, ensuring that the Todo List items persist even after page refresh. Additionally, the application offers a checkbox feature to mark completed tasks. Checking a checkbox adds a strikethrough style to the corresponding task, providing visual distinction. Furthermore, each Todo List item is accompanied by a small delete button, allowing users to remove items individually. Both the checkbox and delete button are available for every item in the list.






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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
