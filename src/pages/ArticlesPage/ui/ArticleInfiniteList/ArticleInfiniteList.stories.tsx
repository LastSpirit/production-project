import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleInfiniteList } from "./ArticleInfiniteList";

const meta = {
  title: "pages/ArticlesPage/ArticleInfiniteList",
  component: ArticleInfiniteList,
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
