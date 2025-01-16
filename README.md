![React + Bootstrap Box](https://raw.githubusercontent.com/andrewdyer/andrewdyer/refs/heads/main/assets/images/covers/react-bootstrap-box.png)

# 📦 React + Bootstrap Box

A versatile [React](https://react.dev/) component designed to apply [Bootstrap](https://getbootstrap.com/) utility classnames based on provided props.

## 📄 License

Licensed under MIT. Totally free for private or commercial projects.

## ✨ Introduction

The React + Bootstrap Box component simplifies the process of applying Bootstrap utility classes to your React components. By using props, you can easily manage styles such as borders, margins, paddings, flexbox, typography, and visual properties without manually adding classnames. This component is highly customizable and reusable, making it a great addition to any React project.

## 🚀 Getting Started

To install this package use npm:

```bash
npm install bootstrap react-bootstrap-box
```

## 📖 Usage

### Including Bootstrap CSS

First, ensure Bootstrap CSS is included in your project:

```tsx
// index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Using the Box Component

In your App.tsx, or any other component, the Box component can be used:

```tsx
import React from 'react';

import { Box } from 'react-bootstrap-box';

const MyComponent = () => {
    return (
        <Box background="primary" color="white" margin="2" padding="5">
            Hello, world!
        </Box>
    );
};

export default MyComponent;
```

### 📚 Learn More

Discover the full potential of the **React + Bootstrap Box** component by exploring its [Storybook documentation](https://box.andrewdyer.rocks/), where you’ll find live examples, interactive demos, and detailed use cases for every prop.
