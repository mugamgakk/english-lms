<template>
  <Location 
  :title="'예약 및 평가'" 
  :location="'마이페이지 > 영어 학습 관리 > 진단평가 > 예약 및 평가'" 
  />
<div class="text-right mt-2">
    <button class="btn btn-danger">신규 예약</button>
</div>


<div class="d-flex justify-content-between align-items-center">
    <div>
        <button class="btn btn-secondary">선택 삭제</button>
    </div>
    <div style="width: 300px">
        <input type="text" 
        class="form-control" 
        style="display : inline-block; width : 180px"
        v-model="search"
        >
        <button class="btn btn-secondary btn-sm">검색</button>
        <button class="btn btn-secondary btn-sm">새로고침</button>
    </div>
</div>

<table class="table">
  <thead>
    <tr>
      <th scope="col"><input type="checkbox"></th>
      <th scope="col">이름</th>
      <th scope="col">예약 일시</th>
      <th scope="col">학교</th>
      <th scope="col">학년</th>
      <th scope="col">연락처</th>
      <th scope="col">시험보기</th>
    </tr>
  </thead>
  <tbody>
    <ReservationTr v-for="a in 10" :key="a" />
  </tbody>
</table>
</template>

<script>
import Location from "../components/Location.vue";
import ReservationTr from "./Reservation/ReservationTr.vue";

 
export default {
    name :"Reservation",
    data(){
        return{
            search : "",
            date : null
        }
    },
    methods: {
        getData(){
            console.log(new Date())
        }
    },
    mounted(){
        this.getData()
    },
    components : {
        Location,
        ReservationTr,
    }
}
</script>

<style>

</style>