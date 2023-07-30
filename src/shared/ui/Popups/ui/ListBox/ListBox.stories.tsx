import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";

const meta = {
  title: "shared/Popups/ListBox",
  component: ListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
