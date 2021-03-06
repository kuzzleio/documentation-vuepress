---
code: true
type: page
title: mupdateDocument
description: Collection:mupdateDocument
---

# mUpdateDocument

Update the provided [Documents](/sdk/android/3/controllers/document/).

---

## mUpdateDocument(documents, [options], [callback])

| Arguments   | Type        | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| `documents` | Document[]  | Array of [Documents](/sdk/android/3/controllers/document/) to update |
| `options`   | JSON Object | Optional parameters                                                  |
| `callback`  | function    | Optional callback                                                    |

---

## Options

| Option     | Type    | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`  |

---

## Return Value

Returns the `Collection` object to allow chaining.

---

## Callback Response

Returns a `JSON object` containing the raw Kuzzle response.
Can return a 206 partial error in cases where documents could not be updated.

## Usage

<<< ./snippets/mupdate-document-1.java

> Callback response:

```json
{
  "hits": [{ "first": "document" }, { "second": "document" }],
  "total": 2
}
```
