import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import "app/styles/index.scss";

export const RouterDecorator = (StoryComponent: StoryFn) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
};
