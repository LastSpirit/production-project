import { StateSchema } from "app/providers/StoreProvider";

export const getAddCommenFormText = (state: StateSchema) =>
  state.addCommentForm?.text ?? "";
export const getAddCommenFormError = (state: StateSchema) =>
  state.addCommentForm?.error;
