<template>
    <div class="home">
        <home-header class="homeHeader"></home-header>
        <div class="home-content" :style="bgChange">
            <div class="themePosition" v-if="themeShow">
                <el-dropdown trigger="click" @command="handleChangeBg">
                    <el-button type="text">更换主题</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <!-- <el-dropdown-item command="black"><span class="dropdownItem" style="background-color: black;"></span></el-dropdown-item>
                        <el-dropdown-item command="wheat"><span class="dropdownItem" style="background-color: wheat;"></span></el-dropdown-item>
                        <el-dropdown-item command="red"><span class="dropdownItem" style="background-color: red;"></span></el-dropdown-item>
                        <el-dropdown-item command="green"><span class="dropdownItem" style="background-color: green;"></span></el-dropdown-item>
                        <el-dropdown-item command="blue"><span class="dropdownItem" style="background-color: blue;"></span></el-dropdown-item> -->
                        <el-dropdown-item v-for="(item, index) in bgSelect" :command="item.color" :key="index"><span class="dropdownItem" :style="item.style"></span></el-dropdown-item>
                        <span class="color-select"><el-color-picker v-model="color" :show-alpha="true"></el-color-picker></span>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
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
                // background: "url(" + require("../../assets/imgs/bg1.png") + ")",
                background: "#87CEFA",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            },
            bgSelect: [
                { color: "#DC143C", style: { background: "#DC143C" } }, // crimson
                { color: "#FF6347", style: { background: "#FF6347" } }, // orangered
                { color: "#FFD700", style: { background: "#FFD700" } }, // gold
                { color: "#00FF7F", style: { background: "#00FF7F" } }, // springgreen
                { color: "#87CEFA", style: { background: "#87CEFA" } }, // skyblue
                { color: "#FF69B4", style: { background: "#FF69B4" } }, // hotpink
                { color: "#EE82EE", style: { background: "#EE82EE" } }, // violet
            ],
            themeShow: false,
            color: "",
        };
    },
    watch: {
        color: {
            handler(n) {
                this.setBgColor(n);
            },
        },
    },
    created() {},
    mounted() {
        // this.waveMove();
        this.setBg();
        window.addEventListener("scroll", this.themeIsShow);
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
        // waveMove() {
        //     let wave1 = document.getElementsByClassName("wave1")[0];
        //     let wave2 = document.getElementsByClassName("wave2")[0];
        //     let waveMove = 0;
        //     let waveMove1 = 0;
        //     setInterval(() => {
        //         waveMove -= 0.2;
        //         wave1.style.left = waveMove + "px";
        //         waveMove1 -= 0.1;
        //         wave2.style.left = waveMove1 + "px";
        //     }, 1);
        // },
        themeIsShow() {
            let scrollTopLength = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTopLength > 300) {
                this.themeShow = true;
            } else {
                this.themeShow = false;
            }
        },
        handleChangeBg(item) {
            sessionStorage.setItem("bg", JSON.stringify(item));
            this.setBg();
        },
        setBg() {
            document.getElementsByClassName("home-content")[0].style.background = JSON.parse(sessionStorage.getItem("bg"));
            this.color = JSON.parse(sessionStorage.getItem("bg")) || "#87CEFA"
        },
        setBgColor(color) {
            document.getElementsByClassName("home-content")[0].style.background = color;
            sessionStorage.setItem("bg", JSON.stringify(color));
        },
    },
};
</script>

<style lang="less">
.home {
    width: 100%;
    height: 100%;
    .homeHeader {
        animation: headTop 0.8s ease-out;
        @keyframes headTop {
            from {
                transform: translateY(-50px);
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
        background-color: #87cefa;
        .themePosition {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 93%;
            left: 93%;
            .el-button--text {
                text-decoration: underline;
                color: #303133;
                font-size: 20px;
            }
        }
        .primary {
            width: 60%;
            box-shadow: 1px 1px 40px 8px rgb(0 0 0 / 5%);
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
}
</style>
