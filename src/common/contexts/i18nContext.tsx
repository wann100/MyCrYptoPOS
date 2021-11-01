import { createContext,} from 'react';
import { Locales, SupportedLocales } from '../../common/types';
export type I18nContextType = {
  supportedLocales: SupportedLocales;
  dateDnsLocales: Locales;
};


export const I18nContext = createContext<I18nContextType>({
  supportedLocales: [],
  dateDnsLocales: {},
});

export {default as I18nContextProvider} from './I18nContextProvider'
