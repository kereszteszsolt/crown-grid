<!-- SPDX-FileCopyrightText: 2026 Keresztes Zsolt <https://kereszteszsolt.hu> -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<script setup lang="ts">
const shapes = {"globe": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3a17 17 0 0 1 0 18 17 17 0 0 1 0-18Z\"/>", "code": "<path d=\"m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18\"/>", "user": "<circle cx=\"12\" cy=\"7\" r=\"4\"/><path d=\"M4 21v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3Z\"/>", "heart": "<path d=\"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z\"/>", "coffee": "<path d=\"M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Zm13 1h2a3 3 0 0 1 0 6h-2M7 3v2m4-2v2m4-2v2\"/>", "info": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v6m0 4h.01\"/>"} as const;
defineProps<{ kind: keyof typeof shapes }>();
</script>
<template><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="shapes[kind]" /></template>
