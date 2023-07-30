import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

export const getScrollSavePosition = (state: StateSchema) =>
  state.scrollSave?.scroll;
export const getScrollSaveByPath = createSelector(
  getScrollSavePosition,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
