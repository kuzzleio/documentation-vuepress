---
code: true
type: page
title: constructor
description: CollectionMapping:constructor
order: 1
---

# CollectionMapping

When creating a new data collection in the persistent data storage layer, Kuzzle uses a default mapping.
This means that, by default, you won't be able to exploit the full capabilities of our persistent data storage layer (currently handled by [ElasticSearch](https://www.elastic.co/products/elasticsearch)), and your searches may suffer from below-average performance, depending on the amount of data you stored in a collection and the complexity of your database.

The CollectionMapping object allows you to get the current mapping in a data collection and to modify it if necessary.

<div class="alert alert-info">
Once a field mapping has been set, it cannot be removed without reconstructing the data collection.
</div>

---

## CollectionMapping(Collection, [mapping])

| Arguments    | Type                                                 | Description                       |
| ------------ | ---------------------------------------------------- | --------------------------------- |
| `Collection` | [Collection](/sdk/android/3/controllers/collection/) | An instantiated Collection object |
| `mapping`    | JSON Object                                          | Optional mapping                  |

---

## Properties

| Property name | Type        | Description                                   | get/set |
| ------------- | ----------- | --------------------------------------------- | ------- |
| `headers`     | JSON Object | Common headers for all sent documents.        | get/set |
| `mapping`     | object      | Easy-to-understand list of mappings per field | get/set |

**Note:** the `headers` property is inherited from the provided [Collection](/sdk/android/3/controllers/collection/) object and can be overrided

## Usage

<<< ./snippets/constructor-1.java
