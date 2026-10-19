<!-- SPDX-FileCopyrightText: 2026 Keresztes Zsolt <https://kereszteszsolt.hu> -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<script setup lang="ts">
import { useId } from 'vue';
import { publicLink } from '../app-info';
import LinkIcon from './LinkIcon.vue';
defineProps<{ href: string; label: string; description: string; kind: 'globe' | 'code' | 'user' | 'coffee' | 'heart' }>();
const id = useId();
function position(event: Event) {
  const link = event.currentTarget as HTMLAnchorElement;
  const tip = link.querySelector<HTMLElement>('[role="tooltip"]');
  if (!tip || !link.parentElement) return;
  const row = link.parentElement.getBoundingClientRect(); const box = link.getBoundingClientRect();
  const center = box.left - row.left + box.width / 2;
  const left = Math.max(0, Math.min(center - tip.offsetWidth / 2, row.width - tip.offsetWidth));
  tip.style.left = `${left}px`; tip.style.bottom = `${row.bottom - box.top + 10}px`;
  tip.style.setProperty('--tooltip-arrow', `${center - left}px`);
}
</script>
<template>
  <a v-if="publicLink(href)" :href="href" class="about-link" :class="{ 'coffee-link': kind === 'coffee' }" target="_blank" rel="noopener noreferrer" :aria-label="label" :aria-describedby="id" @pointerenter="position" @focus="position">
    <LinkIcon :kind="kind" />{{ label }}
    <span :id="id" class="link-tooltip" role="tooltip"><span>{{ description }}</span><span class="tooltip-url">{{ href }}</span></span>
  </a>
</template>
