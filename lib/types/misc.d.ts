import { RenderFunction } from "@storybook/react"
import * as React from "react"
import { StateType } from "typesafe-actions"
declare module "@storybook/react" {
  export interface Story {
    addWithJSX(storyName: string, callback: RenderFunction): this
  }
}
declare module "react-final-form" {
  export interface Story {
    addWithJSX(storyName: string, callback: RenderFunction): this
  }
}

declare module "react-jss" {
  export interface CSSProperties extends React.CSSProperties {
    composes?: string | string[]
  }

  export type StyleSheet<Props = {}> = Record<
    string,
    CSSProperties | ((props: Props) => React.CSSProperties)
  >

  type StyleRules<ClassKey extends string = string, Props = {}> = Record<
    ClassKey,
    CSSProperties | ((props: Props) => React.CSSProperties)
  >

  export type ClassNameMap<ClassKey extends string = string> = Record<
    ClassKey,
    string
  >

  export interface WithStyles<ClassKey extends string = string> {
    classes: ClassNameMap<ClassKey>
  }

  export interface StyledComponentProps<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>
  }

  function injectSheet<ClassKey extends string>(
    style: StyleRules<ClassKey>,
    options?: any,
  ): <P>(
    component: React.ComponentType<P & WithStyles<ClassKey>>,
  ) => React.ComponentType<P & StyledComponentProps<ClassKey>>
}
