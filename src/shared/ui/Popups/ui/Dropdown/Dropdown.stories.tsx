/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";

const meta = {
  title: "shared/Popups/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: "first",
      },
      {
        content: "second",
      },
      {
        content: "third",
      },
    ],
  },
};
