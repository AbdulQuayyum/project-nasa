import { BrowserRouter as Router } from "react-router-dom"
import {
  Arwes,
  SoundsProvider,
  ThemeProvider,
  createSounds,
} from "arwes"

import { createTheme } from '@arwes/design'

import Layout from "./Layout/Layout"

import { theme, resources, sounds } from "./Utilities/Settings"

const App = () => {
  return <ThemeProvider theme={createTheme(theme)}>
    <SoundsProvider sounds={createSounds(sounds)}>
      <Arwes animate background={resources.background.large} pattern={resources.pattern}>
        {anim => (
          <Router>
            <Layout show={anim.entered} />
          </Router>
        )}
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
}

export default App
