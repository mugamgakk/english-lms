<template>
    <div class="popup">
        <div class="popup-content">
            <header class="d-flex justify-content-between align-items-center">
                <h4>[진단평가] 예약 정보 확인 및 수정</h4>
                <button class="btn btn-dark" @click="$emit('closeModal')">
                    X
                </button>
            </header>
            <form @submit="setRev">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="col">학생 이름*</th>
                            <td>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="param.name"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">예약 일시*</th>
                            <td><input type="text" class="form-control" v-model="param.date" /></td>
                        </tr>
                        <tr>
                            <th scope="col">학교</th>
                            <td>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="param.school"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">학년</th>
                            <td>
                                <select
                                    class="form-control"
                                    v-model="param.grade"
                                >
                                    <option>학년</option>
                                    <option value="1">1학년</option>
                                    <option value="2">2학년</option>
                                    <option value="3">3학년</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">연락처 1*</th>
                            <td class="d-flex">
                                <input
                                    type="text"
                                    class="form-control"
                                    style="width: 100px"
                                    v-model="param.contact1[0]"
                                />
                                -
                                <input
                                    type="text"
                                    class="form-control"
                                    style="width: 100px"
                                    v-model="param.contact1[1]"
                                />
                                -
                                <input
                                    type="text"
                                    class="form-control"
                                    style="width: 100px"
                                    v-model="param.contact1[2]"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">연락처 2</th>
                            <td class="d-flex">
                                <input
                                    type="text"
                                    class="form-control"
                                    style="width: 100px"
                                    v-model="param.contact2[0]"
                                />
                                -
                                <input
                                    type="text"
                                    class="form-control"
                                    style="width: 100px"
                                    v-model="param.contact2[1]"
                                />
                                -
                                <input
                                    type="text"
                                    class="form-control"
                                    style="width: 100px"
                                    v-model="param.contact2[2]"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">메모</th>
                            <td>
                                <textarea
                                    class="form-control"
                                    rows="5"
                                    v-model="param.memo"
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <div class="btn-group">
                        <button type="submit" class="btn btn-primary">
                            수정
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="$emit('closeModal')"
                        >
                            취소
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            param: {
                name: "",
                school: "",
                grade: "1",
                contact1: ["", "", ""],
                contact2: ["", "", ""],
                memo: "",
            },
        };
    },
    mounted() {
        axios.post("/reservation/getone/" + this.userId).then((res) => {
            this.param = res.data;
        });
    },
    methods: {
        setRev(e) {
            e.preventDefault();
            
            if (confirm("수정하시겠습니까?")) {
                axios.post("/reservation/put", this.param).then((res) => {
                    console.log(res)
                    this.$emit("closeModal");
                    this.$emit("updateDate")
                });
            } else {
                return;
            }
        },
    },
    props: {
        userId: Number,
    },
};
</script>

<style>
</style>