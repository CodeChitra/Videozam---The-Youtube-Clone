import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ChatType = {
  author: string;
  text: string;
};
const initialState: ChatType[] = [];
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<ChatType>) => {
      state.splice(20, 1);
      state.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addChat } = chatSlice.actions;
