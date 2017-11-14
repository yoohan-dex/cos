import {configure} from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/TopBar/TopBar.stories');
  require('../src/components/BottomBar/BottomBar.stories');
  require('../src/components/AppBar/AppBar.stories');
  require('../src/components/AppBottomBar/AppBottomBar.stories');
  require('../src/components/ItemRow/ItemRow.stories');
  require('../src/components/ItemView/ItemView.stories');
  require('../src/components/DetailBar/DetailBar.stories');
}

configure(loadStories, module);
