import login_router from "./login"
import Router from "@koa/router"

const router = new Router()
router.use('/login', login_router.routes())

export default router
