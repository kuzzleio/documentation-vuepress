---
layout: full.html.hbs
title: ForbiddenError
---

# ForbiddenError

<SinceBadge version="1.0.0" />

Unauthorized access to a resource.

## Status Code

`403`

## Example

```js
const err = new context.errors.ForbiddenError('error message');
```