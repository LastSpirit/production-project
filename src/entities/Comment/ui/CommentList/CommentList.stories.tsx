import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

const comments = [
  {
    id: "1",
    text: "some comment",
    user: { id: "1", username: "Vasya" },
  },
  {
    id: "2",
    text: "some comment 2",
    user: { id: "1", username: "Petya" },
  },
];

const meta = {
  title: "entities/Comment/CommentList",
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nomral: Story = {
  args: {
    comments,
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
