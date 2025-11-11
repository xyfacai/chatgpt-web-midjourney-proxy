<script setup lang='ts'>
import { computed } from 'vue'
import { NLayout, NLayoutContent } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router' 
import Permission from '../chat/layout/Permission.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { gptConfigStore, homeStore, useAppStore, useAuthStore, useChatStore } from '@/store'
import { aiSider ,aiFooter} from '@/views/mj'
import aiMobileMenu from '@/views/mj/aiMobileMenu.vue'; 
import { chatSetting, mlog } from '@/api'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const chatStore = useChatStore()
const authStore = useAuthStore()

mlog('layout', route.name )
router.replace({ name:  route.name??'video', params: { uuid: chatStore.active } })
homeStore.setMyData({local:  route.name??'video' });
const { isMobile } = useBasicLayout()

const resolveUrlModel = () => {
  const raw = route.query?.settings
  if (!raw)
    return undefined
  const target = Array.isArray(raw) ? raw[0] : raw
  if (typeof target !== 'string')
    return undefined
  try {
    const parsed = JSON.parse(target)
    return typeof parsed?.model === 'string' ? parsed.model as string : undefined
  }
  catch (error) {
    mlog('luma-settings-parse-error', error)
    return undefined
  }
}

const urlModel = resolveUrlModel()

if (urlModel) {
  const uuid = Date.now()
  gptConfigStore.setMyData({ model: urlModel })
  const chatSet = new chatSetting(uuid)
  chatSet.save({ model: urlModel })
  chatStore.addHistory({ title: 'New Chat', uuid, isEdit: false })
}

const collapsed = computed(() => appStore.siderCollapsed)

const needPermission = computed(() => !!authStore.session?.auth && !authStore.token)

const getMobileClass = computed(() => {
  if (isMobile.value)
    return ['rounded-none', 'shadow-none' ]
  return [ 'shadow-md', 'dark:border-neutral-800' ] //'border', 'rounded-md',
})

const getContainerClass = computed(() => {
  return [
    'h-full',
    { 'abc': !isMobile.value && !collapsed.value },
  ]
}) 
</script>

<template>
  <div class="dark:bg-[#24272e] transition-all p-0" :class="[isMobile ? 'h55' : 'h-full' ]">
    <div class="h-full overflow-hidden" :class="getMobileClass">
      <NLayout class="z-40 transition" :class="getContainerClass" has-sider  :sider-placement="isMobile?'left': 'right'">
        <aiSider v-if="!isMobile"/>
       
        <NLayoutContent class="h-full">
          <RouterView v-slot="{ Component, route }">
            <component :is="Component" :key="route.fullPath" />
          </RouterView>
        </NLayoutContent>
         <!-- <Sider /> -->
      </NLayout>
    </div>
    <Permission :visible="needPermission" />
  </div>
   <aiMobileMenu v-if="isMobile"   /> 
  <aiFooter/> 
</template>
<style  >
.h55{
  height: calc(100% - 55px);
}
</style>
