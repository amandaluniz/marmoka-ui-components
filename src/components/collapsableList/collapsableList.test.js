import React from 'react';
import { shallow } from 'enzyme';
import OpCollapsableList from './OpCollapsableList';

describe('<OpCollapsableList />', () => {
  const component = shallow(
    <OpCollapsableList
      subheader="Documentation"
      items={[
        {
          text: 'Introduction',
          items: [
            {
              text: 'Getting started'
            },
            {
              text: 'Tutorial',
              items: [
                {
                  text: 'Navigation'
                }
              ]
            },
            {
              text: 'Installation'
            }
          ]
        }
      ]}
    />
  );

  it('renders', () => {
    expect(component.html()).toContain('Documentation');
  });
});
