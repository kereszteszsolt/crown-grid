<!-- SPDX-FileCopyrightText: 2026 Keresztes Zsolt <https://kereszteszsolt.hu> -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<script setup lang="ts">
import { ref, useId } from 'vue';
import { appInfo, publicLink, websiteLabel } from '../app-info';
import AboutLink from './AboutLink.vue';
import AuthorAttribution from './AuthorAttribution.vue';
import LinkIcon from './LinkIcon.vue';
const dialog = ref<HTMLDialogElement>();
const titleId = useId(); const descriptionId = useId();
const languages = appInfo.authorWebsiteLanguages.join(' | ');
const hasSupport = publicLink(appInfo.authorBuyMeACoffeeUrl) || publicLink(appInfo.authorWaysToSupportUrl);
defineExpose({ open: () => dialog.value?.showModal() });
function dismissOutside(event: MouseEvent) {
  if (event.target !== dialog.value) return;
  const b = dialog.value.getBoundingClientRect();
  if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) dialog.value.close();
}
</script>
<template>
  <dialog ref="dialog" class="about-dialog" :aria-labelledby="titleId" :aria-describedby="descriptionId" @click="dismissOutside">
    <div class="about-heading"><h2 :id="titleId">About {{ appInfo.appName }}</h2><button class="about-close" type="button" aria-label="Close about" autofocus @click="dialog?.close()">×</button></div>
    <img v-if="appInfo.poster" class="about-poster" :src="appInfo.poster" :alt="`${appInfo.appName} project poster`" width="780" height="480" />
    <p :id="descriptionId" class="about-description">{{ appInfo.appDescription }}</p>
    <nav class="about-links" aria-label="Project and author links">
      <AboutLink :href="appInfo.authorWebsite" :label="websiteLabel" :description="`About ${appInfo.authorName}, projects and contact. Available in ${languages}.`" kind="globe" />
      <AboutLink :href="appInfo.appWebsite" label="Project website" description="Visit the project website." kind="globe" />
      <AboutLink :href="appInfo.appGithubUrl" label="Source" :description="`Source code for ${appInfo.appName}.`" kind="code" />
      <AboutLink :href="appInfo.authorGithub" label="GitHub profile" :description="`Explore ${appInfo.authorName}'s projects.`" kind="user" />
    </nav>
    <nav v-if="hasSupport" class="about-links about-support-links" aria-label="Support the author">
      <AboutLink :href="appInfo.authorBuyMeACoffeeUrl" label="Buy me a Coffee" :description="`Support ${appInfo.authorName} on Buy Me a Coffee.`" kind="coffee" />
      <AboutLink :href="appInfo.authorWaysToSupportUrl" label="Ways to support" :description="`Ways to support ${appInfo.authorName}'s work.`" kind="heart" />
    </nav>
    <p class="about-details"><RouterLink to="/about" @click="dialog?.close()">Project details, privacy and credits</RouterLink></p>
    <div v-if="hasSupport && appInfo.supportRemarkText" class="about-support-note" role="note"><LinkIcon kind="info" /><p>{{ appInfo.supportRemarkText }}</p></div>
    <AuthorAttribution :website="false" />
  </dialog>
</template>
