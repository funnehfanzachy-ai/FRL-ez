# Fusion Reactor Laboratory — The Experiment Continues

A standalone browser-based first-person sci-fi reactor facility game. The scene, ship, consoles, reactor, starfield, displays, and procedural audio are original generated assets. This is fictional gameplay with invented simulation units and is not a real reactor or engineering simulator.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). The app and Socket.IO room backend run on the same origin. For a production build, run `npm run build` then `npm start`.

## Multiplayer

The Node/Socket.IO server owns room membership, room codes, player positions, reactor telemetry, event stages, and shared actions. Create a public or private room, share the code or use **Invite** to copy a join URL. Rooms support up to 16 players; the room browser shows live public rooms. Rooms live in server memory and are removed when the last player leaves or disconnects.

## Controls

- **W A S D** move · **Shift** sprint · **Space** jump · **C** crouch
- **Mouse** look · **E** operate the highlighted physical console or door
- **F** flashlight · **T** room chat · **Tab** crew list · **Esc** pause

The glowing cyan repair stations support cooperative recovery objectives. In sandbox rooms, the host can choose scenarios at the Sandbox Director terminal. Normal reactor ignition is a staged sequence; the room simulation continues on the backend and is synchronised for all connected players.

## Current build

Includes a cinematic space menu, live room browser, create/join/singleplayer flows, shareable invite links, first-person exploration, procedurally built multi-wing spacecraft, central animated reactor, physical control consoles, shared telemetry and event director, cooperative repair, emergency shutdown, evacuation, chat, nameplates, host migration, event archive, achievements, settings, subtitles/browser speech, and procedural Web Audio music/effects.

The scenario catalogue lives in `src/event-catalog.js`. Each entry defines rarity, duration, staged thresholds, intro text, a distinct recovery objective, ending text, visual/audio theme, and failure policy. The server's weighted event director allows exactly one incompatible major scenario at a time while permitting short secondary effects during escalation; sandbox hosts can launch any catalogue entry. Procedural Web Audio includes crossfaded theme profiles, tension layers, spatial HRTF panners, distance rolloff, speaker-positioned alarms, local interaction/footstep sounds, reactor ambience, and event-specific tones. Speech announcements use the browser's speech synthesis and synchronized subtitles.

## Publish a shareable multiplayer URL

The project is configured for a single Render web service (`render.yaml`). Push this folder to a GitHub repository, then create a Render service from that repository and deploy the blueprint. Render will build with `npm ci && npm run build` and start the Node + Socket.IO server with `npm start`; the resulting `https://…onrender.com` address is the public game URL. Share the site URL for the menu, or use the in-game **Invite** button to copy a room-specific join URL.

Use one server instance: room state is authoritative but currently stored in memory, so it resets if the instance restarts and isn't shared across multiple replicas. The Render free plan may spin down when idle.
