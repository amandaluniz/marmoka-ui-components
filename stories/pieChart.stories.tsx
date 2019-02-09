import React from "react";
import { storiesOf } from "@storybook/react";
import { Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module)
	.add("with text", () => <Welcome>Hello Button</Welcome>, {
		info: { inline: true }
	})
	.add(
		"with some emoji",
		() => (
			<Welcome>
				<span role="img" aria-label="so cool">
					😀 😎 👍 💯
				</span>
			</Welcome>
		),
		{ info: { inline: true } }
	);
