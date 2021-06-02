import { Router } from 'express'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    res.json({
      data: `Hello User ${userId}!`
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

export default router
