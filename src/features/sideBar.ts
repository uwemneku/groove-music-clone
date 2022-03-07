import { createSlice } from "@reduxjs/toolkit";

type SideBarState = { isSideBarOpen: boolean };

const initialState: SideBarState = { isSideBarOpen: false };

const sdeBarSlice = createSlice({
  initialState,
  name: "sideBar",
  reducers: {
    toggleSideBar(state) {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleSideBar } = sdeBarSlice.actions;
export default sdeBarSlice.reducer;
