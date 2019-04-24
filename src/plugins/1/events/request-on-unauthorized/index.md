---
layout: full.html.hbs
title: request:onUnauthorized
---

# request:onUnauthorized

<SinceBadge version="1.0.0" />

| Arguments | Type                                                           | Description                |
| --------- | -------------------------------------------------------------- | -------------------------- |
| `request` | <pre><a href=/plugins/1/constructors/request>Request</a></pre> | The normalized API request |

Triggered whenever a request fails authorization checks, and is about to be rejected with a `401` error code.