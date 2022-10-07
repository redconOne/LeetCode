const defangIPaddr = (address) => {
  return address.replace(/[.]/g, '[.]');
};

// replacnig all the .'s in an ip with [.]
