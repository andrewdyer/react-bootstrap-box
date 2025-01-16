![React + Bootstrap Box](https://raw.githubusercontent.com/andrewdyer/andrewdyer/refs/heads/main/assets/images/covers/react-bootstrap-box.png)

# 📦 React + Bootstrap Box

A versatile [React](https://react.dev/) component designed to apply [Bootstrap](https://getbootstrap.com/) utility classnames based on provided props.

## 📄 License

Licensed under MIT. Totally free for private or commercial projects.

## ✨ Introduction

The **React + Bootstrap Box** component simplifies applying Bootstrap utility classes in React. With an intuitive prop-driven API, it enables you to quickly and efficiently manage styles like borders, spacing, flexbox, typography, and more—all without manually writing classnames.

## 🚀 Getting Started

To install this package use npm:

```bash
npm install bootstrap react-bootstrap-box
```

## 📖 Usage

### Including Bootstrap CSS

First, ensure Bootstrap CSS is included in your project:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Using the Box Component

In your `App.tsx`, or any other component, the `Box` component can be used:

```tsx
import React from 'react';

import { Box } from 'react-bootstrap-box';

const App = () => {
    return (
        <Box background="primary" color="white" margin="2" padding="5">
            Hello, world!
        </Box>
    );
};

export default App;
```

### 📚 Learn More

Discover the full potential of the **React + Bootstrap Box** component by exploring its [Storybook documentation](https://box.andrewdyer.rocks/), where you’ll find live examples, interactive demos, and detailed use cases for every prop.
