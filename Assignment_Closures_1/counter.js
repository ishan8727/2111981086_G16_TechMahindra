function createCounter(initialCount){
    var count = initialCount;

    function increaseCount(){
        count++;
    }
    function decreaseCount(){
        count--;
    }
    function getCount(){
        console.log(count);
    }
    return {createCounter, increaseCount, decreaseCount, getCount}
}

const count = createCounter(0);
count.increaseCount();
count.increaseCount();
count.increaseCount();
count.increaseCount();
count.increaseCount();

count.getCount();

const count2 = createCounter(100);
count2.decreaseCount();
count2.decreaseCount();
count2.decreaseCount();
count2.decreaseCount();
count2.decreaseCount();

count2.getCount();









