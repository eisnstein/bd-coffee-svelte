<script>
  let numPersons = 1;
  let numCoffees = 1;
  let type = "7.5";
  let days = "14";

  $: sum14 = numPersons * numCoffees * parseFloat(type) * 14;
  $: sum21 = numPersons * numCoffees * parseFloat(type) * 21;
  $: sum28 = numPersons * numCoffees * parseFloat(type) * 28;
  $: sum42 = numPersons * numCoffees * parseFloat(type) * 42;
  $: sum56 = numPersons * numCoffees * parseFloat(type) * 56;
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
        bind:value="{numPersons}"
        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        min="0"
        placeholder="Jane"
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
        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="number"
        placeholder="Doe"
        bind:value="{numCoffees}"
      />
    </div>
  </div>
  <div class="flex flex-wrap">
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
          id="grid-state"
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
  <div class="pt-8">
    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-3/4 px-4 py-2">Anzahl der Wochen</th>
          <th class="w-1/4 px-4 py-2">Kaffee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="w-3/4 px-4 py-2">in 2 Wochen</th>
          <th class="w-1/4 px-4 py-2">{sum14}g</th>
        </tr>
        <tr>
          <th class="w-3/4 px-4 py-2">in 3 Wochen</th>
          <th class="w-1/4 px-4 py-2">{sum21}g</th>
        </tr>
        <tr>
          <th class="w-3/4 px-4 py-2">in 4 Wochen</th>
          <th class="w-1/4 px-4 py-2">{sum28}g</th>
        </tr>
        <tr>
          <th class="w-3/4 px-4 py-2">in 6 Wochen</th>
          <th class="w-1/4 px-4 py-2">{sum42}g</th>
        </tr>
        <tr>
          <th class="w-3/4 px-4 py-2">in 8 Wochen</th>
          <th class="w-1/4 px-4 py-2">{sum56}g</th>
        </tr>
      </tbody>
    </table>
  </div>
</div>
