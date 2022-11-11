<template>
    <div class="wrap">
        <div class="wrap-inner">
            <h4>[진단평가 시험지 보기] (인쇄)</h4>
            <div class="text-right">
                <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    @click="savePdf"
                >
                    pdf 저장
                </button>
            </div>
            <div class="print-area border mt-3">
                <div ref="target" id="target">
                    <p>여기가 프린트 됩니다.</p>
                    <h4>안녕하세요</h4>
                </div>
            </div>
            <div class="text-center mt-3">
                <button class="btn btn-primary" @click="savePrint">인쇄</button>
                <button class="btn btn-secondary" @click="$emit('closeModal')">
                    닫기
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { createPDF, createPrint } from "../../methods";

export default {
    name: "PrintModal",
    methods: {
        savePdf() {
            if (window.confirm("PDF로 저장하시겠습니까?")) {
                createPDF(this.$refs.target);
            }
        },
        savePrint() {
            createPrint(this.$refs.target);
        },
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none !important;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);

    &-inner {
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
    }
}

.print-area {
    min-width: 600px;
    height: 600px;
    overflow: auto;
}


</style>