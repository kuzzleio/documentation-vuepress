---
code: true
type: page
title: leaveChannel
---

# leaveChannel

Informs the protocol that one of its connected users left a [channel](/core/1/protocols/essentials/getting-started/#channels-default).

---

## Arguments

```js
leaveChannel(channel, connectionId);
```

<br/>

| Arguments      | Type              | Description                                                                                                                           |
| -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `channel`      | <pre>string</pre> | Left channel identifier                                                                                                               |
| `connectionId` | <pre>string</pre> | Connection unique identifier, previously registered by the protocol using [newConnection](/core/1/protocols/entrypoint/newconnection) |

---

## Return

The `leaveChannel` function is not expected to return a value.
