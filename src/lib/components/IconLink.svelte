<script lang="ts">
  export let href: string;
</script>

<a {href} target="_blank" class="h-7 w-7 transition duration-500 hover:text-sky-400">
  <slot />
</a>
