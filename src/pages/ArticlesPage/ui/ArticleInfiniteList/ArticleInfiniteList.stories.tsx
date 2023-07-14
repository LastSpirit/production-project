import type { Meta, StoryObj } from "@storybook/react";
import { ArticleInfiniteList } from "./ArticleInfiniteList";

const meta = {
  title: "entities/ArticleInfiniteList",
  component: ArticleInfiniteList,
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
