# React Fluent UI | Fluent-UI-tutorial-using-react

in this project, i have learned the microsoft Fluent UI,
and also create the sub routes examples

### Preview of Fluent UI examples
![Preview of Fluent UI examples](https://github.com/rohitash-eng/fluent-UI-tutorial-using-react/blob/master/public/images/Screenshot%202025-07-29%20at%2012.19.36%E2%80%AFPM.png)



first we need to install the dependencies for Fluent UI

```bash
React version  - "react": "^18.2.0",
Node version - "node": "v23.10.0",
npm version - "npm": "10.9.2",
yarn version - 1.22.19

then we need to install the Fluent UI dependencies

"@fluentui/react": "^8.119.1",
"@fluentui/react-components": "^9.54.4",
"@uifabric/react-cards": "^0.119.27",
"react-router-dom": "^6.22.1",
```

then we need to add the fluentui initializer in index.tsx file

import { initializeIcons } from '@fluentui/react';

initializeIcons();

then we need to add the FluentProvider and webLightTheme

same as bootstrap we need to use the fluent ui component like

import { INavLinkGroup, Nav } from '@fluentui/react';

import { Button } from '@fluentui/react-components';

<Nav groups={links} styles={navStyle} />

We need to write the css in variable or object for example

const navStyle = {
    root: {
        backgroundColor: '#F5F5F5',
        paddingLeft: 0,
        height: '100vh',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    group: {
        padding: '0 2px',
    },
}

THAT IS FLUENT UI