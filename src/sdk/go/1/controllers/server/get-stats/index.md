---
code: true
type: page
title: GetStats
description: Returns statistics snapshots within a provided timestamp range.
---

# GetStats



Returns statistics snapshots within a provided timestamp range.
By default, snapshots are made every 10 seconds and they are stored for 1 hour.

These statistics include:

- the number of connected users per protocol (not available for all protocols)
- the number of ongoing requests
- the number of completed requests since the last frame
- the number of failed requests since the last frame

## Arguments

```go
func (s *Server) GetStats(
  startTime *time.Time,
  stopTime *time.Time,
  options types.QueryOptions
) (json.RawMessage, error)
```

| Arguments   | Type               | Description                                                     | Required |
| ----------- | ------------------ | --------------------------------------------------------------- | -------- |
| `startTime` | time.Time          | begining of statistics frame set (timestamp or datetime format) | yes      |
| `stopTime`  | time.Time          | end of statistics frame set (timestamp or datetime format)      | yes      |
| `options`   | types.QueryOptions | An object containing query options.                             | no       |

### **Options**

Additional query options

| Option     | Type | Description                                                                  | Default |
| ---------- | ---- | ---------------------------------------------------------------------------- | ------- |
| `Queuable` | bool | If true, queues the request during downtime, until connected to Kuzzle again | `true`  |

## Return

Returns snapshots within the provided timestamp range as a `json.RawMessage` or a `KuzzleError`. See how to [handle error](/sdk/go/1/error-handling).

## Usage

<<< ./snippets/get-stats.go
