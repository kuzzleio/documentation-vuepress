---
code: true
type: page
title: core:auth:strategyRemoved
---

# core:auth:strategyRemoved

<SinceBadge version="1.2.0" />

| Arguments  | Type              | Description                         |
| ---------- | ----------------- | ----------------------------------- |
| `strategy` | <pre>object</pre> | Authentication strategy information |

Triggered whenever a plugin [dynamically removes](/core/1/plugins/accessors/strategies/) an authentication strategy.

<div class="alert alert-info">Pipes cannot listen to that event, only hooks can.</div>

---

## strategy

The provided `strategy` object has the following properties:

| Properties   | Type              | Description                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `pluginName` | <pre>string</pre> | The plugin's name defined in the [manifest file](/core/1/plugins/essentials/getting-started/#prerequisites-default) |
| `name`       | <pre>string</pre> | Authentication strategy name                                                                                        |
