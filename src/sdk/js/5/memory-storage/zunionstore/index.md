---
code: false
type: page
title: zunionstore
description: MemoryStorage:zunionstore
---

# zunionstore

Computes the union of the provided sorted sets and stores the result in the `destination` key.

If the destination key already exists, it is overwritten.

[[_Redis documentation_]](https://redis.io/commands/zunionstore)

---

## zunionstore(destination, keys, [options], callback)

| Arguments     | Type        | Description                      |
| ------------- | ----------- | -------------------------------- |
| `destination` | string      | Destination key identifier       |
| `keys`        | string      | List of sorted sets to intersect |
| `options`     | JSON Object | Optional parameters              |
| `callback`    | function    | Callback                         |

---

## Options

| Option      | Type    | Description                                                                                                 | Default |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| `aggregate` | string  | Specify how members' scores are aggregated during the intersection.<br/>Allowed values: `min`, `max`, `sum` | `sum`   |
| `queuable`  | boolean | Make this request queuable or not                                                                           | `true`  |
| `weights`   | array   | Specify a multiplication factor for each input sorted set                                                   | `[1]`   |

---

## Callback Response

Returns an integer containing the number of members in the stored union.

## Usage

<<< ./snippets/zunionstore-1.js

> Callback response:

```json
4
```
