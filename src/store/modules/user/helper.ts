/*
 * @Author: heyan
 * @Date: 2024-11-23 17:04:30
 * @LastEditors: heyan
 * @LastEditTime: 2024-11-23 17:33:49
 * @Description: 
 */
import { ss } from '@/utils/storage'
import { t } from '@/locales'
import { homeStore } from "@/store";
const LOCAL_NAME = 'userStorage'
const backgroundImage = homeStore.myData.session.backgroundImage ?? "https://t.alcy.cc/fj/"
// 引入环境变量
const isBltcy = import.meta.env.VITE_GLOB_APP_IS_BLTCY ?? false;

export interface UserInfo {
  avatar: string
  name: string
  backgroundImage: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: isBltcy ? '/logo.png' : 'https://raw.githubusercontent.com/Dooy/chatgpt-web-midjourney-proxy/main/src/assets/avatar.jpg',
      name: isBltcy ? '柏拉图AI' : t('mjset.sysname'),//'AI绘图',
      description: isBltcy ? '前往 <a href="https://one-api.bltcy.top/topup" class="text-blue-500" target="_blank" >充值</a>' : '',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
