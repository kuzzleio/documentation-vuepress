---
code: true
type: page
title: getStrategies
description: Get all authentication strategies registered in Kuzzle.
---

# getStrategies

Get all authentication strategies registered in Kuzzle.

## Signature

```java
public io.kuzzle.sdk.StringVector getStrategies(
  io.kuzzle.sdk.QueryOptions
);
public io.kuzzle.sdk.StringVector getStrategies();
```

## Arguments

| Arguments | Type                       | Description                        |
| --------- | -------------------------- | ---------------------------------- |
| `options` | io.kuzzle.sdk.QueryOptions | An object containing query options |

### **Options**

Additional query options

| Property   | Type    | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`  |

## Return

A StringVector object.

## Exceptions

Throws a `io.kuzzle.sdk.KuzzleException` if there is an error. See how to [handle error](/sdk/java/1/essentials/error-handling/).

## Usage

<<< ./snippets/get-strategies.java
