/** @jsxImportSource @emotion/react */


import { Fragment, memo, useContext, useEffect, useState } from "react"
import { E, Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { WifiOff as LucideWifiOff } from "lucide-react"
import { keyframes } from "@emotion/react"
import env from "$/env.json"
import { Box as RadixThemesBox, Text as RadixThemesText } from "@radix-ui/themes"
import { toast, Toaster } from "sonner"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`



export const DefaultOverlayComponents = memo(({}) => {
    

  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast = refs['__toast'];
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  const [waitedForBackend, setWaitedForBackend] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast?.error(("Cannot connect to server: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')+"."), {...toast_props, onDismiss: () => setUserDismissed(true)},)
        }
    } else {
        toast?.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors, waitedForBackend]))



    return(
        <Fragment>

<div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment>

{(connectErrors.length > 0) ? (
  <Fragment>

<LucideWifiOff css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</div>
<Fragment/>
</Fragment>
      )

})

export const MemoizedBadge = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)




    return(
        <a css={({ ["position"] : "fixed", ["bottom"] : "1rem", ["right"] : "1rem", ["display"] : "flex", ["flexDirection"] : "row", ["gap"] : "0.375rem", ["alignItems"] : "center", ["width"] : "auto", ["borderRadius"] : "0.5rem", ["color"] : ((resolvedColorMode === "light") ? "#E5E7EB" : "#27282B"), ["border"] : ((resolvedColorMode === "light") ? "1px solid #27282B" : "1px solid #E5E7EB"), ["backgroundColor"] : ((resolvedColorMode === "light") ? "#151618" : "#FCFCFD"), ["padding"] : "0.375rem", ["transition"] : "background-color 0.2s ease-in-out", ["boxShadow"] : "0 1px 2px 0 rgba(0, 0, 0, 0.05)", ["zIndex"] : "9998", ["cursor"] : "pointer", ["align"] : "center", ["textAlign"] : "center" })} href={"https://reflex.dev"} target={"_blank"}>

<svg css={({ ["fill"] : "white", ["viewBox"] : "0 0 16 16" })} height={"16"} width={"16"} xmlns={"http://www.w3.org/2000/svg"}>

<rect css={({ ["fill"] : "#6E56CF" })} height={"16"} rx={"2"} width={"16"}/>
<path css={({ ["fill"] : "white" })} d={"M10 9V13H12V9H10Z"}/>
<path css={({ ["fill"] : "white" })} d={"M4 3V13H6V9H10V7H6V5H10V7H12V3H4Z"}/>
</svg>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesText as={"p"} css={({ ["color"] : "var(--slate-1)", ["fontWeight"] : "600", ["fontFamily"] : "'Instrument Sans', sans-serif", ["--default-font-family"] : "'Instrument Sans', sans-serif", ["fontSize"] : "0.875rem", ["lineHeight"] : "1rem", ["letterSpacing"] : "-0.00656rem" })}>

{"Built with Reflex"}
</RadixThemesText>
</RadixThemesBox>
</a>
      )

})

export const MemoizedToastProvider = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast



    return(
        <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
      )

})
