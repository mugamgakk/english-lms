<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li
                class="page-item"
                :class="currentPage == a ? 'active' : ''"
                @click="$emit('pageChange', a)"
                v-for="a in pageGroup"
                :key="a"
            >
                <a class="page-link" href="#">{{ a }}</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        pageGroup() {
            let pageGroup = Math.ceil(this.currentPage / 5);
            let lastPage = pageGroup * 5;
            let firstpage = lastPage - 4;

            if (this.totalPage < lastPage) {
                lastPage = this.totalPage;
            }

            let arr = [];
            for (let i = firstpage; i <= lastPage; i++) {
                arr.push(i);
            }

            return arr;
        },
    },
    props: {
        totalPage: Number,
        currentPage: Number,
    },
};
</script>

// totalpage = 20
// currentPage = 8;
// 나눌페이지 갯수 = 5
// pageGroup = 2
// lastPage = 10
// firstPage = 6




<style>
</style>