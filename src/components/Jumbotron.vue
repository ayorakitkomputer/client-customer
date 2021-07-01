<template>
  <div class="h-screen bg-black">
    <div class="absolute flex items-center justify-center">
      <canvas v-if="loadThreeJs" id="threejs"></canvas>
    </div>
    <div class="absolute grid grid-cols-8">
      <div
        class="flex items-center justify-center h-screen col-start-2 col-end-4"
      >
        <p
          id="test-animation"
          class="font-semibold text-white text-jumbotron mb-80 text-7xl"
        >
          BUILD YOUR OWN PC
        </p>
        <div class="absolute mb-10 left-60">
          <button
            @click="createNewBuild"
            id="jumbotronButton"
            class="px-5 py-4 text-xl font-bold text-black border-2  text-md rounded-2xl"
          >
            LET'S START BUILD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three/build/three.module.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "Jumbotron",
  data: function () {
    return {
      camera: null,
      renderer: null,
      scene: null,
      mouseX: 0,
      mouseY: 0,
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2,
      loadThreeJs: true,
    };
  },
  mounted() {
    this.loadThreeJs = true;
    this.init();
    this.animate();
    document.addEventListener("mousemove", this.onDocumentMouseMove);
  },
  methods: {
    init() {
      // if (!this.loadThreeJs) return;
      /* ---------- START CAMERA ---------- */
      this.camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        15000
      );
      this.camera.position.x = 0;
      this.camera.position.y = 5;
      this.camera.position.z = -15;
      this.camera.rotation.y = 2 * Math.PI * (180 / 360);
      /* ---------- END CAMERA ---------- */

      /* ---------- START SCENE ---------- */
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x000000);

      /* ---------- START LIGHT ---------- */
      RectAreaLightUniformsLib.init();

      const rectLight1 = new THREE.RectAreaLight(0x76b900, 5, 4, 10);
      rectLight1.position.set(-10, 5, 5);
      this.scene.add(rectLight1);

      const rectLight2 = new THREE.RectAreaLight(0x7ab547, 5, 4, 10);
      rectLight2.position.set(-5, 5, 5);
      this.scene.add(rectLight2);

      const rectLight3 = new THREE.RectAreaLight(0x006400, 5, 4, 10);
      rectLight3.position.set(0, 5, 5);
      this.scene.add(rectLight3);

      const rectLight4 = new THREE.RectAreaLight(0x7ab547, 5, 4, 10);
      rectLight4.position.set(5, 5, 5);
      this.scene.add(rectLight4);

      const rectLight5 = new THREE.RectAreaLight(0x76b900, 5, 4, 10);
      rectLight5.position.set(10, 5, 5);
      this.scene.add(rectLight5);

      const rectLightBack = new THREE.RectAreaLight(0x006400, 5, -4, 10);
      rectLightBack.position.set(0, 5, -15);
      this.scene.add(rectLightBack);

      this.scene.add(new RectAreaLightHelper(rectLight1));
      this.scene.add(new RectAreaLightHelper(rectLight2));
      this.scene.add(new RectAreaLightHelper(rectLight3));
      this.scene.add(new RectAreaLightHelper(rectLight4));
      this.scene.add(new RectAreaLightHelper(rectLight5));
      this.scene.add(new RectAreaLightHelper(rectLightBack));
      /* ---------- END LIGHT ---------- */

      /* ---------- START FLOOR ---------- */
      const geoFloor = new THREE.BoxGeometry(100, 0.1, 100);
      const matStdFloor = new THREE.MeshStandardMaterial({
        color: 0x808080,
        roughness: 0.1,
        metalness: 0,
      });
      const mshStdFloor = new THREE.Mesh(geoFloor, matStdFloor);
      this.scene.add(mshStdFloor);
      /* ---------- END FLOOR ---------- */

      /* ---------- START PC MODEL ---------- */
      const sceneTemp = this.scene;
      const loader = new GLTFLoader();
      loader.load(
        `/pc_build/scene.gltf`,
        function (gltf) {
          gltf.scene.position.set(0, 5, 0);
          gltf.scene.rotation.y = 2 * Math.PI * (180 / 360);
          gltf.scene.name = "pcModel";
          sceneTemp.add(gltf.scene);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (e) {
          console.log(e);
        }
      );
      /* ---------- END PC ---------- */

      /* ---------- START RENDER ---------- */
      const canvasOnHtml = document.getElementById("threejs");
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasOnHtml,
      });
      const actualInnerWidth = document.body.clientWidth;
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(actualInnerWidth, window.innerHeight);
      /* ---------- END RENDER ---------- */

      window.addEventListener("resize", this.onWindowResize);
    },
    onWindowResize() {
      // if (!this.loadThreeJs) return;
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    animate() {
      // if (!this.loadThreeJs) return;
      requestAnimationFrame(this.animate);

      this.render();
    },
    onDocumentMouseMove(event) {
      // if (!this.loadThreeJs) return;
      this.scene.rotation.y =
        ((event.clientX - this.windowHalfX) / this.windowHalfY) * 0.2;
      this.scene.rotation.x =
        ((event.clientY - this.windowHalfY) / this.windowHalfY) * 0.2;
    },
    render() {
      if (!this.loadThreeJs) return;
      const mesh = this.scene.getObjectByName("pcModel");
      if (mesh) {
        this.renderer.render(this.scene, this.camera);
      }
    },
    createNewBuild() {
      if (!localStorage.access_token) {
        this.$router.push("/login");
      } else {
        this.$store.dispatch("createNewBuild");
      }
    },
  },
  beforeDestroy() {
    // stop jumbotron load.
    this.loadThreeJs = false;
  },
};
</script>

<style>
#jumbotronButton {
  background-color: #cfff0a;
}
#jumbotronButton:hover {
  color: #cfff0a;
  background-color: black;
}
.text-jumbotron {
  text-shadow: 3px 2px 2px #cfff0a;
}
</style>
