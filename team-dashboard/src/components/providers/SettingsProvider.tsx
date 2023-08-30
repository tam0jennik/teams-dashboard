import { Accessor, createContext, createEffect, createSignal, useContext } from 'solid-js';
import { ITeamMate } from '../../models/Data';
import { useLocation } from '@solidjs/router';
import { decode, encode } from '../../utils/url.utils';

const defaultSettings: Array<ITeamMate> = [
  {
    name: 'Sergei Gladyshev',
    utcOffset: 3,
    startWork: new Date().setUTCHours(9, 30, 0, 0),
    endWork: new Date().setUTCHours(18, 0, 0, 0),
    gaps: [new Date().setUTCHours(12, 0, 0, 0), new Date().setUTCHours(15, 0, 0, 0)],
  },
  {
    name: 'Andrew Jackson',
    utcOffset: -1,
    startWork: new Date().setUTCHours(9, 30, 0, 0),
    endWork: new Date().setUTCHours(18, 0, 0, 0),
    gaps: [new Date().setUTCHours(13, 0, 0, 0), new Date().setUTCHours(16, 30, 0, 0)],
  },
  {
    name: 'Thomas Jefferson',
    utcOffset: 4,
    startWork: new Date().setUTCHours(10, 30, 0, 0),
    endWork: new Date().setUTCHours(19, 0, 0, 0),
    gaps: [new Date().setUTCHours(10, 0, 0, 0), new Date().setUTCHours(10, 30, 0, 0)],
  },
];
const testSettings = encode([defaultSettings[0]]);
console.log('last: ', testSettings);

export type SettingsContextValue = {
  settings: Accessor<Array<ITeamMate>>;
  setSettings: (v: Array<ITeamMate> | ((prev: Array<ITeamMate>) => Array<ITeamMate>)) => Array<ITeamMate>;
};

const SettingsContext = createContext<SettingsContextValue>();

export function SettingsProvider(props: any) {
  const [settings, setSettings] = createSignal(defaultSettings);

  const { search, pathname } = useLocation();
  createEffect(() => {
    const rawString = search.split('?list=')[1];
    const list = decode(rawString, defaultSettings);
    setSettings(list);
  });

  const store: SettingsContextValue = {
    settings,
    setSettings,
  };

  return <SettingsContext.Provider value={store}>{props.children}</SettingsContext.Provider>;
}

export const useSettings = () => {
  return useContext(SettingsContext);
};
