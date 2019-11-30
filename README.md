ember-noop
==============================================================================

Ever wanted to have an optional action? maybe with the `on` modifier?

_Now you can!_


*Using the `noop` helper*
```hbs
<button {{on 'click' (if this.condition this.myAction noop)}}>
  if condition is falsey, clicking won't do anything
</button>
```

*Using the `fn-if` helper*
```hbs
<button {{on 'click' (fn-if this.condition this.myAction)}}>
  This provides a shorthand for the above
</button>
```


_Note: It's recommended to use `disabled` with unclickable buttons._

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-noop
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
