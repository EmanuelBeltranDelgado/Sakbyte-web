/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { isTrue } from "$/utils/state"
import NextHead from "next/head"



export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["position"] : "sticky", ["zIndex"] : "999", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "0.8em", ["paddingBottom"] : "0.8em", ["background"] : "#fff2f4", ["top"] : "0", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "#000000", ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa" })} size={"7"} weight={"light"}>

{"Sakura Blossom Dev"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "560px", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginInlineStart"] : "1em", ["marginInlineEnd"] : "1em" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"7"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<RadixThemesAvatar css={({ ["name"] : "Enamuel Beltran", ["height"] : "auto", ["border"] : "3px solid #E8A9B7" })} size={"8"} src={"/sakura_blossom_dev_logo.png"}/>
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

<img alt={"Github"} css={({ ["width"] : "1.5em" })} src={"/github.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/emanuel-beltran-delgado-779b2a31b/"} passHref={true}>

<img alt={"Linkedin"} css={({ ["width"] : "1.5em" })} src={"/linkedin.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"mailto:emanuel.beltran5853@alumnos.udg.mx"} passHref={true}>

<img alt={"Email"} css={({ ["width"] : "1.5em" })} src={"/email.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://wa.me/c\u00f3digo_pa\u00edsn\u00famero_completo"} passHref={true}>

<img alt={"WhatsApp"} css={({ ["width"] : "1.5em" })} src={"/whatsapp.svg"}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<Fragment>

{true ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

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
<RadixThemesBox css={({ ["color"] : "#000000" })}>

<RadixThemesText as={"span"} css={({ ["fontWeight"] : "bold", ["color"] : "#CF3897" })}>

{""}
</RadixThemesText>
{" CCNA"}
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["textAlign"] : "justify", ["color"] : "#000000" })}>

{"Highly motivated Software Developer with a recent degree \n                    and hands-on experience in Python, C, and C++. \n                    I possess a strong foundation in software development principles \n                    and a proven ability to solve complex problems. \n                    Eager to contribute to challenging projects \n                    and accelerate my professional growth within a dynamic IT environment."}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" })} size={"4"}>

{"My networks"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/EmanuelBeltranDelgado"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"GITHUB"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/github.svg"}/>
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

<img alt={"Linkedin"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/linkedin.svg"}/>
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

{"Contact"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"mailto:emanuel.beltran5853@alumnos.udg.mx"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"Email"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/email.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Email"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Contact me by email"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://wa.me/c\u00f3digo_pa\u00edsn\u00famero_completo"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"WhatsApp"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/whatsapp.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"WhatsApp"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Contact me on WhatsApp"}
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

<NextLink href={"https://github.com/EmanuelBeltranDelgado/Noticias"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"News"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/github.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"News"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Mobile news app"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/EmanuelBeltranDelgado/Sakura-Blossom-Dev-web"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"Web page"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/github.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Web page"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Contact web page"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesHeading css={({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" })} size={"4"}>

{"Others"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(false ? "_blank" : "")}>

<NextLink href={"/chatbot"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"Chat bot"} css={({ ["width"] : "3em", ["height"] : "3em" })} src={"/chat_bot.svg"}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Chat bot"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })}>

{"Chat with AI and have fun"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["marginTop"] : "84px", ["marginBottom"] : "24px", ["color"] : "#000000", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<img alt={"Cherry blossom"} css={({ ["width"] : "40px" })} src={"/sakura.ico"}/>
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
<meta content={"favicon.ico"} property={"og:image"}/>
<meta content={"Sakura Blossom Dev"} name={"og:title"}/>
<meta content={"Hello, my name is Emanuel. I'm an electronics and computer engineer."} name={"og:description"}/>
<meta content={"website"} name={"og:type"}/>
</NextHead>
</Fragment>
  )
}
