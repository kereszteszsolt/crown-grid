<!-- SPDX-FileCopyrightText: 2026 Keresztes Zsolt <https://kereszteszsolt.hu> -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<script setup lang="ts">
import { appInfo, license, publicLink, websiteLabel } from '../app-info';
withDefaults(defineProps<{ website?: boolean }>(), { website: true });
const year = new Date().getFullYear();
</script>
<template>
  <div class="author-attribution">
    <span class="copyright-line">© {{ year }} {{ appInfo.authorName }}, <a :href="license.href" target="_blank" rel="noopener noreferrer">{{ license.name }}</a></span>
    <a v-if="website && publicLink(appInfo.authorWebsite)" class="author-website" :href="appInfo.authorWebsite" target="_blank" rel="noopener noreferrer">{{ websiteLabel }}</a>
  </div>
</template>
