/** @jsxImportSource @emotion/react */


import { memo, useContext } from "react"
import { E, isTrue, refs } from "$/utils/state"
import { toast, Toaster } from "sonner"
import { ColorModeContext } from "$/utils/context"




export const MemoizedToastProvider = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast



    return(
        <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
      )

})
