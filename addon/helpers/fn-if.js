import { helper } from '@ember/component/helper';

export default helper(function fnIf([condition, invokeable]/*, hash*/) {
  if (condition) {
    return invokeable;
  }

  return () => {};
});
