---
layout: full.html.hbs
title: deleteSpecifications
---

# deleteSpecifications

<SinceBadge version="1.0.0" />

Deletes validation specifications for a data collection.

The request succeeds even if no specification exist for that data collection.

**_Note:_** an empty specification is implicitly applied to all collections. In a way, "no specification set" means "all documents are valid".

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_specifications
Method: DELETE
```

### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "deleteSpecifications",
}
```

---

## Arguments

- `collection`: data collection
- `index`: data index

---

## Response

Returns a confirmation that the specifications are deleted:

```js
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "deleteSpecifications",
  "controller": "collection",
  "result": true
}
```

---

## Possible errors

- [Common errors](/core/1/api/essentials/errors/#common-errors)
