import * as path from 'path';

const devServerConfig = {
  contentBase: path.resolve(__dirname, 'dist'), // Path to your build directory
  compress: true,
  port: 8080, // Your desired port
  headers: {
    'Access-Control-Allow-Origin': '*', // Allow any origin for development (change for production)
  },
};

export default devServerConfig;
