<script>
	document.addEventListener('DOMContentLoaded', () => {
		const openBtn = document.getElementById('open-menu-btn');
		const closeBtn = document.getElementById('close-menu-btn');
		const menu = document.getElementById('slide-menu');
		const overlay = document.getElementById('menu-overlay');
		const menuLinks = document.querySelectorAll('.menu-link');

		// Menu animation duration
		const duration = 0.5;
		const ease = 'power3.inOut';

		// Open Menu
		const openMenu = () => {
			gsap.to(menu, { x: 0, duration: duration, ease: ease });
			gsap.to(overlay, { opacity: 1, pointerEvents: 'auto', duration: duration });
		};

		// Close Menu
		const closeMenu = () => {
			gsap.to(menu, { x: '100%', duration: duration, ease: ease });
			gsap.to(overlay, { opacity: 0, pointerEvents: 'none', duration: duration });
		};

		// Event Listeners
		if (openBtn) openBtn.addEventListener('click', openMenu);
		if (closeBtn) closeBtn.addEventListener('click', closeMenu);
		if (overlay) overlay.addEventListener('click', closeMenu);

		// Close menu when clicking a link
		menuLinks.forEach((link) => {
			link.addEventListener('click', closeMenu);
		});
	});
</script>

<!-- Overlay for menu -->
<div
	id="menu-overlay"
	class="fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-40"
></div>

<!-- Slide Menu -->
<nav
	id="slide-menu"
	class="fixed top-0 right-0 w-64 h-full bg-cyan-900 text-white z-50 transform translate-x-full shadow-2xl dotgothic16-regular"
>
	<div class="p-6 flex flex-col h-full">
		<div class="flex justify-end mb-8">
			<button id="close-menu-btn" class="text-white hover:text-amber-400 transition-colors">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<ul class="space-y-6 text-2xl text-center">
			<li>
				<a href="#about" class="menu-link hover:text-amber-400 block py-2 border-b border-cyan-700"
					>About me</a
				>
			</li>
			<li>
				<a
					href="#timeline"
					class="menu-link hover:text-amber-400 block py-2 border-b border-cyan-700">タイムライン</a
				>
			</li>
			<li>
				<a
					href="goal.html"
					class="menu-link hover:text-amber-400 block py-2 border-b border-cyan-700">目標</a
				>
			</li>
			<li>
				<a href="#links" class="menu-link hover:text-amber-400 block py-2 border-b border-cyan-700"
					>関連リンク集</a
				>
			</li>
		</ul>
	</div>
</nav>

<header class="bg-cyan-800 p-4 relative flex items-center justify-center">
	<div class="text-center w-full">
		<h1 class="text-5xl md:text-8xl dotgothic16-regular text-white">Sugimotoのポートフォリオ</h1>
	</div>
	<!-- Hamburger Button -->
	<button
		id="open-menu-btn"
		class="absolute right-4 text-white hover:text-amber-400 transition-colors z-30 p-2"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-10 w-10 md:h-12 md:w-12"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</header>
