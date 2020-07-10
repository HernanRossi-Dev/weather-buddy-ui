import React, { createContext, useReducer, useContext, useEffect } from "react"
import { AppState } from "../interfaces/ContextInterface"
import { Action } from "../types/AppContextTypes"

const appData: AppState = {
  weatherData: undefined,
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_WEATHER_DATA": {
      return {
        weatherData: action.payload
      }
    }
  }
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<Action>
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const persistedState = localStorage.getItem("state")
  let localState = appData
  if (persistedState) {
    localState = JSON.parse(persistedState)
  }

  const [state, dispatch] = useReducer(appStateReducer, localState)

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }} >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}