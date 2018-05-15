export default function usersService($http) {
  const api = "http://localhost:3000/random-user";
  function getUser() {
    return $http.get(api);
  }

  return {
    getUser
  };
}
