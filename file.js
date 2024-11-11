function getUserData(username, callback) {

    const mockUserData = {
      username: username,
      fullName: 'John Doe',
      age: 28,
      email: `${username}@example.com`
    };
  
    setTimeout(() => {
      callback(mockUserData);
    }, 1000);
  }
 
  getUserData('johndoe', function(userData) {
    console.log('User data fetched:', userData);
  });
  
  function simulateTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random() * 100;
  
        if (randomNumber < 70) {
          resolve('Task completed successfully!');
        } else {
          reject('Task failed to complete.');
        }
      }, 2000);  
    });
  }
  
  simulateTask()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  