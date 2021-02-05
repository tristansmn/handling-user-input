// this file is used to set the API request
import axios from 'axios';  

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
      Authorization: 'Client-ID A4nLSJu3dlrKfGAENZtlrxfGuAy4kHfziJ_l5SNWKbE',
	}
})