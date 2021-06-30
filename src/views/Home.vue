<template>
    <div class="app">
        <!-- JUMBOTRON -->
        <Jumbotron />
        <!-- SPECIFICATION -->
        <Recommendation
            v-for="(build, index) in recommendationBuilds"
            :key="index"
            :build="build"
        />

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
            recommendationBuilds: [
                {
                    header: "Entry AMD Gaming PC",
                    image: "https://www.jouleperformance.ch/wp-content/uploads/2019/03/Core2_seitlich.png",
                    cpu: {
                        name: "AMD Ryzen 3 3100",
                        id: "60d5ca9fc6e53a61d8e36f5c",
                    },
                    motherboard: {
                        name: "ASRock B450M",
                        id: "60d5cc1ec6e53a61d8e3701a",
                    },
                    memory: {
                        name: "Team T-FORCE VULCAN Z 16 GB",
                        id: "60d85ff795818839880a3210",
                    },
                    gpu: {
                        name: "MSI GeForce 1650 Super",
                        id: "60d5c9e1c6e53a61d8e36ef7",
                    },
                    storage: {
                        name: "Samsung 860 EVO",
                        id: "60d5e67fc6e53a61d8e370d0",
                    },
                    powerSupply: {
                        name: "EVGA BA 600 W 80+ Bronze",
                        id: "60d5d1cec6e53a61d8e370ae",
                    },
                    case: {
                        name: "Phanteks Eclipse P300",
                        id: "60d849ff95818839880a31e4",
                    },
                    caseFan: {
                        name: "Kingwin CF-012LB",
                        id: "60d5f75bc6e53a61d8e371a5",
                    },
                    harga: "Rp. 10.000.000,00",
                },
                {
                    header: "Mid Level Intel Gaming PC",
                    image: "https://cdn.coolermaster.com/media/assets/1035/mb311l_argb_09_room_for_upgrades-imageleftorright.png",
                    harga: "Rp. 20.000.000,00",
                    cpu: {
                        name: "Intel Core i7-10700K",
                        id: "60d5ca9fc6e53a61d8e36f52",
                    },
                    motherboard: {
                        name: "MSI Z390-A",
                        id: "60d5cc1ec6e53a61d8e3701f",
                    },
                    memory: {
                        name: "Corsair Vengeance RGB Pro 16 GB",
                        id: "60d85ff795818839880a320c",
                    },
                    gpu: {
                        name: "EVGA GeForce RTX 2060 6GB",
                        id: "60d5c9e1c6e53a61d8e36ef8",
                    },
                    storage: {
                        name: "Western Digital Blue 2.5 500GB",
                        id: "60d5e67fc6e53a61d8e370ce",
                    },
                    powerSupply: {
                        name: "Corsair CXM 80+ Bronze 550W",
                        id: "60d5d1cec6e53a61d8e37077",
                    },
                    case: {
                        name: "Cooler Master MasterBox MB311L ARGB",
                        id: "60d849ff95818839880a31d5",
                    },
                    caseFan: {
                        name: "Thermaltake Riing Trio 14 RGB TT Premium Edition 3-Pack",
                        id: "60d5f75bc6e53a61d8e37196",
                    },
                },
                {
                    header: "Ultra Gamer Intel Gaming PC",
                    image: "https://cdn.shopify.com/s/files/1/0228/7629/1136/files/gx13-intruder-main-shot.png?v=1569339401",
                    harga: "Rp. 64.000.000,00",
                    cpu: {
                        name: "AMD Ryzen 9 5950X",
                        id: "60d5ca9fc6e53a61d8e36f57",
                    },
                    motherboard: {
                        name: "Asus TUF GAMING X570-PLUS",
                        id: "60d5cc1ec6e53a61d8e37018",
                    },
                    memory: {
                        name: "G.Skill Ripjaws V Series 32 GB",
                        id: "60d85ff795818839880a3211",
                    },
                    gpu: {
                        name: "EVGA GeForce RTX 3090",
                        id: "60d5c9e1c6e53a61d8e36eeb",
                    },
                    storage: {
                        name: "Samsung 980 Evo 1TB",
                        id: "60d5e67fc6e53a61d8e370d4",
                    },
                    powerSupply: {
                        name: "Corsair AXi 80+ Titanium",
                        id: "60d5d1cec6e53a61d8e37078",
                    },
                    case: {
                        name: "Lian Li PC-O11 Dynamic",
                        id: "60d849ff95818839880a31c6",
                    },
                    caseFan: {
                        name: "Corsair LL120 3-Pack",
                        id: "60d5f75bc6e53a61d8e37165",
                    },
                },
            ],
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
