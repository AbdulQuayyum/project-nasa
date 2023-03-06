import { useState } from "react"
import { Switch, Route } from "react-router-dom"
import { Frame, withSounds, withStyles } from "arwes"

import usePlanets from "../../../client/src/Hooks/UsePlanets"
import UseLaunches from "../../../client/src/Hooks/UseLaunches"

import Centered from "../../../client/src/Components/Centered"
import Header from "../../../client/src/Components/Header"
import Footer from "../../../client/src/Components/Footer"

import Launch from "../../../client/src/Views/Launch"
import History from "../../../client/src/Views/History"
import Upcoming from "../../../client/src/Views/Upcoming"

const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "auto",
  },
  centered: {
    flex: 1,
    paddingTop: "20px",
    paddingBottom: "10px",
  },
})

const Layout = props => {
  const { sounds, classes } = props

  const [frameVisible, setFrameVisible] = useState(true)
  const animateFrame = () => {
    setFrameVisible(false)
    setTimeout(() => {
      setFrameVisible(true)
    }, 600)
  }

  const onSuccessSound = () => sounds.success && sounds.success.play()
  const onAbortSound = () => sounds.abort && sounds.abort.play()
  const onFailureSound = () => sounds.warning && sounds.warning.play()

  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = UseLaunches(onSuccessSound, onAbortSound, onFailureSound)

  const planets = usePlanets()

  return <div className={classes.content}>
    <Header onNav={animateFrame} />
    <Centered className={classes.centered}>
      <Frame animate
        show={frameVisible}
        corners={4}
        style={{ visibility: frameVisible ? "visible" : "hidden" }}>
        {anim => (
          <div style={{ padding: "20px" }}>
            <Switch>
              <Route exact path="/">
                <Launch
                  entered={anim.entered}
                  planets={planets}
                  submitLaunch={submitLaunch}
                  isPendingLaunch={isPendingLaunch} />
              </Route>
              <Route exact path="/Launch">
                <Launch
                  entered={anim.entered}
                  planets={planets}
                  submitLaunch={submitLaunch}
                  isPendingLaunch={isPendingLaunch} />
              </Route>
              <Route exact path="/Upcoming">
                <Upcoming
                  entered={anim.entered}
                  launches={launches}
                  abortLaunch={abortLaunch} />
              </Route>
              <Route exact path="/History">
                <History entered={anim.entered} launches={launches} />
              </Route>
            </Switch>
          </div>
        )}
      </Frame>
    </Centered>
    <Footer />
  </div>
}

export default withSounds()(withStyles(styles)(Layout))