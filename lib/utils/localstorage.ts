import { OnBoardingState } from "~/lib/reducers/OnboardingReducer"
import { AUTH_TOKEN } from "../constants/constants"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: OnBoardingState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (err) {
    // ignore
  }
}

export const saveToken = async (token: string) => {
  await localStorage.setItem(AUTH_TOKEN, token)
}
