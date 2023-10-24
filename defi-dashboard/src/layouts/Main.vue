<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Alireza"
          subtitle="alirezafarahani888@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-folder"
          title="My Files"
          value="myfiles"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          title="Starred"
          value="starred"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>DeFi Dashboard</v-app-bar-title>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <v-card
        class="mx-auto align-center justify-center main--card--layout"
        min-width="600px"
        max-width="50%"
      >
        <v-card-text class="Main--text">
          Manage Your Crypto, DeFi & NFTs
        </v-card-text>

        <v-card-text class="Main--text"> From One Place </v-card-text>

        <v-card-text class="Sub--Main--text">
          Connect your entire portfolio to track, buy, swap, and stake your
          assets
        </v-card-text>
      </v-card>
    </v-main>
  </v-layout>
</template>
<style lang="scss" scoped>
.main--card--layout {
  background: linear-gradient(45deg, #007bff, #28a745);

  /* Add a background clip to make the text transparent */
  -webkit-background-clip: text;
  background-clip: text;

  /* Set the text color to transparent so that the gradient shows through */
  color: transparent;

  /* Add some padding and styling for readability */
  padding: 10px;
  font-size: 24px;
  text-align: center;
}
.Main--text {
  text-align: center;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: 0px;
  font-weight: 800;
}

.Sub--Main--text {
  text-align: center;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 0px;
  font-weight: 500;
}
</style>
