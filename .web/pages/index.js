/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["position"] : "sticky", ["zIndex"] : "999", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "0.8em", ["paddingBottom"] : "0.8em", ["background"] : "#fff2f4", ["top"] : "0", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#000000", ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa" })} size={"7"} weight={"light"}>

{"Sakura Blossom Dev"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "560px", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginInlineStart"] : "1em", ["marginInlineEnd"] : "1em" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"8"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<RadixThemesAvatar color={"pink"} fallback={"EB"} size={"7"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#000000" })} size={"4"} trim={"end"}>

{"Emanuel Beltran"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#0c0c0c" })} trim={"start"}>

{"@emanuel"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/EmanuelBeltranDelgado"} passHref={true}>

<img alt={"Github"} css={({ ["width"] : "1.5em" })} src={"github.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/emanuel-beltran-delgado-779b2a31b/"} passHref={true}>

<img alt={"Linkedin"} css={({ ["width"] : "1.5em" })} src={"linkedin.svg"}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["width"] : "100%" })}>

<RadixThemesBox css={({ ["color"] : "#000000" })}>

<RadixThemesText as={"span"} css={({ ["fontWeight"] : "bold", ["color"] : "#CF3897" })}>

{"+4"}
</RadixThemesText>
{" projects carried out"}
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesBox css={({ ["color"] : "#000000" })}>

<RadixThemesText as={"span"} css={({ ["fontWeight"] : "bold", ["color"] : "#CF3897" })}>

{"+2"}
</RadixThemesText>
{" Years programming in Python"}
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
{"CCNA"}
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["textAlign"] : "justify", ["color"] : "#000000" })}>

{"Highly motivated Software Developer with a recent degree \n                and hands-on experience in Python, C, and C++. \n                I possess a strong foundation in software development principles \n                and a proven ability to solve complex problems. \n                Eager to contribute to challenging projects \n                and accelerate my professional growth within a dynamic IT environment."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" })} size={"4"}>

{"My networks"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/EmanuelBeltranDelgado"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"GITHUB"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"github.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"GITHUB"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Overview"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/emanuel-beltran-delgado-779b2a31b/"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"Linkedin"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"linkedin.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Linkedin"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"LinkedIn profile"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesHeading css={({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" })} size={"4"}>

{"Projects"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.facebook.com/"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"Facebook"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"facebook.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Facebook"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Pagina de facebook"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.colorhexa.com/ffb7c5"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"Color cherry blossom"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"colorhexa.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Color cherry blossom"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Pagina de colores"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["marginBottom"] : "24px", ["color"] : "#000000", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<img alt={"Cherry blossom"} css={({ ["width"] : "40px" })} src={"sakura.ico"}/>
<RadixThemesText as={"p"}>

{"2024-2025 Sakura Blossom V4"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["color"] : "#ff849c" })} target={(true ? "_blank" : "")} trim={"start"}>

<NextLink href={"https://www.colorhexa.com/ffb7c5"} passHref={true}>

{"The best season to bloom"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
<NextHead>

<title>

{"Sakura Blossom Dev"}
</title>
<meta content={"Hello, my name is Emanuel. I'm an electronics and computer engineer."} name={"description"}/>
<meta content={"sakura.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
