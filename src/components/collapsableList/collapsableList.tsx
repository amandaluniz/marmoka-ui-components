import * as React from 'react';

// Material-UI
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { CollapsableItem } from './collapsableItem';

type Item = {
  text: String;
  items?: Item[];
  path?: String;
};

type PropTypes = {
  onClick: (path: String) => void;
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  subheader: '',
  items: [] as Item[],
};

/**
 * OpCollapsableList component displays a list that is expandable and collapsable
 * Development Completion Status: In Progress
 *
 * Status Details: Prop types for agnostic addition of iconbuttons.
 *
 * @example ./examples.md
 *
 */
export class CollapsableList extends React.Component<PropTypes, {}> {
  static defaultProps = defaultProps;
  state = {
  open: false,
};

  render() {
  const { subheader, items = [], onClick } = this.props;
  return (
			<List
				component="nav"
				subheader={
					subheader ? (
						<ListSubheader component="div">{subheader}</ListSubheader>
					) : (
						undefined
					)
				}
			>
				{items.map((item: any, i) => {
  return (
						<CollapsableItem
							key={`item${i}`}
							text={item.text}
							items={item.items}
							onClick={onClick}
							path={item.path}
						/>
					);
})}
			</List>
		);
}
}

// export default CollapsableList;
