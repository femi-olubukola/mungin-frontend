<template>
  <div class="w-56 text-right fixed">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <ChevronDownIcon
            class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="MenuItems absolute right-0 w-56 lg:w-72 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-2.5 lg:px-4 py-12 md:py-11">
            <MenuItem class="pb-2 lg:pb-3" v-slot="{ active }" v-model="myModel">
              <button
                :class="[
                  active ? 'bg-violet-500 ' : 'font-serif font-medium',
                  'group flex rounded-md items-center w-full text-sm lg:text-base',
                ]"
                style="color: #fafafa"
              >
                <Seed
                  :active="active"
                  class="w-5 h-5 flex items-center mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Middle Belt (North Central)
              </button>
            </MenuItem>
            <MenuItem class="pb-2 lg:pb-3" v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500' : 'font-serif font-medium',
                  'group flex rounded-md items-center w-full text-sm lg:text-base',
                ]"
                style="color: #fafafa"
              >
                <Seed
                  :active="active"
                  class="w-5 h-5 flex items-center mr-2 text-violet-400"
                  aria-hidden="true"
                />
                North West
              </button>
            </MenuItem>
            <MenuItem class="pb-2 lg:pb-3" v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500' : 'font-serif font-medium',
                  'group flex rounded-md items-center w-full text-sm lg:text-base',
                ]"
                style="color: #fafafa"
              >
                <Seed
                  :active="active"
                  class="w-5 h-5 flex items-center mr-2 text-violet-400"
                  aria-hidden="true"
                /> 
                North East
              </button>
            </MenuItem>
            <MenuItem class="pb-2 lg:pb-3" v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500' : 'font-serif font-medium',
                  'group flex rounded-md items-center w-full text-sm lg:text-base',
                ]"
                style="color: #fafafa"
              >
                <Seed
                  :active="active"
                  class="w-5 h-5 flex items-center mr-2 text-violet-400"
                  aria-hidden="true"
                />
                South West
              </button>
            </MenuItem>
            <MenuItem class="pb-2 lg:pb-3" v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500' : 'font-serif font-medium',
                  'group flex rounded-md items-center w-full text-sm lg:text-base',
                ]"
                style="color: #fafafa"
              >
                <Seed
                  :active="active"
                  class="w-5 h-5 flex items-center mr-2 text-violet-400"
                  aria-hidden="true"
                />
                South East
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500' : 'font-serif font-medium',
                  'group flex rounded-md items-center w-full text-sm lg:text-base',
                ]"
                style="color: #fafafa"
              >
                <Seed
                  :active="active"
                  class="w-5 h-5 flex items-center mr-2 text-violet-400"
                  aria-hidden="true"
                />
                South South
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import  ChevronDownIcon  from '../components/ChevronDownIcon.vue'
import Seed from '../components/Seed.vue'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Seed,
    ChevronDownIcon
  },
  data() {
      return {
          color: '#fafafa',
          myModel:{},
      }
  }
}
</script>

<style scoped>
.MenuItems {
    background-color: rgba(131, 191, 79, 1);
}
</style>
