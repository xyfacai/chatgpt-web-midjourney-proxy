<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue'
import { NSpin } from 'naive-ui'
import pkg from '../../../../package.json'
import { fetchChatConfig ,getLastVersion} from '@/api'
import { useAuthStore } from '@/store'
import { gptUsage  } from "@/api";
const isBltcy = import.meta.env.VITE_GLOB_APP_IS_BLTCY ?? false

interface ConfigState {
  timeoutMs?: number
  reverseProxy?: string
  apiModel?: string
  socksProxy?: string
  httpsProxy?: string
  usage?: string
  remaining?: string
  hard_limit_usd?: string
}

const authStore = useAuthStore()

const loading = ref(false)

const config = ref<ConfigState>()
const st = ref({lastVersion:''})

const isChatGPTAPI = computed<boolean>(() => !!authStore.isChatGPTAPI)

async function fetchConfig() {
  try {
    loading.value = true
    // const { data } = await fetchChatConfig<ConfigState>()
    // config.value = data
    

    const dd= await gptUsage();
    config.value= {usage:dd.usage?`${dd.usage}`:'-'
      ,remaining:dd.remaining?`${dd.remaining}`:'-'
      ,hard_limit_usd:dd.hard_limit_usd?`${dd.hard_limit_usd}`:'-'
      , "apiModel": "ChatGPTAPI",
        "reverseProxy": "-",
        "timeoutMs": 100000,
        "socksProxy": "-",
        "httpsProxy": "-", } ;

  }
  finally {
    loading.value = false
  }
}
const getLastFrom= ()=>{
  const str = localStorage.getItem('lastVersion');
  if(!str) return '';
  const obj = JSON.parse(str);
  if( Date.now()- obj.t>1000*60*60 ){
    return '';
  }
  return obj.v;
}
onMounted( () => {
  fetchConfig();
  
  let t = getLastFrom();
  if(t){
     st.value.lastVersion = t ;
  }else {
    getLastVersion().then(res=>{
      if(  res[0] && res[0].name ){
        st.value.lastVersion = res[0].name;
        localStorage.setItem('lastVersion',JSON.stringify( {v:  res[0].name,t: Date.now() } ))
      }
    });
  }
})

</script>

<template>
  <NSpin :show="loading">
    <div class="p-4 space-y-4">
      <h2 class="text-xl font-bold">
        {{ isBltcy ? '柏拉图AI' : 'AI' }}
      </h2>
      <div class="p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700">
        <p>稳定快速的官方企业级中转源头，支持 OpenAI / Claude / Gemini / Midjourney / Suno 及国内人工智能大模型，定价完全透明，官方倍率，无套路、无广告、无猫腻，支持大额对公发票。</p>
      </div>
      <p>{{ $t("setting.api") }}：{{ config?.apiModel ?? '-' }}</p>
      <p v-if="isChatGPTAPI" class=" flex items-center justify-between">
        <div>
        {{ $t("setting.monthlyUsage") }}：{{ config?.usage ?? '-' }}
        </div>
        <div>
        {{ $t("mj.totalUsage") }}：{{ config?.hard_limit_usd ?(+config?.hard_limit_usd).toFixed(2): '-' }}
        </div>
        <div>
        {{ $t("setting.balance") }}：{{ config?.remaining ?? '-' }}
        </div>
      </p>
      <p v-if="!isChatGPTAPI">
        {{ $t("setting.reverseProxy") }}：{{ config?.reverseProxy ?? '-' }}
      </p>
    </div>
  </NSpin>
</template>
