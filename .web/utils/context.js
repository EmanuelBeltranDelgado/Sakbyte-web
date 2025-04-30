import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
}
export const EventLoopContext = createContext(null);
export const clientStorage = {}

export const state_name = undefined

export const exception_state_name = undefined

export const onLoadInternalEvent = () => []

export const initialEvents = () => []

export const isDevMode = false

export const lastCompiledTimeStamp = "2025-04-30 16:49:26.051889"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext>
  )
}

export function StateProvider({ children }) {
  const dispatchers = useMemo(() => {
    return {
    }
  }, [])

  return (
      <DispatchContext value={dispatchers}>
        {children}
      </DispatchContext>
  )
}