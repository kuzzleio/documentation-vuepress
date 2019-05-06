---
layout: full.html.hbs
title: trigger
---

# trigger

<SinceBadge version="1.0.0" />

Triggers a custom event.

This allows interactions with other plugins using [hooks](/plugins/1/hooks/) or [pipes](/plugins/1/pipes/).

## Arguments

```js
trigger(event, [payload]);
```

<br/>

| Arguments | Type              | Description       |
| --------- | ----------------- | ----------------- |
| `event`   | <pre>string</pre> | Custom event name |
| `payload` | <pre>object</pre> | Event payload     |

**Note:** the triggered event is renamed using the following format:<br/>`plugin-<plugin name>:<event>`.

## Example

```js
// Emitting plugin, named "some-plugin"
context.accessors.trigger('someEvent', {
  someAttribute: 'someValue'
});

// Listening plugin
class ListeningPlugin {
  constructor() {
    this.hooks = {
      'plugin-some-plugin:someEvent': 'someEventListener'
    };
  }

  someEventListener(payload) {
    this.doSomething(payload);
  }
}
```