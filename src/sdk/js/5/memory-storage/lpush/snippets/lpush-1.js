// Using callbacks (NodeJS or Web Browser)
kuzzle.memoryStorage.lpush('key', ['foo', 'bar', 'baz'], function (err, count) {
  // callback called once the action has completed
});

// Using promises (NodeJS only)
kuzzle.memoryStorage.lpushPromise('key', ['foo', 'bar', 'baz'])
  .then(count => {
    // resolved once the action has completed
  });
