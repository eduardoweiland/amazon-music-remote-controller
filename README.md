# amazon-music-remote-controller

Control Amazon Music player from anywhere.

## How it works

There are three components to make this work:

- A [daemon](./daemon) that creates a [WebSocket](https://en.wikipedia.org/wiki/WebSocket) server on your computer
- A [client](./client) application that communicates with the daemon and sends commands like "play" or "next"
- A [browser extension](./extension) that connects to the WebSocket and interacts with the playback controls

## Disclaimer

This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with
Amazon.com, Inc., or any of its subsidiaries or its affiliates.
