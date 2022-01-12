export const contextMenuConfig = {
  default: {
    'new-folder': {
      title: 'New Folder',
      breakAfter: true,
    },
    'get-info': {
      title: 'Get Info',
      breakAfter: false,
      
        shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://github.com/hockerdiscord/macos-on-the-web-3', '_blank'),
    },
    'change-desktop-bg': {
      title: 'Change Desktop Background',
      breakAfter: true,
    },
    'use-stacks': {
      title: 'Use Stacks',
      breakAfter: false,
    },
    'sort-by': {
      title: 'Sort By',
      breakAfter: false,
    },
    'clean-up': {
      title: 'Clean Up',
      breakAfter: false,
    },
    'clean-up-by': {
      title: 'Clean Up By',
      breakAfter: false,
    },
    'show-view-options': {
      title: 'Show View Options',
      breakAfter: false,
    },
  },
};
