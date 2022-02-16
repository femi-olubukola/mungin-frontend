<template>
    <div
        class="dropdown"
        @click="toggleRiskLevels"
        :class="{ expanded: isExpanded }"
        :style="computedStyles"
    >
        <div class="dropdown-label-container">
            <div class="dropdown-label">
                <span class="text">
                {{ (config.prefix ? config.prefix : "") + " "
                }}{{ config.placeholder ? config.placeholder : "" }}
                </span>
                <i class="angle-down" :class="{ toggled: isExpanded }"></i>
            </div>
        </div>

        <!-- <div v-expand="isExpanded" class="options expand">
            <div
                v-for="option in configOptions"
                class="option"
                @click="setCurrentSelectedOption(option);"
            >
                {{ option.value }}
            </div>
        </div> -->
    </div>

</template>

<script>
export default {
    props: ["config"],
    methods: {
        toggleRiskLevels() {
        this.isExpanded = !this.isExpanded;
        },
        setCurrentSelectedOption(option) {
        this.$emit("setSelectedOption", option);
    },
    data() {
        return {
            configOptions: [],
        }
    }
}
</script>

<style>

</style>