import { useContext, useEffect } from 'react';
import { PageTabTitleContext } from 'providers';
import { SHORT_APP_NAME } from 'constants/names';

export const usePageTitle = (newPageTitle?: string) => {
  const usePageTabTitle = useContext(PageTabTitleContext);
  const { setPageTitle } = usePageTabTitle;

  useEffect(() => {
    if (!!newPageTitle) {
      setPageTitle(newPageTitle || SHORT_APP_NAME);
    }
  }, [setPageTitle, newPageTitle]);

  return usePageTabTitle;
};
