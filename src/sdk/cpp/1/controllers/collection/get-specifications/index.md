---
code: true
type: page
title: getSpecifications
description: Returns the validation specifications
---

# getSpecifications

Returns the validation specifications associated to the collection.

## Signature

```cpp
std::string getSpecifications(
    const std::string& index,
    const std::string& collection);

std::string getSpecifications(
    const std::string& index,
    const std::string& collection,
    const kuzzleio::query_options& options);
```

## Arguments

| Arguments    | Type                                 | Description     |
| ------------ | ------------------------------------ | --------------- |
| `index`      | <pre>const std::string&</pre>        | Index name      |
| `collection` | <pre>const std::string&</pre>        | Collection name |
| `options`    | <pre>kuzzleio::query_options\*</pre> | Query options   |

### options

Additional query options

| Property   | Type<br/>(default)           | Description                                                                  |
| ---------- | ---------------------------- | ---------------------------------------------------------------------------- |
| `queuable` | <pre>bool</pre><br/>(`true`) | If true, queues the request during downtime, until connected to Kuzzle again |

## Return

A JSON string representing the validation specifications.

## Usage

<<< ./snippets/get-specifications.cpp
