Vue.component('offers', {
    data(){
        return {

        }
    },
    template: `
        <div class="container offers" id="offers">
            <div id="men">
                <img src="img/offer1.jpg" alt="">
                <div class="label">
                    <div class="labelTop">
                        hot deal
                    </div>
                    <div class="labelBottom">for men</div>
                </div>
            </div>
            <div id="accesories">
                <img src="img/offer2.jpg" alt="">
                <div class="label">
                    <div class="labelTop">
                        luxirous & trendy
                    </div>
                    <div class="labelBottom">
                        accesories
                    </div>
                </div>
            </div>
            <div id="women">
                <img src="img/offer3.jpg" alt="">
                <div class="label">
                    <div class="labelTop">30% offer</div>
                    <div class="labelBottom">women</div>
                </div>
            </div>
            <div id="kids">
                <img src="img/offer4.jpg" alt="">
                <div class="label">
                    <div class="labelTop">new arrivals</div>
                    <div class="labelBottom">for kids</div>
                </div>
            </div>
        </div>
        `
});
