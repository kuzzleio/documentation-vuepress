---
layout: full.html.hbs
title: zrem
---

# zrem

<SinceBadge version="1.0.0" />

Removes members from a sorted set.

[[_Redis documentation_]](https://redis.io/commands/zrem)

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrem/<_id>
Method: DELETE
Body:
```

```js
{
  "members": ["member1", "member2", "..."]
}
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "zrem",
  "_id": "<key>",
  "body": {
    "members": ["member1", "member2", "..."]
  }
}
```

---

## Arguments

- `_id`: sorted set identifier

---

## Body properties

- `members`: an array of member values to remove from the sorted set

---

## Response

Returns the number of removed members.

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "zrem",
  "collection": null,
  "index": null,
  "result": 3
}
```