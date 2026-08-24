![React + Bootstrap Box](https://public-assets.dyerlabs.co.uk/images/repos/react-bootstrap-box.png)

# React + Bootstrap Box

A utility component library for React applications that maps typed props to responsive Bootstrap utility classes.

## Introduction

This library provides a typed React component that maps layout, spacing, display, flexbox, border, typography, position, sizing, visibility, and interaction props to corresponding responsive Bootstrap utility classes. The component can render as native elements or other React components while preserving their props and refs, allowing reusable interfaces to apply Bootstrap utilities through a consistent component API.

## Prerequisites

- **[Node.js](https://nodejs.org/)**: Version 22 or higher is required.
- **[React](https://react.dev/)**: Version 18.2 is required.
- **[Bootstrap](https://getbootstrap.com/)**: Version 5.3 or higher provides the utility CSS.

## Installation

```bash
npm install bootstrap react-bootstrap-box
```

```bash
yarn add bootstrap react-bootstrap-box
```

```bash
pnpm add bootstrap react-bootstrap-box
```

## Getting Started

First, ensure Bootstrap CSS is included in your project:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Usage

Use Box props to select Bootstrap utilities and the rendered React element.

### Applying utilities

Combine utility props to style a Box without assembling Bootstrap class names manually.

```tsx
import { Box } from 'react-bootstrap-box';

const Example = () => (
  <Box background="primary" color="white" margin="2" padding="5">
    Hello, world!
  </Box>
);
```

### Applying responsive utilities

Pass breakpoint values to responsive props to change utilities across viewport sizes.

```tsx
import { Box } from 'react-bootstrap-box';

const ResponsiveLayout = () => (
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    padding={{ xs: '2', md: '4' }}
  >
    Responsive content
  </Box>
);
```

### Rendering another element

Set the polymorphic as prop to change the rendered element while retaining its native props and ref type.

```tsx
import { Box } from 'react-bootstrap-box';

const Article = () => (
  <Box as="article" aria-labelledby="article-title" padding="4">
    <Box as="h2" id="article-title" fontSize="4">
      Polymorphic content
    </Box>
  </Box>
);
```

Complete utility examples and composition guidance are available in the [Storybook documentation](https://box.andrewdyer.rocks/).

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.
