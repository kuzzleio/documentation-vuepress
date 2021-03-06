---
code: true
type: page
title: exists
---

# exists



Checks whether a collection exists.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_exists
Method: GET
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "exists"
}
```

---

## Arguments

- `collection`: data collection
- `index`: data index

---

## Response

Returns a boolean telling whether the provided data collection exists:

```js
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "exists",
  "requestId": "<unique request identifier>",
  "result": true
}
```

---

## Possible errors

- [Common errors](/core/1/api/essentials/errors/#common-errors)
