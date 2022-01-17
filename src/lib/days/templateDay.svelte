<script>
    export let today
    export let date
    export let dialog
    console.log(dialog)
    let open = dialog ? 'open' : ""
</script>

<section class="dailySection">
    <details {open}>
        <summary><strong>{date}</strong></summary>
        {#each today as story}
            <div class="storyWrapper">
                <a
                    class="storyLink"
                    href={story.url}
                >
                <span class:important="{story.important == true}">{story.title}</span>
                <span></span>
                </a>
            </div>
        {/each}

        
    </details>
	

</section>

<style>
	.storyWrapper {
		/* border-bottom: solid 1px lightgrey; */
		padding: 1em;
	}
    .important {
        color: red;
    }
</style>