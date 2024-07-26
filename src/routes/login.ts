import Router from '@koa/router'
import { login_qr_key, login_qr_check, login_qr_create } from 'NeteaseCloudMusicApi'
import type { LoginQrCreateBody, LoginQrKeyBody } from '../models/ncm'

const login_router = new Router()

login_router.get('/qr', async (ctx) => {
  let ncm_respons = await login_qr_key({})
  console.log(ncm_respons.body)
  if (ncm_respons.status != 200) {
    ctx.status = 404
    return
  }
  // @ts-ignore
  ncm_respons = await login_qr_create({ key: ncm_respons.body.data["unikey"] as string, qrimg: true })
  if (ncm_respons.status != 200) {
    ctx.status = 404
    return
  }
  console.log(ncm_respons.body)
  ctx.body = {
    // @ts-ignore
    qrimg: ncm_respons.body.data["qrimg"] as string
  }
  // TODO: check qr status
})

export default login_router