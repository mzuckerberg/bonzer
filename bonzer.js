//alert('javascript is linked properly');
//var recordPrice = getElementsByClassName('recordprice');

function bonzerize() {
  var bonzerPrice = document.getElementById('recordprice').value;
  var youHave = 'Your record is a ';
  var bonzCat;
  switch(true) {
    case (bonzerPrice <= 25):
    bonzCat = 'Get the fuck outta here lol';
    break;
    case (bonzerPrice > 25 && bonzerPrice <= 50):
    bonzCat = youHave + 'Tasty Platter';
    break;
    case (bonzerPrice > 100 && bonzerPrice <= 150):
    bonzCat = youHave + 'Shocker';
    break;
    case (bonzerPrice > 150 && bonzerPrice <= 250):
    bonzCat = youHave + 'Bonzer';
    break;
    case (bonzerPrice > 250 && bonzerPrice <= 500):
    bonzCat = youHave + 'Torpedo Bonzer';
    break;
    case (bonzerPrice > 500 && bonzerPrice <= 1000):
    bonzCat = youHave + 'Hardcore Torpedo Shock Bonzer';
    break;
    case (bonzerPrice > 1000):
    bonzCat = youHave + 'Balooga Shocker';
    break;
    default:
    bonzCat = "Invalid Input: Please input a number";
    break;
  }
  document.getElementById('bResult').innerHTML=bonzCat;

    //  if (recordPrice === 4) {
    //alert('four fucking dollars');
//  } else {
  //  alert('it\'s not 4');
//  }
};

/*
$25-$50 tasty platter
$100+ shocker
$150+ bonzer
$250+ torpedo bonzer
$500+ hardcore torpedo shock bonzer
$1000+ balooga shocker
*/
