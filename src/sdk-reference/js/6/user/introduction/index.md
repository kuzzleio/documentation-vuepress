---
layout: sdk.html.hbs
title: Introduction
description: User class
order: 0
---

# User

This class represents a Kuzzle User.

Refer to the [Security guide](/guide/1/essentials/security) for more information about users.

The following methods return a `User` object:

- [auth:getCurrentUser](/sdk-reference/js/6/auth/get-current-user)
- [auth:updateSelf](/sdk-reference/js/6/auth/update-self)

## Properties

Available properties:

| Property  | Type              | Description           |
| --------- | ----------------- | --------------------- |
| `_id`     | <pre>string</pre> | User ID (kuid)        |
| `content` | <pre>object</pre> | User internal content |

The `content` property is an object containing generic properties alongside custom defined properties.

| Property       | Type                | Description                                              |
| -------------- | ------------------- | -------------------------------------------------------- |
| `profileIds`   | <pre>string[]</pre> | Profiles IDs for this user                               |
| `_kuzzle_info` | <pre>object</pre>   | [Kuzzle metadata](/guide/1/essentials/document-metadata) |
