/** @jsxImportSource @emotion/react */


import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"
import { jsx } from "@emotion/react"
import { Fragment } from "react"



export default function Document() {
  return (
    jsx(
Html,
{lang:"en"},
jsx(
Head,
{},
jsx(Script,{src:"https://www.googletagmanager.com/gtag/js?id=G-G756F9B5L5",strategy:"afterInteractive"},)
,jsx(
Script,
{strategy:"afterInteractive"},
"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-G756F9B5L5');\n            "
,),),jsx(
"body",
{},
jsx(Main,{},)
,jsx(NextScript,{},)
,),)
  )
}
