<script setup>
const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
    calories: 305,
  },
  {
    name: 'Gingerbread',
    calories: 356,
  },
  {
    name: 'Jelly bean',
    calories: 375,
  },
];
</script>
<template>
  <h1>Playground</h1>
  <section>
    <v-table style="min-width: 350px;" striped="odd" density="compact">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>

  <section class="my-4">
      <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="The #1 Vue UI Library" width="400">
        <template v-slot:title>
          <span class="font-weight-black">Welcome to Vuetify</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
          voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde
          voluptatem!
        </v-card-text>
      </v-card>
  </section>
  <v-divider></v-divider>
  <section>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="primary" class="ma-2">Primary</v-btn>
        <v-btn color="secondary" class="ma-2">Secondary</v-btn>
        <v-btn color="success" class="ma-2">Success</v-btn>
        <v-btn color="info" class="ma-2">Info</v-btn>
        <v-btn color="error" class="ma-2">Danger</v-btn>
        <v-btn color="warning" class="ma-2">Warning</v-btn>
      </v-col>
    </v-row>
  </section>
</template>