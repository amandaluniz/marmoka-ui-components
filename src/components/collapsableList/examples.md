**Status: WIP**
Basic example of the OpCollapsableList component

```jsx
<OpCollapsableList
	subheader="Documentation"
	items={[
		{
			text: "Introduction",
			items: [
				{
					text: "Getting started",
					path: "introduction/getting-started"
				},
				{
					text: "Tutorial",
					items: [
						{
							text: "Navigation",
							path: "introduction/tutorial/navigation"
						}
					]
				},
				{
					text: "Installation",
					path: "introduction/installation"
				}
			]
		},
		{
			text: "How to",
			path: "how-to"
		}
	]}
	onClick={path => console.log("Path clicked", path)}
/>
```
