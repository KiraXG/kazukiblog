<template>
    <div class="layout-nav">
        <div class="left" :class="leftActive">胡小乖</div>
        <div class="nav" :class="navActive">
            <ul class="nav-content" :class="navItemActive">
                <li v-for="item in nav" :key="item.id" @click="handleChange(item)">
                    <router-link :to="{ path: item.path }" class="nav-item">
                        <span class="iconfont" :class="item.img"></span>
                        <span class="navName">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right" :class="rightActive">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-yonghu-yuan"></i>
        </div>
    </div>
</template>

<script>
// 组件
export default {
    name: "xgNav",
    data() {
        return {
            nav: [
                { id: "home", name: "首页", img: "icon-shouye", path: "/home" },
                { id: "classification", name: "分类", img: "icon-fenlei", path: "/classification" },
                { id: "comic", name: "番剧", img: "icon-dongman", path: "/comic" },
                { id: "comicNews", name: "新番咨询", img: "icon-tuijian1", path: "/comicNews" },
                { id: "about", name: "关于", img: "icon-guanyu", path: "/about" },
                { id: "help", name: "帮助", img: "icon-bangzhu1", path: "/help" },
            ],
            curId: "home",
            scrollTopLength: document.body.scrollTop || document.documentElement.scrollTop,
            navActive: {
                navShow: false,
                navHide: false,
                navShadow: true,
            },
            navItemActive: {
                navItemShow: false,
                navItemHide: false,
                navItemActive: true,
            },
            leftActive: {
                leftActive: true,
            },
            rightActive: {
                rightActive: true,
            },
        };
    },
    created() {},
    mounted() {
        window.addEventListener("scroll", this.navShow);
        this.init();
    },
    methods: {
        init() {
            this.navActive = {
                navShow: false,
                navHide: true,
                navShadow: true,
            };
            this.navItemActive = {
                navItemShow: false,
                navItemHide: true,
                navItemActive: true,
            };
        },
        handleChange(item) {
            this.curId = item.id;
            this.navShowOrHide();
            this.navShadowShow();
            this.leftActive = {
                leftActive: false,
            };
            this.rightActive = {
                rightActive: false,
            };
            this.navItemActive.navItemActive = false;
            setTimeout(() => {
                this.leftActive = {
                    leftActive: true,
                };
                this.rightActive = {
                    rightActive: true,
                };
                this.navItemActive.navItemActive = true;
            });
        },
        navShow() {
            let scrollTopLength = document.body.scrollTop || document.documentElement.scrollTop;
            this.scrollTopLength = scrollTopLength;
            this.navShowOrHide();
            this.navShadowShow();
        },
        navShowOrHide() {
            if (this.curId === "home") {
                if (this.scrollTopLength > 0) {
                    this.navActive = {
                        navShow: true,
                        navHide: false,
                        navShadow: true,
                    };
                    this.navItemActive = {
                        navItemShow: true,
                        navItemHide: false,
                        navItemActive: true,
                    };
                } else {
                    this.navActive = {
                        navShow: false,
                        navHide: true,
                        navShadow: true,
                    };
                    this.navItemActive = {
                        navItemShow: false,
                        navItemHide: true,
                        navItemActive: true,
                    };
                }
            } else {
                this.navActive = {
                    navShow: true,
                    navHide: false,
                    navShadow: false,
                };
                this.navItemActive = {
                    navItemShow: true,
                    navItemHide: false,
                    navItemActive: false,
                };
            }
        },
        navShadowShow() {
            if (this.scrollTopLength > 0) {
                this.navActive.navShadow = true;
            } else {
                this.navActive.navShadow = false;
            }
        },
    },
};
</script>

<style lang="less">
.layout-nav {
    user-select: none;
    .left {
        position: fixed;
        height: 75px;
        left: 20px;
        font-size: 24px;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }
    .leftActive {
        animation: left 1s;
        @keyframes left {
            0% {
                opacity: 0;
                transform: translateX(-30px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
    .right {
        position: fixed;
        right: 20px;
        width: 100px;
        height: 75px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 100;
        .iconfont,
        .iconfont::before {
            color: rgb(88, 88, 88);
            font-size: 35px;
        }
        .icon-sousuo:hover::before {
            color: #fe9600;
            cursor: pointer;
        }
        .icon-yonghu-yuan:hover::before {
            color: rgb(209, 107, 70);
            cursor: pointer;
        }
    }
    .rightActive {
        animation: right 1s;
        @keyframes right {
            0% {
                opacity: 0;
                transform: translateX(30px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
    .nav {
        width: 100%;
        height: 75px;
        position: fixed;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        color: rgb(88, 88, 88);
        background-color: rgba(255, 255, 255, 1);

        transition: all 0.3s ease-in-out;
        .nav-content {
            display: flex;
            height: 75px;
            margin-left: 30px;
            opacity: 0;
            transition: all 0.8s ease;
            .nav-item {
                width: 150px;
                height: 100%;
                font-size: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .nav-item:hover {
                color: #fe9600;
                cursor: pointer;
                .iconfont,
                .iconfont::before {
                    animation: iconAni 2.5s ease-in-out infinite;
                    @keyframes iconAni {
                        0% {
                            transform: rotate(0);
                        }
                        6.25% {
                            transform: rotate(15deg);
                        }
                        12.5% {
                            transform: rotate(-15deg);
                        }
                        18.75% {
                            transform: rotate(15deg);
                        }
                        25% {
                            transform: rotate(-15deg);
                        }
                        31.25% {
                            transform: rotate(15deg);
                        }
                        37.5% {
                            transform: rotate(-15deg);
                        }
                        43.75% {
                            transform: rotate(15deg);
                        }
                        50% {
                            transform: rotate(0);
                        }
                        100% {
                            transform: rotate(0);
                        }
                    }
                }
            }
            .nav-item::after {
                content: "";
                display: block;
                width: 0;
                height: 6px;
                position: absolute;
                bottom: 0;
                background-color: #fe9600;
                transition: all 0.3s ease-in-out;
            }
            .nav-item:hover::after {
                width: 150px;
            }
        }
        .navItemShow {
            margin-left: 0;
            opacity: 1;
        }
        .navItemHide {
            margin-left: 30px;
            opacity: 0;
        }
        .navItemActive {
            animation: navItem 1s;
            @keyframes navItem {
                0% {
                    opacity: 0;
                    transform: translateX(30px);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }
    }
    .navShow {
        opacity: 1;
    }
    .navHide {
        opacity: 0;
    }
    .navShadow {
        box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
    }
}
.layout-nav:hover {
    .nav {
        opacity: 1;
        .nav-content {
            margin-left: 0;
            opacity: 1;
        }
    }
}
</style>
