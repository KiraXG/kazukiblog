<template>
    <div class="home">
        <home-header class="homeHeader"></home-header>
        <div class="home-content">
            <div class="primary"></div>
        </div>
    </div>
</template>

<script>
import homeHeader from "./home-header";

export default {
    name: "xgHome",
    components: {
        homeHeader,
    },
    data() {
        return {
            bgChange: {
                background: "url(" + require("../../assets/imgs/bg.jpg") + ")",
                backgroundSize: "cover",
            },
        };
    },
    created() {},
    mounted() {
        this.waveMove();
    },
    methods: {
        toMain() {
            let scrollTopLength = document.body.scrollTop || document.documentElement.scrollTop;
            let homeHeaderHeight = document.getElementsByClassName("home-content")[0].clientHeight;

            let toMain = setInterval(() => {
                if (scrollTopLength < homeHeaderHeight) {
                    scrollTopLength += 10;
                    window.scrollTo(0, scrollTopLength);
                } else {
                    window.scrollTo(0, homeHeaderHeight - 75);
                    clearInterval(toMain);
                }
            }, 1);
        },
        waveMove() {
            let wave1 = document.getElementsByClassName("wave1")[0];
            let wave2 = document.getElementsByClassName("wave2")[0];
            let waveMove = 0;
            let waveMove1 = 0;
            setInterval(() => {
                waveMove -= 0.2;
                wave1.style.left = waveMove + "px";
                waveMove1 -= 0.1;
                wave2.style.left = waveMove1 + "px";
            }, 1 / 12);
        },
    },
};
</script>

<style lang="less">
.home {
    width: 100%;
    height: 100%;
    .homeHeader {
        animation: headTop 0.5s ease-out;
        @keyframes headTop {
            from {
                transform: translateY(-100px);
                opacity: 0.8;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
    .home-content {
        width: 100%;
        height: 1000px;
        display: flex;
        justify-content: center;
        background-color: skyblue;
        .primary {
            width: 60%;
            margin: 10px 0;
            border-radius: 5px;
            background-color: white;
        }
    }
}
</style>
