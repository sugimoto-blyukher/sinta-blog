<script>
	import HeadComponents from '$lib/components/HeadComponents.svelte';
	import FooterComponents from '$lib/components/FooterComponents.svelte';
	import HeaderComponent from '$lib/components/HeaderComponent.svelte';

	const WAKA_API_BASE =
		import.meta.env.PUBLIC_WAKA_API_BASE ??
		"https://portofolio-backend-jesqj4h9x-sugimotos-projects-ab32d847.vercel.app";


	const goals = ['自作OSを作る', '規則正しい生活を送る', 'OSS研で活躍する'];

	const today = new Date().toLocaleDateString('ja-JP')

	const startDay = "2025/12/01";


</script>

<HeadComponents />

<HeaderComponent />

<main class="bg-amber-400 min-h-screen flex flex-col">
	<section
		id="about"
		class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-grow scroll-mt-20"
	>
		<div class="flex justify-center md:justify-end">
			<img
				src="/ore.jpg"
				alt="Sugimoto"
				class="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
			/>
		</div>

		<div class="flex flex-col items-center text-center dotgothic16-regular">
			<h1 class="text-4xl pt-4 md:pt-0 font-bold">About me</h1>
			<p class="pt-4 text-xl">Sugimotoのポートフォリオ</p>
			<p class="text-lg">公立はこだて未来大学１年生です。</p>
			<p class="text-lg px-4">制御工学、ロボティクス、低レイヤーやfpgaなどに興味があります。</p>
			<p class="text-lg px-4">最近は低レイヤーに焦点を絞って学習に取り組んでいます</p>

			<h2 id="goals" class="text-4xl pt-8 font-bold scroll-mt-20">
				<a href="/goal.html">目標</a>
			</h2>
			<div class="text-xl mt-4">
				<table class="border-separate border-spacing-y-2">
					<tbody>
						{#each goals as goal}
							<tr>
								<td>{goal}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<hr class="border-cyan-800 border-2 mx-8 opacity-50" />
</main>

<FooterComponents />
