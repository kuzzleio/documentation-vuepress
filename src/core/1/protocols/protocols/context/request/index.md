---
layout: full.html.hbs
title: Request
---

# Request

<SinceBadge version="1.0.0" />

Object representation of a Kuzzle [API call](/api/1/essentials/query-syntax), to be used with the [entryPoint.execute](/protocols/1/entrypoint/execute) function.

That object is continuously updated to reflect the current state of the request, during its entire lifecycle.

For more information about this object, refer to its [technical documentation](https://github.com/kuzzleio/kuzzle-common-objects/blob/master/README.md#request).

---

## Response headers

Network protocol specific headers can be added to the response. If the protocol supports it, these headers are forwarded in the response sent to the client.

To customize the response content, read the [RequestResponse](https://github.com/kuzzleio/kuzzle-common-objects#requestresponse) documentation.

---

## Constructor

```js
new Request(data, [options]);
```

<br/>

| Arguments | Type     | Description                                                                                   |
| --------- | -------- | --------------------------------------------------------------------------------------------- |
| `data`    | `object` | API call, following the same format than non-HTTP [API calls](/api/1/essentials/query-syntax) |
| `options` | `object` | Additional request context                                                                    |

### options

The `options` object can contain the following properties:

| Properties     | Type                                                             | Description                                                                                                                                                                                                                |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connection`   | `object`                                                         | <SinceBadge version="1.4.1" /> Connection information (see the <a href=https://github.com/kuzzleio/kuzzle-common-objects/blob/master/README.md#requestcontextconnection-object-format>connection</a> object documentation) |
| `connectionId` | `string`                                                         | <DeprecatedBadge version="1.4.1" /> Connection unique identifier                                                                                                                                                           |
| `error`        | `<a href=/protocols/1/context/errors>KuzzleError</a>,<br/>Error` | Sets the request response with the provided error                                                                                                                                                                          |
| `requestId`    | `string`                                                         | User-defined request identifier                                                                                                                                                                                            |
| `result`       | `\*`                                                             | Sets the request response with the provided result, and the request status is set to `200`                                                                                                                                 |
| `status`       | `integer`                                                        | Request status, following the [HTTP error code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) standard                                                                                                          |

---

## Properties

Read-only:

| Properties  | Type                                                                                                                      | Description                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `context`   | `<a href=https://github.com/kuzzleio/kuzzle-common-objects/blob/master/README.md#modelsrequestcontext>RequestContext</a>` | General request information (logged user, network information, ...) |
| `error`     | `<a href=/protocols/1/context/errors>KuzzleError</a> | Request error                                                      |
| `input`     | `<a href=https://github.com/kuzzleio/kuzzle-common-objects/blob/master/README.md#modelsrequestinput>RequestInput</a>`     | Input request representation                                        |
| `response`  | `<a href=https://github.com/kuzzleio/kuzzle-common-objects#requestresponse>RequestResponse</a>`                           | Serialized [request response](/api/1/essentials/kuzzle-response)    |
| `result`    | `\*`                                                                                                                      | Request result                                                      |
| `timestamp` | `integer`                                                                                                                 | Request creation timestamp, in Epoch-millis format                  |

Writable:

| Properties | Type      | Description                            |
| ---------- | --------- | -------------------------------------- |
| `id`       | `string`  | User-defined request unique identifier |
| `status`   | `integer` | Request status code                    |

---

## clearError

<SinceBadge version="1.0.0" />

Clears the error: sets the `error` property to `null`, and the request status to `200`.

---

## serialize

<SinceBadge version="1.0.0" />

Serializes the request into into a pair of objects that can be sent across the network.

### Example

```js
const foo = request.serialize();
const bar = new context.Request(foo.data, foo.options);
```

---

## setError

<SinceBadge version="1.0.0" />

Adds an error to the request.

The request status is also updated to the error status.

### Argument

```js
setError(error);
```

<br/>

| Arguments | Type                                                         | Description   |
| --------- | ------------------------------------------------------------ | ------------- |
| `error`   | `<a href=/protocols/1/context/errors>KuzzleError</a>, Error` | Request error |

If a `KuzzleError` object is provided, the request's status attribute is set to the error one.

Otherwise, the provided error is embedded into a [InternalError](/protocols/1/context/errors/#internalerror-default) object, and the request status is set to 500.

---

## setResult

<SinceBadge version="1.0.0" />

Sets the request result.

### Arguments

```js
setResult(result, [options]);
```

<br/>

| Arguments | Type               | Description                   |
| --------- | ------------------ | ----------------------------- |
| `result`  | `\*`               | Request result                |
| `options` | `optional, object` | Optional result configuration |

#### options

The `options` object can contain the following properties:

| Properties | Type (default)    | Description                                                                                                                                              |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`  | `object`          | Network specific headers. Shortcut to the [response](https://github.com/kuzzleio/kuzzle-common-objects#requestresponse) header functions                 |
| `raw`      | `boolean (false)` | If `true`, instead of a standard [kuzzle response](/api/1/essentials/kuzzle-response), the result is sent as is to the client, without being interpreted |
| `status`   | `integer (200)`   | Request status                                                                                                                                           |