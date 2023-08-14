import { helper } from '@ember/component/helper';

export function fnIf([condition, invokeable, ...args]/*, hash*/) {
  if (condition) {
    return () => invokeable(...args);
  }

  return () => {};
}

export default helper(fnIf);
