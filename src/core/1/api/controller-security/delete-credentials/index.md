---
layout: full.html.hbs
title: deleteCredentials
---

# deleteCredentials

<SinceBadge version="1.0.0" />

Deletes user credentials for the specified authentication strategy.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<_id>
Method: DELETE
```

### Other protocols

```js
{
  "controller": "security",
  "action": "deleteCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>"
}
```

---

## Arguments

- `_id`: user [kuid](/core/1/guide/essentials/user-authentication/#kuzzle-user-identifier-kuid)
- `strategy`: authentication strategy name to remove

---

## Response

Returns an acknowledgement.

```javascript
{
  "status": 200,
  "error": null,
  "action": "deleteCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": {
    "acknowledged": true
  }
}
```
