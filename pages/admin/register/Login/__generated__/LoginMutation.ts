/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login {
  token: string
}

export interface LoginMutation {
  login: LoginMutation_login
}

export interface LoginMutationVariables {
  email: string
  password: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum QuestionTypes {
  PASSWORD = "PASSWORD",
  SWITCH = "SWITCH",
  TEXT = "TEXT"
}

export enum StripeIntervalEnum {
  day = "day",
  month = "month",
  week = "week",
  year = "year"
}

/**
 *
 */
export interface AnswerQuestionnaireInput {
  questionId: string
  answer: string
  answerId?: string | null
}

//==============================================================
// END Enums and Input Objects
//==============================================================
