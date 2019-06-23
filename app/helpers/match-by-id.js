import { helper } from '@ember/component/helper';
import { isEqual } from '@ember/utils';

export function matchById(_, hash) {
  const match = hash.in.find((item)=>{
    return item[hash.by].id === hash.value.id;
  })
  return match ? match[hash.return].name : 'none';
}

export default helper(matchById);
