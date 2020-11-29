Vue.component('subscribe', {
    data(){
        return {

        }
    },
    template: `
        <div class="subscribeWrap" id="subscribe">
            <div class="container subscribe">
                <div class="reviewWrap">
                    <img src="img/ellipse_3_2206.png" alt="">
                    <div>
                        <blockquote>
                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </blockquote>
                        <div class="reviewAuthor">
                            Bin Burhan
                        </div>
                        <div class="authorLocation">
                            Dhaka, Bd
                        </div>
                        <div class="reivewRotator">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div class="subscribeDivider"></div>
                <form class="subscribeForm">
                    <div class="subscribeTitle">Subscribe</div>
                    <div class="subscribeText">
                        FOR OUR NEWLETTER AND PROMOTION
                    </div>
                    <input type="text" placeholder="Enter Your Email"><button>Subscribe</button>
                </form>
            </div>
        </div>
        `
});
