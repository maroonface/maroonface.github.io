/**
 * Created by rv on 14/7/16.
 */
var getOrder = function(ordernumber){
    console.log('YOur order number is:',ordernumber);

  cookAndDeliveredFood(function(){
      console.log('Food delivered No:',ordernumber);
  });
};

function cookAndDeliveredFood(callback) {
    setTimeout(callback,5000);
}

getOrder(1);
getOrder(2);
getOrder(3);
getOrder(4);

