<p>{guessCountry}</p>
<p>wins {wins} | fails {fails}</p>
<World on:countryClicked={handleClick} />

<script>
    import { World, getRandomCountry } from 'mapa-mundi'
    import { onMount } from 'svelte';

    let guessCountry, wins = 0, fails = 0;

    function handleClick(event) {
        if(event.detail.country === guessCountry){
            wins++;
        } else {
            fails++;
        }
        nextCountry();
    }

    onMount(() => {
		nextCountry();
    })

    function nextCountry(){
        guessCountry = getRandomCountry();
    }
</script>

<style>
    p{ text-align: center;}
</style>