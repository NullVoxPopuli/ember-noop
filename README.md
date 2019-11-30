ember-noop
==============================================================================

Ever wanted to have an optional action? maybe with the `on` modifier?

_Now you can!_


*Using the `noop` helper*
```hbs
<button {{on 'click' (if this.condition this.myAction (noop))}}>
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

* Ember.js v3.11+
* Ember.js v2.18+ with the [on modifier polyfill](https://github.com/buschtoens/ember-on-modifier)
* Any Ember version, because these are just helpers, and helper have been around for a while.


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
