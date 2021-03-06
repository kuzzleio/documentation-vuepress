---
code: false
type: page
title: setHeaders
description: Collection:setHeaders
---

# setHeaders

This is a helper function returning itself, allowing to easily set headers while chaining calls.

---

## setHeaders(content, [replace])

| Arguments | Type        | Description                                                               |
| --------- | ----------- | ------------------------------------------------------------------------- |
| `content` | JSON Object | New content                                                               |
| `replace` | boolean     | true: replace the current content with the provided data, false: merge it |

**Note:** by default, the `replace` argument is set to `false`

---

## Return value

Returns the `Collection` object to allow chaining.

## Usage

<<< ./snippets/set-headers-1.js
