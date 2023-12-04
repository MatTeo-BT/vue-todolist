const { createApp } = Vue;

createApp({
    data() {
        return {
            movieListToWatch: [
                {text:`Hacksaw Ridge`, done:`true`},
                {text:`Marvel Spider-Man`, done:`true`},
                {text:`Deadpool`, done:`false`},
                {text:`American sniper`, done:`true`},
                {text:`The grat Gatsby`, done:`false`},
                {text:`Uncharted`, done:`true`},
                {text:`John Wick`, done:`false`},
                {text:`Creed II`, done:`false`},
                {text:`Fight club`, done:`true`},
                {text:`American psycho`, done:`false`},
                {text:`Shutter island`, done:`false`},
                
            ]
        }
    },
}).mount('#app');