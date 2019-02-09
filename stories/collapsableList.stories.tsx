import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CollapsableList } from '../src/components/collapsableList';

storiesOf('CollapsableList', module)
	.add('One level list', () => (
		<CollapsableList
			subheader="Documentation"
			items={[
  {
    text: 'Getting started',
    path: 'getting-started',
  },
  {
    text: 'Tutorial',
    path: '/tutorial',
  },
  {
    text: 'Installation',
    path: 'installation',
  },
]}
			onClick={(path: string) => action(path)('clicked')}
		/>
	))
	.add(
		'Sample',
		() => (
			<CollapsableList
				subheader="Documentation"
				items={[
  {
    text: 'Introduction',
    items: [
  {
    text: 'Getting started',
    path: 'introduction/getting-started',
  },
  {
    text: 'Tutorial',
    items: [
  {
    text: 'Navigation',
    path: 'introduction/tutorial/navigation',
  },
],
  },
  {
    text: 'Installation',
    path: 'introduction/installation',
  },
],
  },
  {
    text: 'How to',
    path: 'how-to',
  },
]}
				onClick={(path: string) => action(path)('clicked')}
			/>
		),
  {
    info: { inline: true },
  },
	);
