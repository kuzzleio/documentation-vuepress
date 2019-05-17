---
code: true
type: page
title: auth:strategyAuthenticated
---

# auth:strategyAuthenticated

<SinceBadge version="1.0.0" />

| Arguments  | Type              | Description                                                                                                            |
| ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `strategy` | <pre>string</pre> | [Authentication strategy](/core/1/guide/guides/essentials/user-authentication/#authentication-strategies-default) name |
| `user`     | <pre>object</pre> | Authenticated user properties                                                                                          |

This event is triggered after a successful user authentication, but before a token is generated.

It is also triggered before the [auth:afterLogin](/core/1/plugins/events/api-events/#after-default) event.

---

## user

The provided `user` object has the following properties:

| Properties   | Type                | Description                                                                                     |
| ------------ | ------------------- | ----------------------------------------------------------------------------------------------- |
| `_id`        | <pre>string</pre>   | User's [kuid](/core/1/guide/guides/essentials/user-authentication/#kuzzle-user-identifier-kuid) |
| `profileIds` | <pre>string[]</pre> | List of associated profiles                                                                     |
