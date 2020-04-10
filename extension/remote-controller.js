const defaultOptions = {
  wsAddress: 'ws://localhost:4342',
};

browser.storage.local.get(defaultOptions).then((options) => {
  const ws = new WebSocket(options.wsAddress);
  ws.addEventListener('message', (event) => {
    switch (event.data) {
      case 'toggle':
        document.querySelector('.playbackControlsView .button.playButton').click();
        break;
    }
  });
});
