import {configure, setAddon} from '@storybook/react';
import interoRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/ui/app.css';

function loadStories(){
    const context = require.context('../src/stories', true, /Story\.jsx$/)

    context.keys().forEach(srcFile => {
        interoRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);