---
code: true
type: page
title: disconnect
description: Disconnect the SDK
---

# disconnect

Closes the current connection to Kuzzle.  
The SDK is now in `offline` state.  
A call to `disconnect()` will not trigger a `disconnected` event. This event is only triggered on unexpected disconnection.

## Signature

```go
Disconnect() error
```

## Return

Return a [Kuzzle error](/sdk/go/1/error-handling) if the connection can't be closed.

## Usage

<<< ./snippets/disconnect.go
