<template>
    <div class="app">
        <!-- JUMBOTRON -->
        <Jumbotron />
        <!-- SPECIFICATION -->
        <Recommendation v-for="index in 3" :key="index" :index="index" />

        <TopActionButton :scrollTop="scrollTop" />
    </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import Recommendation from "../components/Recommendation.vue";
import TopActionButton from "../components/TopActionButton.vue";

export default {
    name: "Home",
    components: {
        Jumbotron,
        Recommendation,
        TopActionButton,
    },
    data() {
        return {
            inMove: false,
            activeSection: 0,
            offsets: [],
        };
    },
    methods: {
        scrollTop() {
            this.scrollToSection(0);
        },
        calculateSectionOffsets() {
            const sections = document.getElementsByClassName("section");
            sections.forEach((el) => {
                let sectionOffset = el.offsetTop;
                this.offsets.push(sectionOffset);
            });
        },
        scrollToSection(id, force = false) {
            if (this.inMove && !force) return false;
            this.activeSection = id;
            this.inMove = true;
            document.getElementsByClassName("section")[id].scrollIntoView({
                behavior: "smooth",
            });
            setTimeout(() => {
                this.inMove = false;
            }, 400);
        },
        handleMouseWheel(e) {
            if (e.wheelDelta < 30 && !this.inMove) {
                this.moveUp();
            } else if (e.wheelDelta > 30 && !this.inMove) {
                this.moveDown();
            }
            e.preventDefault();
            return false;
        },
        moveDown() {
            this.inMove = true;
            this.activeSection--;

            if (this.activeSection < 0)
                this.activeSection = this.offsets.length - 1;

            this.scrollToSection(this.activeSection, true);
        },
        moveUp() {
            this.inMove = true;
            this.activeSection++;

            if (this.activeSection > this.offsets.length - 1)
                this.activeSection = 0;

            this.scrollToSection(this.activeSection, true);
        },
    },
    mounted() {
        this.calculateSectionOffsets();
        this.loadJumbotron = true;

        window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
        window.addEventListener("mousewheel", this.handleMouseWheel, {
            passive: false,
        }); // Other browsers
    },
    destroyed() {
        window.removeEventListener("mousewheel", this.handleMouseWheel, {
            passive: false,
        }); // Other browsers
        window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    },
};
</script>

<style>
.object {
    animation: MoveUpDown 3s linear infinite;
}

@keyframes MoveUpDown {
    0%,
    100% {
        @apply bottom-5;
    }
    50% {
        bottom: 10px;
    }
}
</style>
