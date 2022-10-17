const countMatches = (items, ruleKey, ruleValue) => {
  let res = 0;
  for (let item of items)
    if (ruleKey === 'type' && item[0] === ruleValue) res++;
    else if (ruleKey === 'color' && item[1] === ruleValue) res++;
    else if (ruleKey === 'name' && item[2] === ruleValue) res++;
  return res;
};

// checking each item to see if it contains a property matching both ruleKey AND ruleValue
