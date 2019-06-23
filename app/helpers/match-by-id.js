import { helper } from '@ember/component/helper';
import { isEqual } from '@ember/utils';

export function matchById(_, hash) {
  console.log('klfdklfd', hash)
  const match = hash.in.find((item)=>{
    // console.log(isEqual(item[hash.by], hash.value))
    return item[hash.by].id === hash.value.id;
  })
  return match ? match[hash.return].name : 'none';
}

export default helper(matchById);
