---
code: true
type: page
title: PartialError
---

# PartialError

<SinceBadge version="1.0.0" />

Partial request success.

## Constructor

```js
new context.error.PartialError(message, failures);
```

<br/>

| Arguments  | Type                                                               | Description                |
| ---------- | ------------------------------------------------------------------ | -------------------------- |
| `message`  | <pre>string</pre>                                                  | Error message              |
| `failures` | <pre><a href=/plugins/1/errors/kuzzleerror>KuzzleError[]</a></pre> | List of encountered errors |

## Status Code

`206`

## Example

```js
const err = new context.errors.PartialError('error message', [
  new context.errors.BadRequestError('[request part] invalid format'),
  new context.errors.ForbiddenError('[other request part] forbidden')
]);
```
