---
code: true
type: page
title: mGetProfiles
---

# mGetProfiles



Gets multiple security profiles.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/_mGet
Method: POST
Body:
```

```js
{
  "ids": ["profile1", "profile2"]
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "mGetProfiles",
  "body": {
    "ids": ["profile1", "profile2"]
  }
}
```

---

## Body properties

- `ids`: an array of profile identifiers to get

---

## Response

Returns a `hits` array of objects. Each object is a profile description, with the following properties:

- `_id`: profile unique identifier
- `_source`: profile description

```javascript
{
  "status": 200,
  "error": null,
  "action": "mGetProfiles",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": {
    "hits": [
      {
        "_id": "profile1",
        "_source": {
          "policies": [{"roleId": "admin"}]
        }
      },
      {
        "_id": "profile2",
        "_source": {
          "policies": [{"roleId": "default"}]
        }
      }
    ]
  }
}
```
