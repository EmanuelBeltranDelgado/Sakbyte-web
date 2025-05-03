/** @jsxImportSource @emotion/react */


import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"



export default function Document() {
  return (
    <Html lang={"en"}>

<Head>

<Script src={"https://www.googletagmanager.com/gtag/js?id=G-G756F9B5L5"} strategy={"afterInteractive"}/>
<Script strategy={"afterInteractive"}>

{"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-G756F9B5L5');\n            "}
</Script>
</Head>
<body>

<Main/>
<NextScript/>
</body>
</Html>
  )
}
