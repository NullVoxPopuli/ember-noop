import { helper } from '@ember/component/helper';

export function fnIf([condition, invokeable, ...args]/*, hash*/) {
  if (condition) {
    return (...extra) => invokeable(...args, ...extra);
  }

  return () => {};
}

export default helper(fnIf);
