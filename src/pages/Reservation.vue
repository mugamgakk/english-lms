<template>
    <Location
        :title="'예약 및 평가'"
        :location="'마이페이지 > 영어 학습 관리 > 진단평가 > 예약 및 평가'"
    />

    <ReservationGetModal
        v-if="revGetModal === true"
        @closeModal="revGetModal = false"
        @updateDate="getList()"
    />
    <ReservationSettModal
        v-if="revSetModal === true"
        :userId="clickId"
        @closeModal="revSetModal = false"
        @updateDate="getList()"
    />

    <ReservationChoiceLevel
        v-if="levelModal === true"
        @closeModal="levelModal = false"
    />

    <div class="text-right mt-2">
        <button class="btn btn-danger" @click="revGetModal = true">
            신규 예약
        </button>
    </div>

    <div class="d-flex justify-content-between align-items-center">
        <div>
            <button class="btn btn-secondary" @click="removeList">
                선택 삭제
            </button>
        </div>
        <div style="width: 300px">
            <input
                type="text"
                class="form-control"
                style="display: inline-block; width: 180px"
                v-model="search"
            />
            <button class="btn btn-secondary btn-sm" @click="searchList">
                검색
            </button>
            <button class="btn btn-secondary btn-sm" @click="getList()">
                새로고침
            </button>
        </div>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">
                    <input
                        type="checkbox"
                        :checked="
                            list.length === checkedList.length &&
                            checkedList.length !== 0
                        "
                        @change="allCheck"
                    />
                </th>
                <th scope="col">이름</th>
                <th scope="col">예약 일시</th>
                <th scope="col">학교</th>
                <th scope="col">학년</th>
                <th scope="col">연락처</th>
                <th scope="col">시험보기</th>
            </tr>
        </thead>
        <tbody>
            <ReservationTr
                v-for="a in list"
                :item="a"
                :checkedList="checkedList"
                :key="a._id"
                @oneCheck="oneCheck($event)"
                @openSetModal="
                    revSetModal = true;
                    clickId = a._id;
                "
                @pbtOpen="levelModal = true"
            />
        </tbody>
    </table>
    <p class="text-center" v-if="list.length === 0">아무것도 없어용</p>

    <Pagination
        :totalPage="totalPage"
        :currentPage="currentPage"
        @pageChange="currentPage = $event"
    />
</template>

<script>
import Location from "../components/Location.vue";
import ReservationTr from "./Reservation/ReservationTr.vue";
import ReservationGetModal from "./Reservation/ReservationGetModal.vue";
import ReservationSettModal from "./Reservation/ReservationSettModal.vue";
import Pagination from "../components/Pagination.vue";
import axios from "axios";
import ReservationChoiceLevel from "./Reservation/ReservationChoiceLevel.vue";

export default {
    name: "Reservation",
    data() {
        return {
            search: "",
            list: [],
            checkedList: [],
            revGetModal: false,
            revSetModal: false,
            levelModal: false,
            clickId: 1,
            currentPage: 1,
            totalPage: 1,
        };
    },
    methods: {
        searchList() {
            this.$router.push("/reservation/?search=" + this.search);
            axios
                .post("/reservation/search", { search: this.search })
                .then((res) => {
                    this.list = res.data;
                    this.search = "";
                });
        },
        removeList() {
            if (this.checkedList.length === 0) {
                alert("선택해주세요");
                return;
            }

            if (confirm("삭제하시겠습니까?")) {
                this.list = this.list.filter(
                    (ele) => !this.checkedList.includes(ele)
                );
                this.checkedList = [];
            } else {
                return;
            }
        },
        getList() {
            axios
                .post("/reservation/list/?page=" + this.currentPage)
                .then((res) => {
                    console.log(res);
                    this.list = res.data.list;
                    this.totalPage = res.data.totalPage;
                });
        },
        oneCheck(param) {
            const { check, item } = param;
            if (check) {
                this.checkedList.push(item);
            } else {
                let arr = this.checkedList.filter((list) => {
                    return list !== item;
                });

                this.checkedList = arr;
            }
        },
        allCheck(e) {
            e.target.checked
                ? (this.checkedList = this.list)
                : (this.checkedList = []);
        },
    },
    mounted() {
        this.getList();
    },
    watch: {
        currentPage() {
            this.getList();
        },
    },
    components: {
        Location,
        ReservationTr,
        ReservationGetModal,
        ReservationSettModal,
        Pagination,
        ReservationChoiceLevel,
    },
};
</script>

<style>
</style>