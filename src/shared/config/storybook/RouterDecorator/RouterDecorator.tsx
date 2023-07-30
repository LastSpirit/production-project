import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line spichka-fsd-plugin/layer-imports
import "@/app/styles/index.scss";

export const RouterDecorator = (StoryComponent: StoryFn) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
};
