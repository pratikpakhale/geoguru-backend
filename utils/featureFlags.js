const featureFlags = require('../config/featureFlags')

const applyFeatureFlags = (req, res, next) => {
  req.featureFlags = featureFlags
  next()
}

/**
 * @description Verify if a feature flag is enabled
 * @param {string} flag
 * @param {function} middleware funciton to be executed if the flag is enabled
 */
const useFeatureFlag = (req, res, next, flag, middleware) => {
  return (req, res, next) => {
    if (req?.featureFlags?.[flag]) {
      return next(middleware())
    }
    next()
  }
}

module.exports = {
  applyFeatureFlags,
  useFeatureFlag,
}
