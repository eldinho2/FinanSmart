import React, { createContext, useState } from 'react';

interface OverlayContextProps {
  overlayOpen: boolean;
  toggleOverlay: () => void;
}

export const OverlayContext = createContext<OverlayContextProps>({
  overlayOpen: false,
  toggleOverlay: () => {},
});

export const OverlayProvider = ({ children }) => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen((prevState) => !prevState);
  };

  return (
    <OverlayContext.Provider value={{ overlayOpen, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
