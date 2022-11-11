<template>
    <div class="table-wrap border" @click="closeModal">
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">시험 레벨 (Test Level)</th>
                        <th scope="col">예상 수준 (Grade Level)</th>
                        <th scope="col">학습 기간 (Learning Period)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Phonincs(L0)</td>
                        <td>예비초</td>
                        <td>6개월 미만</td>
                    </tr>
                    <tr>
                        <td>L1</td>
                        <td>초등 1-2학년</td>
                        <td>6개월 1년 미만</td>
                    </tr>
                    <tr>
                        <td>L2</td>
                        <td>초등 3-4학년</td>
                        <td>1년~2년</td>
                    </tr>
                    <tr>
                        <td>L3</td>
                        <td>초등 5-6학년</td>
                        <td>2년 ~ 3년</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "LevelInfo",
    methods: {
        closeModal(e) {
            if (e.target === e.currentTarget) this.$emit("closeModal", false)
        },
    },
};
</script>

<style lang="scss" scoped>
.table-wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none !important;
    width: 100vw;
    height: 100vh;

    & > div{
        width: 500px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #ccc;
    }
}
</style>