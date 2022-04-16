<script lang="ts">
  import NavLink from '$lib/components/nav/NavLink.svelte';
</script>

<nav class="flex gap-4">
  <NavLink href="/" title="Home" let:active>
    {@const activeClass = active ? '' : 'text-red-500'}
    <em class={activeClass}>this</em>
  </NavLink>

  <NavLink href="/jobs" title="Job experience" let:active>
    {@const activeObjectClass = active ? '' : 'text-yellow-400'}
    <span class={activeObjectClass}>Job</span>

    {@const activeArrayClass = active ? '' : 'text-lime-400'}
    <span class={activeArrayClass}>[]</span>
  </NavLink>

  <NavLink href="/skills" title="Skills" let:active>
    {@const activeObjectClass = active ? '' : 'text-yellow-400'}
    <span class={activeObjectClass}>Skill</span>

    {@const activeArrayClass = active ? '' : 'text-lime-400'}
    <span class={activeArrayClass}>[]</span>
  </NavLink>

  <NavLink href="/apps" title="Sample apps" let:active>
    {@const activeObjectClass = active ? '' : 'text-yellow-400'}
    <span class={activeObjectClass}>App</span>

    {@const activeArrayClass = active ? '' : 'text-lime-400'}
    <span class={activeArrayClass}>[]</span>
  </NavLink>

  <NavLink href="mailto:joshfullmer9@gmail.com" title="Contact me" external let:active>
    {@const activeThisClass = active ? '' : 'text-red-500'}
    <em class={activeThisClass}>this</em>

    {@const activeDotClass = active ? '' : 'text-violet-400'}
    <span class={activeDotClass}>.</span>

    {@const activeFunctionClass = active ? '' : 'text-sky-400'}
    <span class={activeFunctionClass}>contact</span>

    {@const activeParensClass = active ? '' : 'text-pink-400'}
    <span class={activeParensClass}>()</span>
  </NavLink>
</nav>
