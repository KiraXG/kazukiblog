<template>
    <div id="app">
        <div class="progress-bar"></div>
        <div class="to-top" :class="toTopActive" @click="toTop"></div>
        <live2d class="live2d"></live2d>
        <layout-nav></layout-nav>
        <section>
            <!--组件渲染-->
            <router-view></router-view>
        </section>
        <footer></footer>
    </div>
</template>

<script>
import layoutNav from "@/views/layout/layout-nav";
import live2d from "@/components/live2d-widget-master/live2d";

export default {
    components: {
        layoutNav,
        live2d,
    },
    data() {
        return {
            toTopActive: {
                "to-top-show": false,
                "to-top-hide": false,
            },
            scrollTopLength: 0,
        };
    },
    watch: {
        scrollTopLength() {
            this.$nextTick(() => {
                this.progressBar()
            })
        }
    },
    created() {},
    mounted() {
        // 监听页面滚动
        window.addEventListener("scroll", this.toTopShow);
    },
    methods: {
        toTopShow() {
            let scrollTopLength = document.body.scrollTop || document.documentElement.scrollTop;
            this.scrollTopLength = scrollTopLength;
            if (scrollTopLength > 100) {
                this.toTopActive = {
                    "to-top-show": true,
                    "to-top-hide": false,
                };
            } else {
                this.toTopActive = {
                    "to-top-show": false,
                    "to-top-hide": true,
                };
            }
        },
        toTop() {
            let toTopTime = setInterval(() => {
                if (this.scrollTopLength > 0) {
                    this.scrollTopLength -= 10;
                    window.scrollTo(0, this.scrollTopLength);
                } else {
                    clearInterval(toTopTime);
                }
            }, 1);
        },
        progressBar() {
            let scrollWidth = document.body.scrollWidth
            let scrollHeight = document.body.scrollHeight
            let innerHeight = window.innerHeight
            document.getElementsByClassName('progress-bar')[0].style.width = (this.scrollTopLength / (scrollHeight - innerHeight)) * scrollWidth + 'px'
        }
    },
};
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
    // overflow: hidden;
    .progress-bar {
        position: fixed;
        height: 5px;
        background-color: #fe9600;
        z-index: 101;
    }
    .live2d {
        z-index: 100;
    }
    .to-top {
        position: fixed;
        width: 70px;
        height: 900px;
        top: -900px;
        right: 25px;
        z-index: 98;
        cursor: pointer;
        background: url("@/assets/imgs/scroll.png") no-repeat center;
        background-size: contain;
        transition: all 0.5s ease-in-out;
        animation: toTop 2s linear infinite;
        @keyframes toTop {
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
    .to-top-show {
        top: -300px;
    }
    .to-top-hide {
        top: -900px;
    }
    
}
</style>
