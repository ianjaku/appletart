---
category: "Other"
title: "Roadmap"
---

# Here are a few ideas that I'm currently thinking about

## Replacing the global state with a simple event buss

Currently, our global state is reactive. Which is not bad.

It just might be better to replace it with an event buss.
This might clean up the communication between controllers even more, more testing is definitely required here.

## Nested items using "parent"."child"

Currently, you use data-item="user.name" then you'll have to access it by using items["user.name"]

The idea is to move this ti items.user.name, the issue is what would items.user return :/

An other idea would be that have a "starts-with" function to get all elements starting with "user" for example.
Although this can already be achieve by just looping over the keys of the object it would be nice to have something dedicated.

Another alternative would be to do something like:

```js
live((state) => {
  items.input = state.query
})
```

this function would then run every time "state.query" changes.
