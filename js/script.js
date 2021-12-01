/*(function () {
  function sum (value) {
      let temp = value;
      sum = function() {
          let arg = arguments[0] ? arguments[0] : 0;
          return temp += arg;
      }
      return sum(7);
  }
  console.log(sum(3)); 
  console.log(sum(5));
  console.log(sum(20)); 
})();
*/

// Как посмотреть статистику в консоли?так и не смог понять,есть какая-то проблема с областями видимости?

function counter(initialValue = 0) {
        const counterStatistic = {
            increase: 0,
            decrease: 0,
            get: 0,
            getStatistic: 0
        }
        const funcs = {
            increase(num) {
              counterStatistic.increase++;
              return initialValue += num;
            },
            decrease(num) {
              counterStatistic.decrease++;
              return initialValue -= num;
            },
            get() {
              counterStatistic.get++;
              return initialValue;
            },
            getStatistic() {
              counterStatistic.getStatistic++;
              return counterStatistic;
            }
          }
        return funcs;
}

  let counterInst1 = counter(23);
  counterInst1.increase(76);
  counterInst1.increase(35);
  counterInst1.increase(16);
  counterInst1.decrease(13);
  console.log(counterInst1.get());
  console.log(getStatistic);

