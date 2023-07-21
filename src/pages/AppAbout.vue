<script>
export default {
    
}
</script>

<template>
    <div class="container-fluid main-container d-flex align-items-center justify-content-center">
        <div class="text-center text-white">
            <h1>Cocktail Bar</h1>
            <span>Scopri i nostri Cocktail</span>
        </div>
    </div>

    <div class="container-fluid py-5 text-light bg-light">
        <div class="container">
            <div class="row">
                <div class="col-8 text-black fs-6 about-description">
                    <div class="m-5">
                        Benvenuti al nostro cocktail bar, dove la passione per i cocktail artigianali si unisce all'ospitalità eccezionale. Con ingredienti selezionati e bartender esperti, offriamo esperienze uniche in un'atmosfera accogliente. Siamo qui per creare momenti indimenticabili insieme a voi. Prova i nostri cocktail e lasciati sorprendere.
                    </div>
    
                    <div class="m-5">
                        Vieni a trovarci e scopri il fascino e l'eleganza dei nostri cocktail artigianali. Siamo entusiasti di darti il benvenuto e di accompagnarti in un viaggio unico attraverso i sapori e le emozioni che solo un cocktail bar come il nostro può offrire. La tua soddisfazione è la nostra più grande ricompensa.
                    </div>
                </div>
    
                <div class="col-4 img-container">
                    <img src="../assets/img/cocktail5.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-container{
        height: calc(100vh - 126px);
        background-image: url('https://flawless.life/wp-content/uploads/2021/03/Cocktail-Bar-Roma-cover.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    

    h1{
        font-size: 70px;
        animation: title-enter;
        animation-duration: 1s;
        @keyframes title-enter {
            0%{
                margin-top: -10em;
            }
        }
    }

    .img-container{
        img{
        width: 100%;
        border-radius: .5em;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
    }

    .row{
        height: 300px;
    }

</style>