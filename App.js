import React from "react";
import Routes from "./src/routes";
import { OverlayProvider } from './src/contexts/OverlayContext';

export default function App() {
  return (
    <OverlayProvider>
      <Routes />
    </OverlayProvider>
  )
}
