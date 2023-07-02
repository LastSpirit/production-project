/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
  title: "shared/Stack/Flex",
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    direction: "row",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap4: Story = {
  args: {
    direction: "row",
    gap: "4",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap8: Story = {
  args: {
    direction: "row",
    gap: "8",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap16: Story = {
  args: {
    direction: "row",
    gap: "16",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap32: Story = {
  args: {
    direction: "row",
    gap: "32",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const ColumnGap16: Story = {
  args: {
    direction: "column",
    gap: "16",
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};
