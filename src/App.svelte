<script>
  let numPersons = 1;
  let numCoffees = 1;
  let type = "7.5";
  let days = "14";

  let sum =
    (numPersons * numCoffees * parseFloat(type) * parseInt(days)) / 1000;
</script>

<form class="">
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Anzahl Personen
      </label>
      <input
        bind:value="{numPersons}"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        min="0"
        placeholder="Jane"
        step="1"
        type="number"
      />
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Anzahl Kaffe Pro Tag
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Zubereitungsart
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          bind:value="{type}"
        >
          <option value="7.5">Frensh Press</option>
          <option value="9">Filter</option>
          <option value="10.5">Vollautomat</option>
          <option value="10">Siebträger</option>
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
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-weeks"
      >
        Wochen
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-weeks"
          bind:value="{days}"
        >
          <option value="14">2 Wochen</option>
          <option value="21">3 Wochen</option>
          <option value="28">4 Wochen</option>
          <option value="35">5 Wochen</option>
          <option value="42">6 Wochen</option>
          <option value="56">8 Wochen</option>
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
  <div>{sum} KG</div>
</form>
