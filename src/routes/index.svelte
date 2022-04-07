<script lang="ts">
  import GithubLink from '$lib/components/GithubLink.svelte';
  import LinkedInLink from '$lib/components/LinkedInLink.svelte';
  import Space from '$lib/components/Space.svelte';
  import Tab from '$lib/components/Tab.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';
  import TwitterLink from '$lib/components/TwitterLink.svelte';

  type Skill = {
    /** Name of developer skill */
    name: string;
    /** Number of years of experience */
    years: number;
  };
  /** This is a developer */
  type Developer = {
    /** Short description of developer */
    description: string;
    /** List of skills and skill durations */
    skills: Skill[];
  };

  /** Test */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const joshFullmer: Developer = {
    description: 'User-focused frontend developer',
    skills: [{ name: 'Vue', years: 3 }]
  };

  const skills: Skill[] = [
    { name: 'HTML/CSS', years: 4 },
    { name: 'Javascript', years: 4 },
    { name: 'Vue', years: 3 },
    { name: 'Typescript', years: 3 },
    { name: 'GraphQL', years: 3 }
  ];

  let showEnglishDescription = false;
  let isConstCollapsed = false;
  let isSkillsCollapsed = false;
  let isHovered = false;
</script>

{#if false}
  <TwitterLink />
  <LinkedInLink />
  <GithubLink />
{/if}

<div
  class="flex flex-col h-full text-3xl leading-loose mx-10 mt-20"
  on:mouseover={() => (isHovered = true)}
  on:focus={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  on:blur={() => (isHovered = false)}
>
  <div class="flex">
    <Space />
    <button
      class="ring-2 ring-sky-800 rounded hover:bg-gray-700 active:bg-gray-900"
      on:click={() => (showEnglishDescription = !showEnglishDescription)}
      ><Space />Swap<Space /></button
    >
    <Space />
    <span class="text-gray-700"
      >/** {showEnglishDescription
        ? 'Go back to code version'
        : '← See an English friendly description'} */</span
    >
  </div>

  {#if showEnglishDescription}
    <div class="flex">
      <Space />
      <span>Hi! My name is Josh Fullmer and I'm a front-end developer.</span>
    </div>
  {:else}
    <!-- const joshFullmer -->
    <div class="flex">
      <Space />
      <span class="text-gray-700">1</span>
      <Space count={2} />
      <button class="text-gray-400" on:click={() => (isConstCollapsed = !isConstCollapsed)}>
        {#if isHovered}
          {isConstCollapsed ? '›' : '⌄'}
        {:else}
          <Space />
        {/if}
      </button>
      <Space />
      <span class="italic text-purple-400">const</span>
      <Space />
      <Tooltip>
        <span slot="activator" class="text-blue-400">joshFullmer</span>

        <div class="flex">
          <span class="italic text-purple-400">const</span>
          <Space />
          <span class="text-blue-400">joshFullmer</span>
          <span class="italic text-cyan-400">:<Space />Developer</span>
        </div>

        <svelte:fragment slot="description"
          >Describes the developer named Josh Fullmer.</svelte:fragment
        >
      </Tooltip>
      <span class="italic text-cyan-400">:</span>
      <Space />
      <Tooltip>
        <span slot="activator" class="italic text-cyan-400">Developer</span>

        <div class="flex flex-col">
          <div class="flex">
            <span class="text-purple-400">type</span>
            <Space />
            <span>Developer</span>
            <Space />
            <span class="text-purple-400">=</span>
            <Space />
            <span class="text-lime-400">{'{'}</span>
          </div>

          <div class="flex">
            <Tab />
            <span class="italic">description</span>
            <span class="italic text-cyan-400">:</span>
            <Space />
            <span class="italic text-yellow-400">string</span>
            <span>;</span>
          </div>

          <div class="flex">
            <Tab />
            <span class="italic">skills</span>
            <span class="italic text-cyan-400">:</span>
            <Space />
            <span class="italic text-cyan-400">Skill</span>
            <span class="text-pink-400">[]</span>
            <span>;</span>
          </div>

          <div class="flex">
            <span class="text-lime-400">{'}'}</span>
          </div>
        </div>

        <div slot="description" class="flex flex-col">
          <span> A web developer is a programmer or a coder who... </span>
          <a
            href="https://en.wikipedia.org/wiki/Web_developer"
            target="_blank"
            class="self-start text-blue-500 hover:underline underline-blue-500">See more...</a
          >
        </div>
      </Tooltip>
      <Space />
      <span class="text-purple-400">=</span>
      <Space />
      <span class="text-lime-400">{'{'}</span>
      {#if isConstCollapsed}
        <span class="text-red-400">...</span>
        <span class="text-lime-400">{'}'}</span>
        <span>;</span>
      {/if}
    </div>

    <!-- description -->
    {#if !isConstCollapsed}
      <div class="flex">
        <Space />
        <span class="text-gray-700">2</span>
        <Space count={4} />
        <Tab />
        <Tooltip>
          <span slot="activator" class="italic">description</span>
          <div class="flex">(property)<Space />description:<Space />string;</div>
          <svelte:fragment slot="description">Short description of developer</svelte:fragment>
        </Tooltip>
        <span>:</span>
        <Space />
        <span class="text-green-400">'</span>
        <span class="italic text-green-400">User-focused frontend developer</span>
        <span class="text-green-400">'</span>
        <span>,</span>
      </div>

      <div class="flex">
        <Space />
        <span class="text-gray-700">3</span>
        <Space count={2} />
        <button class="text-gray-400" on:click={() => (isSkillsCollapsed = !isSkillsCollapsed)}>
          {#if isHovered}
            {isSkillsCollapsed ? '›' : '⌄'}
          {:else}
            <Space />
          {/if}
        </button>
        <Space />
        <Tab />
        <Tooltip>
          <span slot="activator" class="italic">skills</span>
          <div class="flex">(property)<Space />skills:<Space />Skill[];</div>
          <svelte:fragment slot="description">List of skills and skill durations</svelte:fragment>
        </Tooltip>
        <span>:</span>
        <Space />
        <span class="text-pink-400">{'['}</span>
        {#if isSkillsCollapsed}
          <span class="text-red-400">...</span>
          <span class="text-pink-400">{']'}</span>
          <span>,</span>
        {/if}
      </div>

      <!-- skills -->
      {#if !isSkillsCollapsed}
        {#each skills as skill, i}
          <div class="flex">
            <Space />
            <span class="text-gray-700">{4 + i}</span>
            <Space count={4} />
            <Tab count={2} />
            <span class="text-yellow-400">{'{'}</span>
            <Space />
            <Tooltip>
              <span slot="activator" class="italic">name</span>
              <div class="flex">(property)<Space />name:<Space />string;</div>
              <svelte:fragment slot="description">Name of developer skill</svelte:fragment>
            </Tooltip>
            <span>:</span>
            <Space />
            <span class="text-green-400">'{skill.name}'</span>
            <span>,</span>
            <Space />
            <Tooltip>
              <span slot="activator" class="italic">years</span>
              <div class="flex">(property)<Space />years:<Space />number;</div>
              <svelte:fragment slot="description">Number of years of experience</svelte:fragment>
            </Tooltip>
            <span>:</span>
            <Space />
            <span class="text-orange-400">{skill.years}</span>
            <Space />
            <span class="text-yellow-400">{'}'}</span>
            <span>,</span>
          </div>
        {/each}

        <div class="flex">
          <Space />
          <span class="text-gray-700">9</span>
          <Space count={4} />
          <Tab />
          <span class="text-pink-400">{']'}</span>
          <span>,</span>
        </div>
      {/if}

      <div class="flex">
        <span class="text-gray-700">10</span>
        <Space count={4} />
        <span class="text-lime-400">{'}'}</span>
        <span>;</span>
      </div>
    {/if}
  {/if}
</div>
