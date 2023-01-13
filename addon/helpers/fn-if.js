import { helper } from '@ember/component/helper';

export function fnIf([condition, invokeable]/*, hash*/) {
  if (condition) {
    return invokeable;
  }

  return () => {};
}

export default helper(fnIf);
