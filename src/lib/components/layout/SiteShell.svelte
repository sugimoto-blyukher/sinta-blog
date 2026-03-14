<script lang="ts">
	import HeadComponents from '$lib/components/HeadComponents.svelte';
	import FooterComponents from '$lib/components/FooterComponents.svelte';
	import HeaderComponent from '$lib/components/HeaderComponent.svelte';

	interface Props {
		showHead?: boolean;
		showFooter?: boolean;
		children?: import('svelte').Snippet;
	}

	let { showHead = true, showFooter = true, children }: Props = $props();
</script>

{#if showHead}
	<HeadComponents />
{/if}

<HeaderComponent />

{#if children}
	{@render children()}
{/if}

{#if showFooter}
	<FooterComponents />
{/if}
