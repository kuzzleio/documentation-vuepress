---
code: true
type: page
title: mreplaceDocument
description: Collection:mreplaceDocument
---

# mReplaceDocument

Replace the provided [Documents](/sdk/android/3/controllers/document/).

---

## mReplaceDocument(documents, [options], [callback])

| Arguments   | Type        | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| `documents` | Document[]  | Array of [Document](/sdk/android/3/controllers/document/) to replace |
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
Can return a 206 partial error in cases where documents could not be replaced.

## Usage

<<< ./snippets/mreplace-document-1.java

> Callback response:

```json
{
  "hits": [{ "first": "document" }, { "second": "document" }],
  "total": 2
}
```
