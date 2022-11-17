<p>{guessCountry}</p>
<p><span class:win class:rewin={!win}> wins {wins}</span> | <span class:fail class:refail={!fail}>fails {fails}</span></p>
<p class=clicked>{clickedCountry}</p>
<World on:countryClicked={handleClick} />
<ul class="guessed">
    {#each [...guessed] as country}
        <li>{country}</li>
    {/each}
</ul>
<ul class="failed">
    {#each [...failed] as country}
        <li>{country}</li>
    {/each}
</ul>

<script>
    import { World,countries } from 'mapa-mundi'
    import { onMount } from 'svelte';
    let guessCountry="_", clickedCountry="_", wins = 0, fails = 0, win, fail;
    let guessed = new Set(), failed = new Set();

    //let countries =["Spain","France","Italy","Germany"];
    function handleClick(event) {
        if(event.detail.country != null){
            
            clickedCountry = event.detail.country;
            if(event.detail.country === guessCountry){
                wins++;
                win=!win;
                guessed.add(guessCountry);
                failed.delete(guessCountry);
                guessed = guessed;
            } else {
                fails++;
                fail=!fail;
                failed.add(guessCountry);
            }
            failed = failed;
            nextCountry();
        }
    }

    onMount(() => {
		nextCountry();
    })

    function nextCountry(){
        guessCountry = getRandomCountry();
    }

    function getRandomCountry(){
        let i = Math.floor(Math.random()*countries.length);
        let starti = i;
        while(true){
            if (guessed.has(countries[i])){
                i++;
                if (i>=countries.length) i=0;
            } else {
                return countries[i];
            }
            if (i==starti) {
                return "Congratulations, you guessed them all!";
            }
        }
    }
</script>

<style>
    p{ text-align: center;}
    p.clicked { color: rgb(172, 172, 172)}

    ul {
        list-style-type: none;
    }
    ul.guessed {
        color: green;
        position: absolute;
        top: 0;
        left: 0;
    }
    ul.failed {
        color: red;
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 40px;
    }



    span.rewin { animation: reshine-green 1s; }
    span.win { animation: shine-green 1s; }
    span.refail { animation: reshine-red 1s; }
    span.fail { animation: shine-red 1s; }


    @keyframes shine-green {
        30%{ text-shadow: 0 0 16px rgb(56, 141, 56), 0 0 12px rgb(17, 189, 17), 0 0 6px rgb(0, 255, 0);}
        100%{ text-shadow: none;}
    }
    @keyframes reshine-green {
        30%{ text-shadow: 0 0 16px rgb(56, 141, 56), 0 0 12px rgb(17, 189, 17), 0 0 6px rgb(0, 255, 0);}
        100%{ text-shadow: none;}
    }
    @keyframes shine-red {
        30%{text-shadow: 0 0 16px rgb(141, 56, 56), 0 0 12px rgb(189, 17, 17), 0 0 6px rgb(255, 0, 0);}
        100%{ text-shadow: none;}
    }
    @keyframes reshine-red {
        30%{text-shadow: 0 0 16px rgb(141, 56, 56), 0 0 12px rgb(189, 17, 17), 0 0 6px rgb(255, 0, 0);}
        100%{ text-shadow: none;}
    }
</style>