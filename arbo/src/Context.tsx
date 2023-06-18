import { createContext, useContext } from "react";
import { user_session } from "./utils/types";

// User context configuration
export interface UserContextState {
  userState? : user_session,
  setUserState? : (session : user_session) => void,
};

export const STD_USER_STATE : user_session = {logado: false,};
export const STD_USER_CONTEXT_STATE : UserContextState = {};

export const UserContext = createContext(STD_USER_CONTEXT_STATE);
export const useUserState = () => useContext(UserContext);

export interface SidebarContextState {
  sidebarState? : boolean,
  setSidebarState? : (state: boolean) => void,
};

export const STD_SIDEBAR_CONTEXT_STATE : SidebarContextState = {};

export const SidebarContext = createContext(STD_SIDEBAR_CONTEXT_STATE);
export const useSidebarState = () => useContext(SidebarContext);