<script lang="ts">
  import Space from '$lib/components/code/Space.svelte';
  import Tab from '$lib/components/code/Tab.svelte';
  import Tooltip from '$lib/components/shared/Tooltip.svelte';

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
    /** Returns summary of work experience and skills */
    about: () => string;
  };

  const joshFullmer: Developer = {
    description: 'User-focused frontend developer',
    skills: [
      { name: 'HTML/CSS', years: 4 },
      { name: 'Javascript', years: 4 },
      { name: 'Vue', years: 3 },
      { name: 'Typescript', years: 3 },
      { name: 'GraphQL', years: 3 }
    ],
    about: () => 'Go to about.svelte'
  };

  let showEnglishDescription = false;
  let isConstCollapsed = false;
  let isSkillsCollapsed = false;
  let isHovered = false;
</script>

<div
  class="flex flex-col h-full mx-[10%] my-8 text-xl leading-loose md:text-2xl lg:text-3xl md:leading-loose lg:leading-loose whitespace-nowrap"
  on:mouseover={() => (isHovered = true)}
  on:focus={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  on:blur={() => (isHovered = false)}
>
  <div class="flex items-start">
    <Space />
    <button
      class="ring-2 ring-sky-800 rounded hover:bg-gray-700 active:bg-gray-900"
      on:click={() => (showEnglishDescription = !showEnglishDescription)}
      ><Space />Swap<Space /></button
    >
    <Space />
    <span class="text-gray-700"
      >/** {showEnglishDescription
        ? '← Go back to code version'
        : '← See an English friendly description'} */</span
    >
  </div>

  {#if showEnglishDescription}
    <div class="flex items-start whitespace-normal">
      <Space />
      <span
        ><Tab count={2} />Hi! My name is <span class="text-sky-400">Josh Fullmer</span> and I'm a front-end
        developer. I love making apps with delightful user experiences. I also like to have fun along
        the way!</span
      >
    </div>

    <Space />

    <div class="flex items-start whitespace-normal">
      <Space />
      <span
        ><Tab count={2} />Professionally, I work primarily in
        <span class="text-green-400">Vue</span> in the frontend, and in
        <span class="text-purple-400">GraphQL/Express</span> in the backend. But you'll commonly
        find me working on side projects in <span class="text-blue-400">React</span> and
        <span class="text-red-400">Svelte</span>.</span
      >
    </div>

    <Space />

    <div class="flex items-start whitespace-normal">
      <Space />
      <span
        ><Tab count={2} />Thanks for visiting my website. Please take a look at my
        <a
          href="/about"
          class="underline underline-offset-4 decoration-sky-400 transition-colors duration-500 hover:text-sky-400"
          >skills, work experience</a
        >, and
        <a
          href="/apps"
          class="underline underline-offset-4 decoration-sky-400 transition-colors duration-500 hover:text-sky-400"
          >a fun app or two</a
        >.</span
      >
    </div>
  {:else}
    <!-- const joshFullmer -->
    <div class="flex items-start">
      <Space />
      <span class="text-gray-700">1</span>
      <Space count={2} />
      <button
        class="text-gray-400"
        aria-label={isConstCollapsed ? 'Expand' : 'Collapse'}
        on:click={() => (isConstCollapsed = !isConstCollapsed)}
      >
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
            <Tab />
            <span class="italic text-blue-400">about</span>
            <span class="italic text-cyan-400">:</span>
            <Space />
            <span>()</span>
            <Space />
            <span class="italic text-purple-400">=></span>
            <Space />
            <span class="text-yellow-400">string</span>
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
      <div class="flex items-start">
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

      <div class="flex items-start">
        <Space />
        <span class="text-gray-700">3</span>
        <Space count={2} />
        <button
          class="text-gray-400"
          aria-label={isConstCollapsed ? 'Expand' : 'Collapse'}
          on:click={() => (isSkillsCollapsed = !isSkillsCollapsed)}
        >
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
        {#each joshFullmer.skills as skill, i}
          <div class="flex items-start">
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

        <div class="flex items-start">
          <Space />
          <span class="text-gray-700">9</span>
          <Space count={4} />
          <Tab />
          <span class="text-pink-400">{']'}</span>
          <span>,</span>
        </div>
      {/if}

      <div class="flex items-start">
        <span class="text-gray-700">10</span>
        <Space count={2} />
        {#if isHovered}
          <a href="/about" class="text-gray-400 hover:bg-gray-700">›</a>
        {:else}
          <Space />
        {/if}
        <Space />
        <Tab />
        <Tooltip>
          <span slot="activator" class="text-blue-400 italic">about</span>
          <div class="flex">
            (property)<Space />about:<Space />()<Space /><span class="text-purple-400 italic"
              >=></span
            ><Space />string;
          </div>
          <svelte:fragment slot="description"
            >Returns summary of work experience and skills</svelte:fragment
          >
        </Tooltip>
        <span>:</span>
        <Space />
        <span class="text-pink-400">()</span>
        <Space />
        <span class="italic text-purple-400">=></span>
        <Space />
        <a href="/about" class="inline-flex hover:bg-gray-700">
          <span class="text-pink-400">{'{'}</span>
          <span class="text-red-400">...</span>
          <span class="text-pink-400">{'}'}</span>
        </a>
      </div>

      <div class="flex items-start">
        <span class="text-gray-700">11</span>
        <Space count={4} />
        <span class="text-lime-400">{'}'}</span>
        <span>;</span>
      </div>
    {/if}
  {/if}
</div>
