const router = require(`express`).Router()
const user = require(`./user`)
const tokenApiRoute = require(`./tokenApiRoute`)

// /api/user
router.use(`/user`, user)

// /api/tokenApiRoute
router.use(`/tokenApiRoute`, tokenApiRoute)

router.use((req, res, next) => {
  const err = new Error(`Route Not Found`)
  err.status = 404
  next(err)
})

module.exports = router
