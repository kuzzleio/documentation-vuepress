---
layout: full.html.hbs
title: notify:server
---

# notify:server

<SinceBadge version="1.0.0" />

| Arguments | Type                                                                 | Description                           |
| --------- | -------------------------------------------------------------------- | ------------------------------------- |
| `message` | <pre><a href=/api/1/essentials/notifications/>Notification</a></pre> | The normalized real-time notification |

Triggered whenever a real-time server notification is about to be sent.

A [pipe](/plugins/1/essentials/pipes/) can block some (or all) notifications by rejecting the provided promise.
