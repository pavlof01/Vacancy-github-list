import axios from 'axios';

/**
 * API FOR VACANCY GITHUB LIST
 * BASE URL - http://jobs.github.com/positions?
 * BASE URL EXAMPLE - http://jobs.github.com/positions?description=python&location=new+york
 * BASE URL EXAMPLE OF SF https://api.stackexchange.com/2.2/posts?order=desc&sort=activity&site=stackoverflow
 */

const API_GIT_JOBS_URL = 'http://jobs.github.com';
const API_STACK_OVERFLOW_URL = 'https://api.stackexchange.com/2.2/';
const API_GITHUB_REPS_URL = 'https://api.github.com/';

const gitJobsInstance = axios.create({
  baseURL: API_GIT_JOBS_URL,
});

const stackOverflowInstance = axios.create({
  baseURL: API_STACK_OVERFLOW_URL,
});

const githubRepsInstance = axios.create({
  baseURL: API_GITHUB_REPS_URL,
});

class Api {
  static getGitHubJobsInstance() {
    // TODO: ADD CHECK INSTANCE!
    return gitJobsInstance;
  }

  static getStackOverflowInstance() {
    // TODO: ADD CHECK INSTANCE!
    return stackOverflowInstance;
  }

  static getGitHubApiUsersRepsInstance() {
    // TODO: ADD CHECK INSTANCE!
    return githubRepsInstance;
  }

  /**
   * just 'get' method of API
   *
   * @param {string} url - address for fetch
   * @param {object} config - params for fetch
   */

  static getOfJobs(url, config) {
    return Api.getGitHubJobsInstance().get(url, config);
  }

  static getOfStackOveflowPosts(url, config) {
    return Api.getStackOverflowInstance().get(url, config);
  }

  static getOfGitHubApi(url, config) {
    return Api.getGitHubApiUsersRepsInstance().get(url, config);
  }

  /**
   * fetch list of vacancy
   *
   * @param {string} description - key words of vacancy
   * @param {string} location - city of vacancy
   */

  static getListOfGithubJobs(description, location) {
    return Api.getOfJobs('/positions.json', {
      params: {
        description,
        location,
      },
    });
  }

  static getStackOveflowPosts() {
    return Api.getOfStackOveflowPosts('posts?order=desc&sort=activity&site=stackoverflow&filter=!-*jbN*x3aMd9');
  }

  static getUsersReps() {
    return Api.getOfGitHubApi('users');
  }
}

export default Api;
