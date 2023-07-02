import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
};

export const Error: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Description Description Description Description",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: "Title lorem ipsun",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: "Description Description Description Description",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    text: "Description Description Description Description",
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeM: Story = {
  args: {
    text: "Description Description Description Description",
    size: TextSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
  args: {
    text: "Description Description Description Description",
    size: TextSize.S,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
