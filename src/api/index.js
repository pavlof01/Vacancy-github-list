import axios from 'axios';

/**
 * API FOR VACANCY GITHUB LIST
 * BASE URL - http://jobs.github.com/positions?
 * BASE URL EXAMPLE - http://jobs.github.com/positions?description=python&location=new+york
 */

const API_BASE_URL = 'http://jobs.github.com';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

class Api {

  static getInstance() {
    // TODO: ADD CHECK INSTANCE!
    return instance;
  }

  /**
   * just 'get' method of API
   * 
   * @param {string} url - address for fetch
   * @param {object} config - params for fetch
   */

  static get(url, config) {
    return Api.getInstance().get(url, config);
  }
  
  /**
   * fetch list of vacancy
   * 
   * @param {string} description - key words of vacancy
   * @param {string} location - city of vacancy
   */

  static getListOfGithubJobs(description, location) {
    return Api.get('/positions.json',{
      params: {
        description,
        location
      }
    }).then((data) => console.warn(JSON.stringify(data.data, null, 2)));
  }
}

export default Api;
