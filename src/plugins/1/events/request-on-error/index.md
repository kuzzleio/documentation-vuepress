---
layout: full.html.hbs
title: request:onError
---

# request:onError

{{{since "1.0.0"}}}

| Arguments | Type                                                           | Description                |
| --------- | -------------------------------------------------------------- | -------------------------- |
| `request` | <pre><a href=/plugins/1/constructors/request>Request</a></pre> | The normalized API request |

Triggered whenever a request execution fails.

This event occurs after [error events](/plugins/1/events/api-events/#error-default).
