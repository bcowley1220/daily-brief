<script>
	let imageArray2020 = [
		'apocalypse-bingo-just-keeps-on-giving-who-had-race-war-for-june-meme.jpg',
		'coinshortage.jpeg',
		'cokeboar.jpeg',
		'cyclones.jpeg',
		'doublehurricane.jpg',
		'monkeystealmay.jpg',
		'mummies.jpg',
		'nov-godzilla.jpeg',
		'racewar.jpeg',
		'superval.jpg'
	]

	let imageArray2022 = [
		'20220109-1.jpg',
		'20220109.jpg',
		'20220110-1.jpg',
	]
</script>

<h3>Apocalypse Bingo 2022</h3>

<div class="bingoCard image">
    <img class='bingo' src="2022bingo.png" alt="BingoCard">
</div>

<ul class='apocList'>
	{#each imageArray2022 as image, i}
		<li class="image">
			<img src={image} alt="" class="" height="" />
		</li>
	{/each}
</ul>



<h3>Apocalypse Bingo 2020 Memes/Results</h3>
<ul class='apocList'>
	{#each imageArray2020 as image, i}
		<li class="image">
			<img src={image} alt="" class="" height="" />
		</li>
	{/each}
</ul>

<style>
    .image {
        list-style-type: none;
        display: flex;
        justify-content: center;
        margin-bottom: 5em;
    }
	.image > img, .bingo {
		height: 100%;
		width: 100%;
		max-width: 600px;
		max-height: 700px;
	}
    .apocList {
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
    }
</style>
