import { BrowserRouter } from "react-router-dom";

import "app/styles/index.scss";

export const RouterDecorator = (story: () => any) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
