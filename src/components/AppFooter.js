import React from 'react';
import { CFooter } from '@coreui/react';

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.energidutautama.co.id/" target="_blank" rel="noopener noreferrer">
          E-DINES
        </a>
        <span className="ms-1">&copy; 2022 Energi Duta Utama.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
