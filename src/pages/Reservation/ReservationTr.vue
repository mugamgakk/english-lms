<template>
    <tr>
        <td>
            <input
                type="checkbox"
                :checked="checkedList.includes(item)"
                @change="
                    $emit('oneCheck', { item, check: $event.target.checked })
                "
            />
        </td>
        <td style="cursor : pointer" @click="$emit('openSetModal')">{{ item.name }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.school }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ `${item.contact1[0]} - ${item.contact1[1]} - ${item.contact1[2]}` }}</td>
        <td>
            <button class="btn btn-secondary mr-1">IBT</button>
            <button class="btn btn-secondary" @click="$emit('pbtOpen')">PBT</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "ReservationTr",
    props: {
        item: Object,
        checkedList: Array,
    },
};
</script>

<style>
</style>