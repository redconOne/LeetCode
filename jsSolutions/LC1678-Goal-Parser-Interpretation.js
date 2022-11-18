const interpret = (command) =>
  command.replaceAll('()', 'o').replaceAll('(al)', 'al');

// replace all values with proper corresponding values
