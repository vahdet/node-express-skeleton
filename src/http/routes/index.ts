import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  try {
    res.json({
      data: 'Hello World!'
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

export default router
