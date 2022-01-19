<script>
    import OneEight22ToOneTen22 from '../lib/days/oneEight22ToOneTen22.svelte'
    import OneEleven22 from '$lib/days/oneEleven22.svelte'
    import One1222 from '$lib/days/one1222.svelte';
    import One5to722 from '$lib/days/one5to722.svelte';
    import One1322 from '$lib/days/one1322.svelte'
    import { janDays } from '$lib/stores/january2022';
    import TemplateDay from '$lib/days/templateDay.svelte'
    let today = $janDays.fourteenToSeventeen
    let open = 'open'
</script>
<h1>The Daily Brief will be in descending order. Stay Frosty.</h1>

<TemplateDay bind:date={$janDays.eighteenToNineteen.date} bind:stories={$janDays.eighteenToNineteen.stories} bind:dialog={open}/>
<TemplateDay bind:date={$janDays.fourteenToSeventeen.date} bind:stories={$janDays.fourteenToSeventeen.stories}/>
<One1322 />
<One1222/>
<OneEleven22/>
<OneEight22ToOneTen22/>
<One5to722/>



<style>
 
</style>
