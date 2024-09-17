'use client';

import type { PaletteMode } from '@mui/material';
import type * as React from 'react';
import { createContext, useContext, useReducer } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const initialMode = AppConfig.defaultTheme;

export const ModeContext: React.Context<PaletteMode> =
  createContext<PaletteMode>(initialMode);
export const ModeDispatchContext = createContext<any>(null);

export function useMode() {
  return useContext(ModeContext);
}
export function useModeDispatch() {
  return useContext(ModeDispatchContext);
}
export interface ModeActionInterface {
  type: 'load' | 'dark' | 'light' | 'toggle';
}
function modeReducer(state: PaletteMode, action: ModeActionInterface) {
  if (action.type === 'load') {
    return localStorage.getItem('color_mode') ?? initialMode;
  }
  if (action.type === 'dark') {
    return 'dark';
  }
  if (action.type === 'light') {
    return 'light';
  }
  if (action.type === 'toggle') {
    return state === 'dark' ? 'light' : 'dark';
  }
  return initialMode;
}

export function ModeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  const [mode, dispatch] = useReducer(modeReducer, initialMode);

  return (
    <ModeContext.Provider value={mode}>
      <ModeDispatchContext.Provider value={dispatch}>
        {children}
      </ModeDispatchContext.Provider>
    </ModeContext.Provider>
  );
}
