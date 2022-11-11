<template>
    <div class="popup">
        <div class="popup-content">
            <header class="d-flex justify-content-between align-items-center">
                <h4>[진단평가] 레벨 선택</h4>
                <button class="btn btn-dark" @click="$emit('closeModal')">
                    X
                </button>
            </header>
            <div>
                <PrintModal
                    v-if="printModal === true"
                    @closeModal="printModal = false"
                />

                <div class="text-right">
                    <button
                        type="button"
                        class="btn btn-sm my-3 btn-outline-secondary"
                        @click="printModal = true"
                    >
                        시험지 인쇄
                    </button>
                </div>
                <button
                    class="btn btn-sm btn-secondary rounded-circle"
                    @click="levelInfoModal = true"
                >
                    ?
                </button>
                <Levelinfo
                    v-if="levelInfoModal === true"
                    @closeModal="levelInfoModal = $event"
                />
                <ul class="level-list d-flex border-bottom text-center">
                    <li
                        class="border-right w-100"
                        v-for="a in level"
                        :key="a"
                        @click="choiceLevel = a"
                        style="cursor: pointer"
                    >
                        <h4 :class="choiceLevel === a ? 'text-danger' : ''">
                            {{ a }}
                        </h4>
                    </li>
                </ul>
                <p class="text-center">
                    학습자에게 적합한 레벨을 선택한 후 [선택 완료] 버튼을
                    클릭하세요.
                    <br />
                    물음표 버튼을 클릭하면 권장 레벨을 확인할 수 있어요.
                </p>
                <div class="text-center">
                    <button class="btn btn-primary mr-3">선택 완료</button>
                    <button class="btn btn-dark" @click="$emit('closeModal')">
                        취소
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Levelinfo from "./LevelInfo.vue";
import PrintModal from "./PrintModal.vue";

export default {
    name: "ReservationChoiceLevel",
    data() {
        return {
            levelInfoModal: false,
            printModal: false,
            level: ["Phonincs", "Level 1", "Level 2", "Level 3"],
            choiceLevel: "Phonincs",
        };
    },
    components: {
        Levelinfo,
        PrintModal,
    },
};
</script>

<style>
</style>