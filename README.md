# NOT MAINTAINED

Firefox has released a version with support for MediaSession API and Amazon Music is using it, so this extension is
not necessary anymore. It Just Works™ out of the box.

# amazon-music-remote-controller

Control Amazon Music player from anywhere.

Currently supports toggling play/pause and jumping to next and to previous track.

## How it works

There are three components to make this work:

- A [daemon](./daemon) that creates a [WebSocket](https://en.wikipedia.org/wiki/WebSocket) server on your computer
- A [client](./client) application that communicates with the daemon and sends commands like "play" or "next"
- A [browser extension](./extension) that connects to the WebSocket and interacts with the playback controls

## How to run

This is REALLY not production ready. But, if you want to try, here's how:

1. Clone this repository and install dependencies for `client` and `daemon` using pnpm (or yarn or npm).
2. In one terminal, run the daemon with `node index.js` (`cd daemon` first, if not already there)
3. Load the extension in developer/debugging mode ([installing on Firefox][1])
4. Use the client: `./client toggle`

Then, you can configure a keybindind to call the client script for any key combination you like (I use Super+Space).

## Disclaimer

This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with
Amazon.com, Inc., or any of its subsidiaries or its affiliates.


[1]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing
