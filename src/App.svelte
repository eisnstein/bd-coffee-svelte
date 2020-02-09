<script>
  let countP = 1;
  let countC = 1;
  let type = "7.5";
  let days = "14";

  $: sum14 = ((countP * countC * parseFloat(type) * 14) / 1000).toFixed(2);
  $: noCost14 = sum14 >= 2.0;
  $: sum21 = ((countP * countC * parseFloat(type) * 21) / 1000).toFixed(2);
  $: noCost21 = sum21 >= 2.0;
  $: sum28 = ((countP * countC * parseFloat(type) * 28) / 1000).toFixed(2);
  $: noCost28 = sum28 >= 2.0;
  $: sum42 = ((countP * countC * parseFloat(type) * 42) / 1000).toFixed(2);
  $: noCost42 = sum42 >= 2.0;
  $: sum56 = ((countP * countC * parseFloat(type) * 56) / 1000).toFixed(2);
  $: noCost56 = sum56 >= 2.0;
</script>

<div class="px-4 py-8">
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block tracking-wide text-gray-700 text-sm mb-2"
        for="grid-first-name"
      >
        Anzahl der Kaffeetrinker
      </label>
      <input
        bind:value="{countP}"
        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="count-persons"
        min="1"
        step="1"
        type="number"
      />
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label
        class="block tracking-wide text-gray-700 text-sm mb-2"
        for="grid-last-name"
      >
        Anzahl Kaffees / Person / Tag
      </label>
      <input
        bind:value="{countC}"
        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="count-coffees"
        type="number"
        min="1"
        step="1"
      />
    </div>
  </div>
  <div class="flex flex-wrap mb-8">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block tracking-wide text-gray-700 text-sm mb-2"
        for="grid-state"
      >
        Bevorzugte Zubereitunsart
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="type"
          bind:value="{type}"
        >
          <option value="10.5">Vollautomat</option>
          <option value="10">Siebträger</option>
          <option value="9">Filterkaffee</option>
          <option value="7.5">French-Press</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="px-3">
    <div class="flex">
      <label class="tracking-wide text-gray-700 text-sm mb-2" for="result">
        Lieferintervall
      </label>
      <span class="w-full text-gray-700 text-sm text-right">
        <span
          class="bg-bd-brown"
          style="border-radius: 6px; display: inline-block; height: 12px; width: 12px; position: relative; top: 2px;"
        ></span>
        = versandkostenfrei*
      </span>
    </div>
    <div
      id="result"
      class="flex flex-col bg-white border border-gray-400 rounded"
    >
      <div class="flex">
        <span class="w-2/3 px-4 py-2 text-gray-700 font-light"
          >alle <span class="font-normal">2</span> Wochen</span
        >
        <span class="w-1/3 px-4 py-2 text-right"
          ><span
            class="{noCost14 ? 'bg-bd-brown text-white p-1 rounded' : 'p-1'}"
            >{sum14} kg</span
          ></span
        >
      </div>
      <div class="flex bg-gray-200">
        <span class="w-2/3 px-4 py-2 text-gray-700 font-light"
          >alle <span class="font-normal">3</span> Wochen</span
        >
        <span class="w-1/3 px-4 py-2 text-right"
          ><span
            class="{noCost21 ? 'bg-bd-brown text-white p-1 rounded' : 'p-1'}"
            >{sum21} kg</span
          ></span
        >
      </div>
      <div class="flex">
        <span class="w-2/3 px-4 py-2 text-gray-700 font-light"
          >alle <span class="font-normal">4</span> Wochen</span
        >
        <span class="w-1/3 px-4 py-2 text-right"
          ><span
            class="{noCost28 ? 'bg-bd-brown text-white p-1 rounded' : 'p-1'}"
            >{sum28} kg</span
          ></span
        >
      </div>
      <div class="flex bg-gray-200">
        <span class="w-2/3 px-4 py-2 text-gray-700 font-light"
          >alle <span class="font-normal">6</span> Wochen</span
        >
        <span class="w-1/3 px-4 py-2 text-right"
          ><span
            class="{noCost42 ? 'bg-bd-brown text-white p-1 rounded' : 'p-1'}"
            >{sum42} kg</span
          ></span
        >
      </div>
      <div class="flex">
        <span class="w-2/3 px-4 py-2 text-gray-700 font-light"
          >alle <span class="font-normal">8</span> Wochen</span
        >
        <span class="w-1/3 px-4 py-2 text-right"
          ><span
            class="{noCost56 ? 'bg-bd-brown text-white p-1 rounded' : 'p-1'}"
            >{sum56} kg</span
          ></span
        >
      </div>
    </div>
  </div>
</div>
