.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center top;
  z-index: -1;
  filter: brightness(0.4) blur(2px);
  background: #000;
}

.app {
  position: relative;
  z-index: 1;
}

.center-auth {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  /* vertical center */
  align-items: center;      /* horizontal center */
  position: relative;
  z-index: 1;
}
