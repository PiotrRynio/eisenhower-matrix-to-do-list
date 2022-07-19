import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyles, theme } from 'assets/styles/themes/primaryTheme';
import { fontsPaths } from 'assets/styles';
import { PageTitleProvider } from './appProviders';
import { TasksListsDragDropProvider } from './appProviders/TasksListsDragDropProvider';

export const AllAppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <HelmetProvider>
      <PageTitleProvider>
        <ThemeProvider theme={theme}>
          <TasksListsDragDropProvider>
            <Helmet>
              <meta name="description" content="Github searcher application" />
              <link rel="stylesheet" href={fontsPaths.primaryFont} />
            </Helmet>
            <GlobalStyles theme={theme} />

            {children}
          </TasksListsDragDropProvider>
        </ThemeProvider>
      </PageTitleProvider>
    </HelmetProvider>
  );
};
