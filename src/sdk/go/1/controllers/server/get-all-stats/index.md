---
code: true
type: page
title: GetAllStats
description: Gets all stored internal statistic snapshots.
---

# GetAllStats



Gets all stored internal statistic snapshots.
By default, snapshots are made every 10 seconds and they are stored for 1 hour.

These statistics include:

- the number of connected users per protocol (not available for all protocols)
- the number of ongoing requests
- the number of completed requests since the last frame
- the number of failed requests since the last frame

## Arguments

```go
func (s *Server) GetAllStats(options types.QueryOptions) (json.RawMessage, error)
```

| Arguments | Type               | Description                         | Required |
| --------- | ------------------ | ----------------------------------- | -------- |
| `options` | types.QueryOptions | An object containing query options. | no       |

### **Options**

Additional query options

| Option     | Type | Description                                                                  | Default |
| ---------- | ---- | ---------------------------------------------------------------------------- | ------- |
| `Queuable` | bool | If true, queues the request during downtime, until connected to Kuzzle again | `true`  |

## Return

Returns all stored internal statistic snapshots as a `json.RawMessage` or a `KuzzleError`. See how to [handle error](/sdk/go/1/error-handling).

## Usage

<<< ./snippets/get-all-stats.go
