---
code: true
type: page
title: notify
---

# notify

Asks the protocol to send data to a specific connection, on some of its [channels](/core/1/protocols/essentials/getting-started/#channels-default).

---

## Arguments

`notify(channels, connectionId, payload)`

- `channels` | <pre>string[]</pre> | list of channels
- `connectionId` | <pre>string</pre> | connection unique identifier, previously registered by the protocol using [newConnection](/core/1/protocols/entrypoint/newconnection)
- `payload` | <pre>object</pre> | data payload

---

## Return

The `notify` function is not expected to return a value.
