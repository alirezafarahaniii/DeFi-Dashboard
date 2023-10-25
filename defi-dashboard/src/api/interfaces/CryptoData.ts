export interface CryptoData {
    id: number;
    name: string;
    symbol: string;
    quote: Quote;
  }
  
  interface Quote {
    USD: {
      price: number;
    };
  }