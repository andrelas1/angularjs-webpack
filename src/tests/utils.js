function checkDependency(module, dependencyName) {
  return module.requires.reduce((acc, dependency) => {
    if (dependency === dependencyName) {
      return true;
    } else {
      return acc;
    }
  });
}

function checkFactory(module, factoryName) {
  return module._invokeQueue.reduce((acc, queueList) => {
    if (factoryName === queueList[0][0]) {
      return true;
    } else {
      return acc;
    }
  });
}

export default {
  checkDependency,
  checkFactory
};
