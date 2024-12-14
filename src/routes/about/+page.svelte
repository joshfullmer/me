<script lang="ts">
	import Space from '$lib/components/code/Space.svelte';
	import DownloadIcon from '$lib/components/DownloadIcon.svelte';
	import GithubLink from '$lib/components/GithubLink.svelte';
	import LinkedInLink from '$lib/components/LinkedInLink.svelte';
	import Tooltip from '$lib/components/shared/Tooltip.svelte';
	import TwitterLink from '$lib/components/TwitterLink.svelte';

	let skills = [
		{ skill: 'HTML', years: 8 },
		{ skill: 'CSS', years: 8 },
		{ skill: 'JavaScript', years: 8 },
		{ skill: 'Vue', years: 3 },
		{ skill: 'GraphQL', years: 4 },
		{ skill: 'TypeScript', years: 6 },
		{ skill: 'Express', years: 4 },
		{ skill: 'NestJS', years: 1 },
		{ skill: 'Firebase', years: 3 },
		{ skill: 'React', years: 4 },
		{ skill: 'TailwindCSS', years: 4 },
		{ skill: 'Python', years: 2 }
	] satisfies { skill: string; years: number }[];

	let experience = [
		{
			title: 'Senior Software Engineer',
			companyName: 'Endpoint Closing',
			companyUrl: 'https://www.endpoint.com/',
			startDate: new Date('2024-02-01T12:00:00.000Z'),
			endDate: null
		},
		{
			title: 'Senior Software Engineer',
			companyName: 'Collectors',
			companyUrl: 'collectors.com',
			startDate: new Date('2022-05-01T12:00:00.000Z'),
			endDate: new Date('2024-02-01T12:00:00.000Z')
		},
		{
			title: 'Software Engineer III',
			companyName: 'Keap',
			companyUrl: 'keap.com',
			startDate: new Date('2019-04-01T12:00:00.000Z'),
			endDate: new Date('2022-05-31T12:00:00.000Z')
		},
		{
			title: 'Data Engineer & Project Manager',
			companyName: 'Keap',
			companyUrl: 'keap.com',
			startDate: new Date('2015-06-01T12:00:00.000Z'),
			endDate: new Date('2019-04-30T12:00:00.000Z')
		},
		{
			title: 'Technical Customer Support',
			companyName: 'Keap',
			companyUrl: 'keap.com',
			startDate: new Date('2013-09-01T12:00:00.000Z'),
			endDate: new Date('2015-06-30T12:00:00.000Z')
		}
	] satisfies {
		title: string;
		companyName: string;
		companyUrl: string;
		startDate: Date;
		endDate: Date | null;
	}[];

	let siteTools = ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Vite', 'pnpm', 'Vercel'];
</script>

<div class="mt-8 flex flex-col items-center overflow-y-auto">
	<h2 class="mb-8 flex text-2xl leading-loose">
		<Tooltip>
			<span slot="activator">joshFullmer</span>

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
		<span class="text-purple-400">.</span>
		<Tooltip>
			<span slot="activator" class="italic text-blue-400">about</span>
			<div class="flex">
				(property)<Space />about:<Space />()<Space /><span class="italic text-purple-400">=></span
				><Space />string;
			</div>
			<svelte:fragment slot="description"
				>Returns summary of work experience and skills</svelte:fragment
			>
		</Tooltip>
		<span class="text-lime-400">()</span>
	</h2>

	<!-- Body -->
	<div class="flex max-w-[60%] flex-col">
		<!-- Buttons -->
		<div class="mb-8 flex items-center gap-2">
			<LinkedInLink />
			<GithubLink />
			<TwitterLink />
			<div class="flex items-center">
				<span class="text-gray-500">Download my</span><Space /><a
					href="josh-fullmer-resume.docx"
					download
					class="inline-flex items-center gap-2 rounded px-3 py-2 text-sky-400 ring-2 ring-sky-800 hover:bg-gray-700 hover:text-gray-300 active:bg-gray-900"
				>
					<span>resume</span>
					<DownloadIcon />
				</a>
			</div>
		</div>

		<div class="mb-8 flex leading-loose">
			I am a user-focused front-end web developer. I'm from Phoenix, AZ and live in Gulf Breeze, FL.
		</div>

		<h3 class="mb-4">
			<span class="text-sky-400">Technical Skills</span><Space /><span class="text-gray-500"
				>~years</span
			>
		</h3>

		<div class="mb-8 flex max-h-[175px] flex-col flex-wrap leading-loose">
			{#each skills as { skill, years }}
				<p>{skill}<Space /><span class="text-gray-500">-<Space />{years}</span></p>
			{/each}
		</div>

		<h3 class="mb-4 text-sky-400">Work Experience</h3>

		<div class="mb-8 flex flex-col leading-loose">
			{#each experience as job}
				<div class="mb-4 flex flex-col">
					<span class="font-semibold">{job.title}</span>
					<span class="text-gray-500"
						>@ <a href={job.companyUrl} target="_blank" rel="noreferrer">{job.companyName}</a></span
					>
					<span class="text-gray-500"
						>{job.startDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} - {job.endDate
							? job.endDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
							: 'now'}</span
					>
				</div>
			{/each}
		</div>

		<h3 class="mb-4 text-sky-400">joshfullmer.dev</h3>

		<div class="mb-20 flex flex-col">
			<span class="mb-4">This site was lovingly built with:</span>

			<div class="flex max-h-[90px] flex-col flex-wrap">
				{#each siteTools as tool}
					<span class="mx-4">{tool}</span>
				{/each}
			</div>
		</div>
	</div>
</div>
