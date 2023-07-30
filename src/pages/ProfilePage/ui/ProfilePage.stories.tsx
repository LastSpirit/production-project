import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePage from "./ProfilePage";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: "admin",
          age: 22,
          country: Country.Ukraine,
          lastname: "Dmitriy",
          first: "asd",
          city: "dsag",
          currency: Currency.USD,
        },
      },
    }),
  ],
};
export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: "admin",
          age: 22,
          country: Country.Ukraine,
          lastname: "Dmitriy",
          first: "asd",
          city: "dsag",
          currency: Currency.USD,
        },
      },
    }),
  ],
};
