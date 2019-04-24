---
layout: full.html.hbs
title: log
---

# log

The `context.log` object exposes functions used to send messages to Kuzzle's logging system.

Log levels are assigned to each exposed log function, corresponding to the log priority.  
The lower the log level, the higher its priority.

Levels above the threshold configued in the `logs` section of Kuzzle's [configuration file](/guide/1/essentials/configuration) are ignored.

---

## error

<SinceBadge version="1.0.0" />

### Priority

`0` (highest priority)

### Example

```js
context.log.error('error message');
```

---

## warn

<SinceBadge version="1.0.0" />

### Priority

`1`

### Example

```js
context.log.warn('warning message');
```

---

## info

<SinceBadge version="1.0.0" />

### Priority

`2`

### Example

```js
context.log.info('info message');
```

---

## verbose

<SinceBadge version="1.0.0" />

### Priority

`3` (ignored by default)

### Example

```js
context.log.verbose('verbose message');
```

---

## debug

<SinceBadge version="1.0.0" />

### Priority

`4` (ignored by default)

### Example

```js
context.log.debug('debug message');
```

---

## silly

<SinceBadge version="1.0.0" />

### Priority

`5` (lowest priority, usually ignored)

### Example

```js
context.log.silly('silly message');
```