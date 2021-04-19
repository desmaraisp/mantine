import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';
import { HEADER_HEIGHT } from '../Layout/Header/Header.styles';

export const TABLE_OF_CONTENTS_WIDTH = 260;
export const TABLE_OF_CONTENTS_BREAKPOINT = 1080;

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      boxSizing: 'border-box',
      width: TABLE_OF_CONTENTS_WIDTH,
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[1]
      }`,

      [`@media (max-width: ${TABLE_OF_CONTENTS_BREAKPOINT}px)`]: {
        display: 'none',
      },
    },

    inner: {
      paddingTop: HEADER_HEIGHT + theme.spacing.md,
      paddingBottom: theme.spacing.xl,
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
    },

    items: {
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },

    link: {
      display: 'block',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      borderLeft: '1px solid transparent',
      padding: [8, theme.spacing.md],
      marginLeft: -1,
    },

    linkActive: {
      borderLeftColor: theme.colors.blue[5],
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[0],
      color: theme.colorScheme === 'dark' ? theme.colors.blue[0] : theme.colors.blue[8],
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },

    title: {
      marginLeft: theme.spacing.md,
    },
  }),
  { theming }
);
