<template>
    <v-table style="border-radius:20px; width: 800px; ">
      <thead>
        <tr>
          <th style="color:#EC4C0F;" class="text-center">
            KAZANÇ
          </th>
          <th style="color:#EC4C0F;" class="text-center">
            TARİH
          </th>
          <th style="color:#EC4C0F;" class="text-center">
            DANIŞAN İSMİ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item ,index) in profits"
          :key="index"
          :class="index%2===0 ? 'light' : 'dark'"
        >
          <td>{{ item.profit }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.customerName }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>

<script>
export default {
  data () {
    return {
      profits: [
        {
          profit: '200 ₺',
          date: '29/12/2022',
          customerName: 'Hakan Yılmaz'
        },
        {
          profit: '200 ₺',
          date: '29/12/2022',
          customerName: 'Ayşe Cengiz'
        },
        {
          profit: '128 ₺',
          date: '29/12/2022',
          customerName: 'Eren Alkan'
        },
        {
          profit: '200 ₺',
          date: '29/12/2022',
          customerName: 'Burcu Çakır'
        },
        {
          profit: '320 ₺',
          date: '29/12/2022',
          customerName: 'Sezgi Deren'
        },

      ],
    }
  },
}
</script>

<style>

.v-table__wrapper{
    height: 350px;
    display: flex;
}

.v-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.light{
    background: #E7ECEF;;
}
.dark {
    background-color: #33363F;;
    color:white;
}

</style>