'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#007ACC"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;