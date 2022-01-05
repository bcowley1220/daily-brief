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
			<a href="/verified/home" class="navbar-item businessTitle">Daily Brief</a>

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
			<div class="navbar-start" />

			<div class="navbar-end">
				<!-- <div class="navbar-item">
					<div class="buttons">
						<div>
							<div class="logout">
								<img src="../images/info.svg" alt="Info" width="16px" title="Info" />
							</div>
						</div>

						<div on:click={logOut}>
							<div class="logout">
								<img src="../images/logout.png" alt="Log Out Icon" width="16px" title="Logout?" /> Log
								Out
							</div>
						</div>
					</div> -->
				<!-- </div> -->
			</div>
		</div>
	</nav>
</header>

<style>
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
