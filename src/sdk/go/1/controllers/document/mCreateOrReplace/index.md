---
code: true
type: page
title: mCreateOrReplace
description: Create or replace documents in kuzzle
---

# MCreateOrReplace

Creates or replaces multiple documents.

Returns a partial error (error code 206) if one or more document creations/replacements fail.

## Arguments

```go
MCreateOrReplace(
    index string,
    collection string,
    documents json.RawMessage,
    options types.QueryOptions) (json.RawMessage, error)
```

<br/>

| Argument     | Type                          | Description                       |
| ------------ | ----------------------------- | --------------------------------- |
| `index`      | <pre>string</pre>             | Index name                        |
| `collection` | <pre>string</pre>             | Collection name                   |
| `documents`  | <pre>json.RawMessage</pre>    | JSON array of documents to create |
| `options`    | <pre>types.QueryOptions</pre> | A struct containing query options |

### options

Additional query options

| Option     | Type<br/>(default)            | Description                                                                        |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| `Queuable` | <pre>bool</pre> <br/>(`true`) | If true, queues the request during downtime, until connected to Kuzzle again       |
| `Refresh`  | <pre>string</pre><br/>(`""`)  | If set to `wait_for`, waits for the change to be reflected for `search` (up to 1s) |

## Return

Returns an json.RawMessage containing the created documents.

## Usage

<<< ./snippets/m-create-or-replace.go
