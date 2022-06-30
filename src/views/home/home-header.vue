<template>
    <div class="home-header">
        <!-- <div class="bg"></div> -->
        <!-- <div class="point"></div> -->
        <div class="home-header-content">
            <div class="header-content">
                <div class="text">HI,&nbsp;欢&nbsp;迎&nbsp;来&nbsp;到&nbsp;我&nbsp;的&nbsp;BLOG</div>
                <div class="to-main">
                    <i @click="toMain" class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </div>
            <div class="wave-content">
                <div class="wave1"></div>
                <div class="wave2"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "xgHeader",
    data() {
        return {};
    },
    created() {},
    mounted() {
        this.waveMove();
        document.getElementsByClassName("home-header")[0].style.height = window.innerHeight + "px";
        // 监听页面缩放
        window.addEventListener("resize", this.homeHeaderHeight);
    },
    methods: {
        homeHeaderHeight() {
            document.getElementsByClassName("home-header")[0].style.height = window.innerHeight + "px";
        },
        toMain() {
            let scrollTopLength = document.body.scrollTop || document.documentElement.scrollTop;
            let homeContentHeight = document.getElementsByClassName("header-content")[0].offsetHeight;

            let toMain = setInterval(() => {
                if (scrollTopLength < homeContentHeight) {
                    scrollTopLength += 10;
                    window.scrollTo(0, scrollTopLength);
                } else {
                    window.scrollTo(0, homeContentHeight - 75);
                    clearInterval(toMain);
                }
            }, 1);
        },
        waveMove() {
            let wave1 = document.getElementsByClassName("wave1")[0];
            let wave2 = document.getElementsByClassName("wave2")[0];
            let waveMove1 = 0;
            let waveMove2 = 0;
            setInterval(() => {
                waveMove1 -= 0.2;
                wave1.style.left = waveMove1 + "px";
                waveMove2 -= 0.1;
                wave2.style.left = waveMove2 + "px";
            }, 1 / 12);
        },
    },
};
</script>

<style lang="less">
.home-header {
    user-select: none;
    .home-header-content {
        width: 100%;
        height: 100%;
        .header-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            box-sizing: border-box;
            .text {
                margin-top: 150px;
                font-size: 60px;
                font-weight: bolder;
                color: white;
            }
            .to-main {
                font-size: 30px;
                color: white;
                cursor: pointer;
                animation: main 2s linear infinite;
                @keyframes main {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-6px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            }
            .to-main:hover {
                cursor: pointer;
            }
        }
    }
    .wave-content {
        position: relative;
        width: 100%;
        height: 75px;
        top: -65px;
        .wave1 {
            position: absolute;
            width: 4000%;
            height: 75px;
            bottom: 10px;
            background: url("@/assets/imgs/wave2.png");
            opacity: 0.5;
        }
        .wave2 {
            position: absolute;
            width: 4000%;
            height: 65px;
            background: url("@/assets/imgs/wave2.png");
        }
    }
    // 伪类添加背景图
    .home-header-content::before {
        content: "";
        position: fixed;
        width: 100%;
        height: 100%;
        background: url("@/assets/imgs/bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -100;
    }
    .header-content::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif");
        z-index: -99;
    }
    // .bg {
    //     position: fixed;
    //     width: 100%;
    //     height: 100%;
    //     background: url("@/assets/imgs/bg.jpg");
    //     background-size: cover;
    //     background-repeat: no-repeat;
    //     z-index: -100;
    // }
    // .point {
    //     position: fixed;
    //     width: 100%;
    //     height: 100%;
    //     background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif");
    //     z-index: -99;
    // }
}
</style>
