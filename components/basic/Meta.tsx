import * as React from "react"
import Head from "next/head"
// import "./fonts/demo.css"

export default class Meta extends React.PureComponent {
  public render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </div>
    )
  }
}
