
/**function firstMovie(){
    console.log('firstMovie');
}

function secondMovie(){
    console.log('secondMovie');
}

module.exports.moviename = firstMovie;
module.exports.moviename2 = secondMovie;*/

//another way

module.exports = {
  firstMovie : function(){
      console.log('Firstmovie');
  },
  secondMovie : function(){
      console.log('Secondmovie');
  },
    favMovie : 'Ratata'
};