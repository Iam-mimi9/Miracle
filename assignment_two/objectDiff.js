// sorting the difference
function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  }

  // adding the keys to a set
  const allKeys = new Set([...Object.keys(oldObj), ...Object.keys(newObj)])

// checking if the key is in the new object 
  for (let key of allKeys){
    const inOld = key in oldObj;
    const inNew = key in newObj;
    if (inNew && !inOld){
      result.added[key] = newObj[key]
// checking if the key is in the old object 
    } else if (inOld && !inNew){
      result.removed[key]=oldObj[key]
//checking if key exist in the both keys
    } else if (inOld && inNew && oldObj[key] !== newObj[key]){
      result.changed[key]={from: oldObj[key], to: newObj[key]}
    }
  }
// return the full different object
  return result
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },//oldobj
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }//newobj
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }