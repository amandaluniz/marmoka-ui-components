import * as React from 'react';

// Material - UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

// Non-dependent styles
const styles = createStyles({
  item: {
  paddingLeft: '20px',
},
});

export type CollapsableItemProps = {
  path: String;
  onClick: (path: String) => void;
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  text: 'List item' as 'List item',
  items: [] as [],
};

class CollapsableItemComponent extends React.Component<
	CollapsableItemProps & WithStyles,
	{}
> {
  static defaultProps = defaultProps;

  state = {
  open: false,
};

  onItemClick = () => {
  const { onClick, path } = this.props;
  const { open } = this.state;
  this.setState({
  open: !open,
});

  if (onClick && path) {
  onClick(path);
}
}

  renderChildren = () => {
  const { items = [], classes, onClick } = this.props;
  const { open } = this.state;
  return (
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List className={classes.item} component="nav">
					{items.map((item: any, i) => {
  return (
							<CollapsableItemComponent
								key={`item${i}`}
								classes={classes}
								text={item.text}
								items={item.items}
								path={item.path}
								onClick={onClick}
							/>
						);
})}
				</List>
			</Collapse>
		);
}

  renderAction = () => {
  const { open } = this.state;
  return open ? <ExpandLess /> : <ExpandMore />;
}

  render() {
  const { text, items } = this.props;

  const hasMore = items && items.length > 0;
  return (
			<React.Fragment>
				<ListItem button onClick={this.onItemClick}>
					<ListItemText inset primary={text} />
					{hasMore && this.renderAction()}
				</ListItem>
				{hasMore && this.renderChildren()}
			</React.Fragment>
		);
}
}

export const CollapsableItem = withStyles(styles)(CollapsableItemComponent);
// export default withStyles(styles)(CollapsableItem);
