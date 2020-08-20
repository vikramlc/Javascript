const button = document.querySelector('#click');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {

    }, opts);
  });

  return promise;
}

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, duration);
  });

  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    positionData => {
      setTimer(2000).then(data => {
        console.log(data, positionData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position');
}

button.addEventListener('click', trackUserHandler);