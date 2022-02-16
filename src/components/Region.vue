<template>
   <div id="app">
        <vue-dropdown
        :config="config"
        @setSelectedOption="setNewSelectedOption($event);"
        >
        </vue-dropdown>
  </div> 
</template>

<script>
import vueDropdown from '../components/VueDropDown.vue';
export default {
    components: {
        vueDropdown
    },
    data: function() {
        return {
            config: {
                options: [
                    {
                        value: "option 1"
                    },
                    {
                        value: "option 2"
                    },
                    {
                        value: "option 3"
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>