<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Alireza"
          subtitle="alirezafarahani888@gmailcom"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>DeFi Dashboard</v-app-bar-title>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <v-card class="mx-auto align-center justify-center main--card--layout" min-width="600px" max-width="60%">
        <v-card-text class="Main--text">
          Manage Your Crypto, DeFi & NFTs
        </v-card-text>

        <v-card-text class="Main--text"> From One Place </v-card-text>

        <v-card-text class="Sub--Main--text">
          Connect your entire portfolio to track, buy, swap, and stake your
          assets
        </v-card-text>

      </v-card>
      <div>
        <h1>Cryptocurrency Prices</h1>
        <ul>
          <li v-for="crypto in cryptocurrencies" :key="crypto.id">
            {{ crypto.name }} ({{ crypto.symbol }}): ${{ crypto.quote.USD.price }}
          </li>
        </ul>
      </div>
    </v-main>
  </v-layout>
</template>
<script>
import { ref, onMounted, defineComponent } from 'vue';
import { CoinMarketCapApiService } from '@/api/CoinMarketCapApiService';
export default defineComponent({
  setup() {
    const cryptocurrencies = ref([]); // Remove the generic type here

    const apiKey = '207a2f28-ad5b-44fd-bc64-0a1e5d1fa2f2'; // Replace with your CoinMarketCap API key
    const baseUrl ='https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency';

    const apiService = new CoinMarketCapApiService(apiKey, baseUrl);

    onMounted(async () => {
      try {
        cryptocurrencies.value = await apiService.getCryptocurrencies();
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
      }
    });

    return {
      cryptocurrencies,
    };
  },
});
</script>
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
