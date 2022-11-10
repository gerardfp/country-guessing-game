<p>{guessCountry}</p>
<p>wins {wins} | fails {fails}</p>
<World on:countryClicked={handleClick} />

<script>
    import World, { elements, getRandomCountry } from './world.svelte'
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
        console.log(elements);
    })

    function nextCountry(){
        guessCountry = getRandomCountry();
    }
</script>

<style>
    p{ text-align: center;}
</style>