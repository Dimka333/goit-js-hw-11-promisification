const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${ms}`), ms);
  });
};

const logger = times => console.log(`Resolved after ${times}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms