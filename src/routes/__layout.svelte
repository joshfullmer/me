<script>
  import Header from '$lib/components/app/Header.svelte';

  import '../app.css';
</script>

<svelte:head>
  <title>josh|FULLMER</title>
</svelte:head>

<Header />

<main class="flex flex-col h-full">
  <slot />
</main>
