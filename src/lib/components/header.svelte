<script context="module">
</script>

<script>
	const sidebarVis = (e) => {
		document.querySelector('#sidebar').classList.toggle('active');
	};
</script>

<header>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a href="/" class="navbar-item businessTitle">Daily Brief</a>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				on:click={sidebarVis}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start" ></div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="">
						<div>
							<a href="/" class='links'>Brief</a>
						</div>

						<div>
							<a href="/media" class='links'>Bingo</a>
						</div>

						<div>
							<a href="/rona" class='links'>Rona Docs</a>
						</div>

						<div>
							<a href="/protocols" class='links'>Protocols</a>
						</div>
					</div> 
				 </div>
			</div>
		</div>
	</nav>
</header>

<style>
	.links {
		color: white;
	}
	header {
		background: rgb(167, 165, 165);
		width: 100%;
		height: 10%;
	}
	.businessTitle {
		color: hsl(130deg 34% 54%);
	}
	.navbar-burger {
		color: hsl(130deg 34% 54%);
	}
	.navbar {
		background-color: hsl(115deg 15% 17%);
	}
	.buttons {
		margin-right: 1em;
		justify-content: space-between;
		width: 150px;
	}

	.logout,
	.settings {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		font-size: 0.75em;
		color: hsl(130deg 34% 54%);
		transition: all 0.25s ease-in-out;
	}
	.logout:hover {
		transform: scale(1.2);
	}
	.logout > img,
	.settings > img {
		margin-right: 0.5em;
	}
	.navbar-brand > a > img {
		margin-right: 0.5em;
	}

	@media only screen and (min-width: 1040px) {
		.navbar-end {
			padding-right: 1em;
		}
	}
</style>
