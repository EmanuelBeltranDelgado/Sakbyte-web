/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import dynamic from "next/dynamic"
import { isTrue } from "$/utils/state"
import NextHead from "next/head"
import { jsx } from "@emotion/react"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["position"] : "sticky", ["zIndex"] : "999", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["background"] : "rgba(255, 242, 244, 0.4)", ["backdropFilter"] : "blur(1px)", ["top"] : "0", ["width"] : "100%" }),direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
NextLink,
{href:"/",passHref:true},
jsx("img",{alt:"Logo sakbyte",css:({ ["width"] : "200px", ["transition"] : "transform 0.8s ease", ["&:hover"] : ({ ["transform"] : "scale(1.04)" }) }),src:"/png/sakbyte_logo.png"},)
,),),),jsx(ReactPlayer,{controls:false,css:({ ["position"] : "fixed", ["width"] : "1920px", ["height"] : "1080px", ["objectFit"] : "cover", ["zIndex"] : "-1", ["playsInline"] : true, ["autoPlay"] : true, ["preload"] : "auto" }),height:null,loop:true,muted:true,playing:true,url:"/mp4/bg_animation_sakbyte_optimized.mp4",width:null},)
,jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["maxWidth"] : "560px", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginInlineStart"] : "1em", ["marginInlineEnd"] : "1em" }),direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"7"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"4"},
jsx(RadixThemesAvatar,{css:({ ["name"] : "Enamuel Beltran", ["height"] : "auto" }),size:"7",src:"/png/logo.png"},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#000000" }),size:"4",trim:"end"},
"Emanuel Beltran"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#0c0c0c" }),trim:"start"},
"@emanuel"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://github.com/EmanuelBeltranDelgado",passHref:true},
jsx("img",{alt:"Github",css:({ ["width"] : "1.5em", ["transition"] : "transform 0.3s ease", ["&:hover"] : ({ ["transform"] : "scale(1.1)" }) }),src:"/svg/github.svg"},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://www.linkedin.com/in/emanuel-beltran-delgado-779b2a31b/",passHref:true},
jsx("img",{alt:"Linkedin",css:({ ["width"] : "1.5em", ["transition"] : "transform 0.3s ease", ["&:hover"] : ({ ["transform"] : "scale(1.1)" }) }),src:"/svg/linkedin.svg"},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"mailto:emanuel.beltran5853@alumnos.udg.mx",passHref:true},
jsx("img",{alt:"Email",css:({ ["width"] : "1.5em", ["transition"] : "transform 0.3s ease", ["&:hover"] : ({ ["transform"] : "scale(1.1)" }) }),src:"/svg/email.svg"},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://wa.link/6iss18",passHref:true},
jsx("img",{alt:"WhatsApp",css:({ ["width"] : "1.5em", ["transition"] : "transform 0.3s ease", ["&:hover"] : ({ ["transform"] : "scale(1.1)" }) }),src:"/svg/whatsapp.svg"},)
,),),),),),jsx(
Fragment,
{},
(true ? (jsx(
Fragment,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},
jsx(
RadixThemesFlex,
{css:({ ["width"] : "100%" })},
jsx(
RadixThemesBox,
{css:({ ["color"] : "#000000" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["fontWeight"] : "bold", ["color"] : "#CF3897" })},
"+4"
,)," projects carried out"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesBox,
{css:({ ["color"] : "#000000" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["fontWeight"] : "bold", ["color"] : "#CF3897" })},
"+2"
,)," Years programming in Python"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesBox,
{css:({ ["color"] : "#000000" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["fontWeight"] : "bold", ["color"] : "#CF3897" })},
""
,)," CCNA"
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["textAlign"] : "justify", ["color"] : "#000000" })},
"Highly motivated Software Developer with a recent degree \n                    and hands-on experience in Python, C, and C++. \n                    I possess a strong foundation in software development principles \n                    and a proven ability to solve complex problems. \n                    Eager to contribute to challenging projects \n                    and accelerate my professional growth within a dynamic IT environment."
,),),)) : (jsx(Fragment,{},)
)),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" }),size:"4"},
"My networks"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://github.com/EmanuelBeltranDelgado",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"GITHUB",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/github.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"GITHUB"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"Overview"
,),),),),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://www.linkedin.com/in/emanuel-beltran-delgado-779b2a31b/",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"Linkedin",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/linkedin.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"Linkedin"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"LinkedIn profile"
,),),),),),),jsx(
RadixThemesHeading,
{css:({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" }),size:"4"},
"Contact"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"mailto:emanuel.beltran5853@alumnos.udg.mx",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"Email",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/email.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"Email"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"Contact me by email"
,),),),),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://wa.link/6iss18",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"WhatsApp",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/whatsapp.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"WhatsApp"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"Contact me on WhatsApp"
,),),),),),),jsx(
RadixThemesHeading,
{css:({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" }),size:"4"},
"Projects"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://github.com/EmanuelBeltranDelgado/Noticias",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"News",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/github.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"News"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"Mobile news app"
,),),),),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://github.com/EmanuelBeltranDelgado/Sakbyte-web",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"Web page",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/github.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"Web page"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"Contact web page"
,),),),),),),jsx(
RadixThemesHeading,
{css:({ ["width"] : "100%", ["paddingTop"] : "1em", ["color"] : "#000000" }),size:"4"},
"Others"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" }),download:false,target:(false ? "_blank" : "")},
jsx(
NextLink,
{href:"/chatbot",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.8em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#ffb7c5", ["whiteSpace"] : "normal", ["&:hover"] : ({ ["backgroundColor"] : "#ff849c" }) })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"row",gap:"3"},
jsx("img",{alt:"Chat bot",css:({ ["width"] : "3em", ["height"] : "3em" }),src:"/svg/chat_bot.svg"},)
,jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "1em", ["color"] : "#000000" })},
"Chat bot"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["width"] : "100%", ["fontSize"] : "0.8em", ["color"] : "#0c0c0c" })},
"Chat with AI and have fun"
,),),),),),),),),),jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["marginTop"] : "84px", ["marginBottom"] : "24px", ["color"] : "#000000", ["width"] : "100%" }),direction:"column",gap:"3"},
jsx("img",{alt:"Cherry blossom",css:({ ["width"] : "40px" }),src:"/ico/logo.ico"},)
,jsx(
RadixThemesText,
{as:"p"},
"2024-2025 Sakbyte V4"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["color"] : "#ff849c" }),target:(true ? "_blank" : ""),trim:"start"},
jsx(
NextLink,
{href:"https://www.colorhexa.com/ffb7c5",passHref:true},
"The best season to bloom"
,),),),),jsx(
NextHead,
{},
jsx(
"title",
{},
"Sakbyte"
,),jsx("meta",{content:"Personal contact website created in Reflex 100% Python",name:"description"},)
,jsx("meta",{content:"/ico/logo.ico",property:"og:image"},)
,jsx("meta",{content:"Sakbyte",name:"og:title"},)
,jsx("meta",{content:"Personal contact website created in Reflex 100% Python",name:"og:description"},)
,jsx("meta",{content:"/ico/logo.ico",name:"og:image"},)
,jsx("meta",{content:"website",name:"og:type"},)
,),)
  )
}
