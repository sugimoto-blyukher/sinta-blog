<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import { timelineEntries } from '$lib/data/timeline.js';
</script>

<SiteShell>
	<main class="bg-amber-400">
		<section class="container mx-auto px-4 py-8">
			<h1 class="text-4xl font-bold mb-8">Timeline</h1>
			<div class="border-l-2 border-gray-300 pl-4">
				{#each timelineEntries as { date, event } (`${date}-${event}`)}
					<div class="mb-6">
						<div class="flex items-center mb-2">
							<div class="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
							<h2 class="text-xl font-semibold">{date}</h2>
						</div>
						<p class="ml-8 text-gray-700">{event}</p>
					</div>
				{/each}
			</div>
		</section>
	</main>
</SiteShell>
