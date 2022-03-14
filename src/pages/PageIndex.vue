<template>
  <q-page>
    <q-btn
      color="negative"
      label="decrement - 1"
      @click="counter.decrement"
    />
    <q-btn
      color="positive"
      label="increment + 1"
      @click="counter.increment"
    />
    <p>
      Count {{ counter.count }}
    </p>
  </q-page>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>
