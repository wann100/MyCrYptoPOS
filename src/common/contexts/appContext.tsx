
import  { createContext } from 'react';
import {
  AppContext,

} from '../../common/types';
import { INIT_CONTEXT } from '../../common/assets';



export const appContext = createContext<AppContext>(INIT_CONTEXT);

export {default as AppContextProvider} from './AppContextProvider'