---
code: true
type: page
title: deleteProfile
---

# deleteProfile



Deletes a security profile.

An error is returned if the profile is still in use.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_profiles/<_id>[?refresh=wait_for]
Method: DELETE
```

### Other protocols

```js
{
  "controller": "security",
  "action": "deleteProfile",
  "_id": "<profileId>"
}
```

---

## Arguments

- `_id`: profile identifier

### Optional:

- `refresh`: if set to `wait_for`, Kuzzle will not respond until the profile deletion is indexed

---

## Response

Returns the deleted profile identifier.

```javascript
{
  "status": 200,
  "error": null,
  "result": {
    "_id": "<profileId>"
  },
  "action": "deleteProfile",
  "controller": "security",
  "requestId": "<unique request identifier>"
}
```
