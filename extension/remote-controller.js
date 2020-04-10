(function() {
  const ws = new WebSocket('ws://localhost:4342');
  ws.addEventListener('message', (event) => {
    switch (event.data) {
      case 'toggle':
        document.querySelector('.playbackControlsView .button.playButton').click();
        break;
    }
  });
})();
