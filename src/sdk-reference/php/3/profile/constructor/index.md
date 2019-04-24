---
layout: sdk.html.hbs
title: constructor
description: Profile:constructor
order: 1
---

# Constructors

Instantiates a new `Profile` object, representing a security [profile](/guide/1/essentials/security/#users-profiles-and-roles), which is a set of one or many [Role](/sdk-reference/php/3/role) objects.

---

## Profile(Security, id, content, [meta])

| Arguments  | Type        | Description                                                      |
| ---------- | ----------- | ---------------------------------------------------------------- |
| `Security` | Security    | An instantiated [Security](/sdk-reference/php/3/security) object |
| `id`       | string      | Unique profile identifier                                        |
| `content`  | JSON Object | Profile content                                                  |
| `meta`     | JSON Object | Profile metadata                                                 |

**Note:** this constructor won't make any call to Kuzzle.

---

## Properties

| Property name | Type        | Description               | get/set |
| ------------- | ----------- | ------------------------- | ------- |
| `content`     | JSON object | Raw profile content       | get     |
| `id`          | string      | Unique profile identifier | get     |
| `meta`        | JSON object | Profile metadata          | get     |

---

## Return Value

Returns to the `Profile` object.

## Usage

[snippet=constructor-1]