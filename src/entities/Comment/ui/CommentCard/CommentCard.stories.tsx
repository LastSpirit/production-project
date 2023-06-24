import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";

const comment = {
  id: "1",
  text: "some comment",
  user: { id: "1", username: "Vasya" },
};

const meta = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nomral: Story = {
  args: {
    comment,
  },
};

export const Loding: Story = {
  args: {
    comment,
    isLoading: true,
  },
};
