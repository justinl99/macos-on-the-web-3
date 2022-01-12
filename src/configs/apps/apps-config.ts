import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: 'Wallpapers',
  resizable: true,

  height: 600,
  width: 800,
});

const calculator = createAppConfig({
  title: 'Calculator',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: 'Calendar',
  resizable: true,
});

const finder = createAppConfig({
  title: 'Finder',
  resizable: true,

  dockBreaksBefore: true,
});

const safari = createAppConfig({
  title: 'Safari',
  resizable: true,
});

const systemPreferences = createAppConfig({
  title: 'System Preferences',
  resizable: true,
});

const viewSource = createAppConfig({
  title: `View Source`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/hockerdiscord/macos-on-the-web-3', '_blank'),
});

// const devUtils = createAppConfig({
//   title: `DevUtils`,
//   resizable: true,

//   shouldOpenWindow: false,
//   externalAction: () => window.open('https://devutils.app/?ref=puru', '_blank'),

//   dockBreaksBefore: true,
// });

const vercel = createAppConfig({
  title: `Vercel`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://vercel.com/', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'App Store',
  resizable: true,
  
  shouldOpenWindow: false,
  externalAction: () =>
  window.open('https://www.apple.com/app-store/', '_blank'),
});

export const appsConfig = {
  wallpapers,
  calculator,
  calendar,
  finder,
  appstore,
  safari,

  'system-preferences': systemPreferences,

  'view-source': viewSource,

  vercel,
};
