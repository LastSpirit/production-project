import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./Page";

const meta = {
  title: "entities/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
