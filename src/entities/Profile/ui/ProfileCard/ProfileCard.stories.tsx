import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.png";
import { ProfileCard } from "./ProfileCard";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: "admin",
      age: 22,
      country: Country.Ukraine,
      lastname: "Dmitriy",
      first: "asd",
      city: "dsag",
      currency: Currency.USD,
      avatar,
    },
  },
};
export const WithError: Story = {
  args: {
    error: "true",
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
