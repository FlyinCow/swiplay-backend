export interface LoginQrKeyBody {
  code: number,
  data: {
    code: number,
    unikey: string
  }
}

export interface LoginQrCreateBody {
  code: number,
  data: {
    code: number,
    qrurl: string,
    qrimg: string
  }
}