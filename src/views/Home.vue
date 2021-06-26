<template>
  <div class="app">
    <nav class="bg-black">
      <div class="grid grid-cols-3 mx-auto max-w-screen">
        <div class="col-span-2 p-4 ml-8 text-white">
          <span class="text-3xl">PIPISI</span>
        </div>
        <div class="mx-auto">
          <ul class="flex text-white">
            <li class="p-2 px-4 m-4 bg-gray-900 cursor-pointer rounded-xl">
              REGISTER
            </li>
            <li class="p-2 m-4 bg-gray-900 cursor-pointer rounded-xl">LOGIN</li>
            <li class="p-2 m-4 bg-gray-900 cursor-pointer rounded-xl">
              CHECKOUT
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- JUMBOTRON -->
    <div class="h-screen bg-gray-900 max-w-screen">
      <div class="flex items-center justify-center">
        <span class="font-semibold text-white mt-44 text-7xl"
          >BUILD YOUR OWN PC</span
        >
      </div>
      <div class="flex items-center justify-center">
        <button
          class="px-3 py-2 mt-10 text-xl font-bold bg-white mb-52 rounded-3xl"
        >
          LET'S START
        </button>
      </div>
    </div>
    <!-- SPECIFICATION -->
    <div class="h-screen bg-gray-800">
      <div class="">
        <div class="grid grid-cols-6">
          <div class="col-span-4">
            <h1 class="text-white">GAMBAR</h1>
          </div>
          <div class="col-span-2 px-4 py-4 overflow-auto bg-gray-700">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              numquam fuga voluptatem unde nesciunt! Eveniet molestiae, ex velit
              aliquid numquam consequuntur harum nulla perspiciatis dolores
              dolore illum excepturi minima suscipit? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ratione numquam fuga voluptatem
              unde nesciunt! Eveniet molestiae, ex velit aliquid numquam
              consequuntur harum nulla perspiciatis dolores dolore illum
              excepturi minima suscipit? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ratione numquam fuga voluptatem unde nesciunt!
              Eveniet molestiae, ex velit aliquid numquam consequuntur harum
              nulla perspiciatis dolores dolore illum excepturi minima suscipit?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              numquam fuga voluptatem unde nesciunt! Eveniet molestiae, ex velit
              aliquid numquam consequuntur harum nulla perspiciatis dolores
              dolore illum excepturi minima suscipit? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ratione numquam fuga voluptatem
              unde nesciunt! Eveniet molestiae, ex velit aliquid numquam
              consequuntur harum nulla perspiciatis dolores dolore illum
              excepturi minima suscipit?
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- PICK COMPONENT -->
    <div class="grid grid-cols-9">
      <!-- SIDEBAR -->
      <div class="h-screen col-span-2">
        <div class="h-screen bg-black">
          <div class="items-center justify-center">
            <h1 class="pt-5 text-2xl font-semibold text-pink-500">
              <center>SELECT COMPONENT</center>
            </h1>
            <div class="grid grid-cols-3 pl-5 mt-5">
              <div class="col-span-2">
                <ul class="text-white">
                  <li class="m-3 ml-2">CPU</li>
                  <li class="m-3 ml-2">MOTHERBOARD</li>
                  <li class="m-3 ml-2">MEMORY</li>
                  <li class="m-3 ml-2 text-yellow-400">STORAGE</li>
                  <li class="m-3 ml-2">GPU</li>
                  <li class="m-3 ml-2">CASE</li>
                  <li class="m-3 ml-2">POWER SUPPLY</li>
                  <li class="m-3 ml-2">MONITOR</li>
                </ul>
              </div>
              <div class="flex justify-end col-span-1 mr-3">
                <ul class="text-white">
                  <li class="m-2 text-xl font-bold">+</li>
                  <li class="m-2 text-xl font-bold">+</li>
                  <li class="m-2 text-xl font-bold">+</li>
                  <li class="m-2 text-xl font-bold text-yellow-400">+</li>
                  <li class="m-2 text-xl font-bold">+</li>
                  <li class="m-2 text-xl font-bold">+</li>
                  <li class="m-2 text-xl font-bold">+</li>
                  <li class="m-2 text-xl font-bold">+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="h-screen col-span-7 bg-gray-300">
        <div class="grid grid-cols-7 p-3 m-2 mt-3 bg-black rounded-3xl">
          <div class="col-span-2">
            <center>
              <h1 class="font-semibold text-pink-500">NAME</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="font-semibold text-pink-500">SOCKET</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="font-semibold text-pink-500">INTEGRETED GPU</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="font-semibold text-pink-500">TDP</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="font-semibold text-pink-500">PRICE</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="font-semibold text-pink-500">STOCK</h1>
            </center>
          </div>
        </div>
        <!-- CONTENT -->
        <div class="grid grid-cols-7 p-3 m-2 mt-5 bg-black rounded-3xl">
          <div class="col-span-2">
            <center>
              <h1 class="text-white">Gambar + AMD Ryzen 9</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">AM 4</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">Included</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">80 W</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">10.000.000</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">200</h1>
            </center>
          </div>
        </div>
        <div class="grid grid-cols-7 p-3 m-2 mt-3 bg-black rounded-3xl">
          <div class="col-span-2">
            <center>
              <h1 class="text-white">Gambar + AMD Ryzen 9</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">AM 4</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">Included</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">80 W</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">10.000.000</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">200</h1>
            </center>
          </div>
        </div>
        <div class="grid grid-cols-7 p-3 m-2 mt-3 bg-black rounded-3xl">
          <div class="col-span-2">
            <center>
              <h1 class="text-white">Gambar + AMD Ryzen 9</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">AM 4</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">Included</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">80 W</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">10.000.000</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">200</h1>
            </center>
          </div>
        </div>
        <div class="grid grid-cols-7 p-3 m-2 mt-3 bg-black rounded-3xl">
          <div class="col-span-2">
            <center>
              <h1 class="text-white">Gambar + AMD Ryzen 9</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">AM 4</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">Included</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">80 W</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">10.000.000</h1>
            </center>
          </div>
          <div class="col-span-1">
            <center>
              <h1 class="text-white">200</h1>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
