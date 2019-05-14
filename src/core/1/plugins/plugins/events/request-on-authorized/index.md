---
title: request:onAuthorized
---

# request:onAuthorized

<SinceBadge version="1.0.0" />

| Arguments | Type                                                           | Description                |
| --------- | -------------------------------------------------------------- | -------------------------- |
| `request` | <pre><a href=/plugins/1/constructors/request>Request</a></pre> | The normalized API request |

Triggered whenever a request passes authorization checks and is ready to be processed.

This event occurs before [before events](/core/1/plugins/events/api-events/#before-default).
