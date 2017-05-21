export const VISITOR_ROOM_ERROR_STATUS = {
  NOT_FOUND: -1,
  LIVE_OVER: -2,
  NETWORK: -99
}

export const VISITOR_ROOM_ERROR_MESSAGE = {
  [VISITOR_ROOM_ERROR_STATUS.NOT_FOUND]: '房间不存在哦，你是不是迷路啦',
  [VISITOR_ROOM_ERROR_STATUS.LIVE_OVER]: '来晚喽，直播已经结束啦',
  [VISITOR_ROOM_ERROR_STATUS.NETWORK]: '网络好像出问题了'
}

export const HOST_ROOM_ERROR_STATUS = {
  LIVE_OVER: -2,
  NETWORK: -99
}