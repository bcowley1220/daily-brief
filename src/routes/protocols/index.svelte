<script>
    import {protocolList} from '$lib/stores/protocols'
    
</script>
<section class="dailySection">
        <p><strong>Covid Protocols</strong></p>
        {#each $protocolList as protocol}
            <div class="storyWrapper">
                <a
                    class="storyLink"
                    href={protocol.url}
                >
                <span class:important="{protocol.important == true}">{protocol.title}</span>
                <span></span>
                </a>
            </div>
        {/each}
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