const Users = require('./../models/Users');
const Order = require('./../models/Order');
const Item = require('./../models/Items');
exports.logIn = function (req, res) {
  const { phoneNumber, password } = req.body;
  console.log(' the user from client side ', req.body);
  // Users.create({ name: 'Aboood', role: 'mhhohjhjhh', phoneNumber, password })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  Users.find({ phoneNumber: phoneNumber }).then((result) => {
    // console.log(result);
    if (result.length === 0) {
      res.send('The User is not exist');
      // console.log('The User is not exist');
      // res.json({msg:'The User is not exist',user:user});
    } else {
      result.forEach((user) => {
        // console.log(e.password);
        // console.log(e.password.length === password.length);
        if (user.password == password) {
          res.json({ msg: 'Sucess LogIn', user: user });
          // console.log('Sucess');
        } else {
          res.send('The password is Wrong');
          console.log('fail');
        }
      });
    }
  });
};
/////////////////////////////sign up//////////
exports.SignUp = function (req, res) {
  const { name, role, phoneNumber, password } = req.body;
  var CurrentModel = new Users({ name, role, phoneNumber, password });
  CurrentModel.save()
    .then((result) => {
      res.send('Add user opreation is sucess');
    })
    .catch((e) => {
      res.send(e);
      console.log(e);
    });
};
exports.AddItems = function (req, res) {
  const { type, quantitey, date, price, ID_Phone, sell, imageUrl } = req.body;
  console.log(req.body);
  var x = new Item({ type, quantitey, date, price, ID_Phone, sell, imageUrl });
  x.save()
    .then((result) => {
      res.send('Add Item is sucess');
    })
    .catch((e) => {
      res.send(e);
      console.log(e, 'dees not add items ! ');
    });
};
exports.b = (req, res) => {
  Item.find({ sell: false })
    .then((result) => {
      console.log(
        'Array list of  schema items all items that deos not sell',
        result
      );

      res.send(result);
      console.log('ressssssssssssult', result);
    })
    .catch((e) => {
      console.log('errrrrrrrrror ', e);
    });
};
exports.upDate = async (req, res) => {
  const { sell, _id } = req.body;
  console.log(req.body, 'req.body');

  await Item.findByIdAndUpdate({ _id: _id }, { sell: sell })
    .then((update) => {
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', update);
      res.send('the update is working');
    })
    .catch((error) => {
      console.log(error, 'error');
    });
};

///// ShowTransication
exports.ShowOrders = (req, res) => {
  const ID_Phone = req.body.ID_Phone;
  Item.find({ ID_Phone: ID_Phone }) //
    .then((result) => {
      res.send(result);
      console.log('resssssssssult', result);
    })
    .catch((error) => {
      res.send(error, 'error from Sow Transications');
    });
};
exports.Filter = (req, res) => {
  const { sell, curentType } = req.body;
  console.log(req.body);
  Item.find({ sell: false } && { type: curentType }).then((e) => {
    res.send(e);
  });
};
/////////////////////////////////////Delete from show items////////////////////////////
exports.Delete = (req, res) => {
  const { id, ID_Phone } = req.body;
  console.log(id, ID_Phone);
  Item.remove({ _id: id })
    .then((re) => {
      res.send(re);
    })
    .catch((e) => {
      console.log(e);
    });
};
exports.EditEle = (req, res) => {
  const { type, quantitey, date, price, sell, ID_Phone, id_Item } = req.body;
  Item.findByIdAndUpdate(
    { _id: id_Item },
    { type: type, quantitey: quantitey, date: date, price: price }
    // { type, quantitey, date, price, ID_Phone, sell })
  )
    .then((result) => {
      console.log(result, 'ressssssssssssssssult');
    })
    .catch((error) => {
      console.log(error, 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrror');
    });
};
// exports.AddToCard = (req, res) => {
//   var object = {
//     _id: 0,
//     userId: 0,
//   };
//   // console.log(req.body);
//   const { _id, phoneNumber } = req.body;
//   console.log(phoneNumber);
//   var item = new Order({ Id_Item: _id, phoneNumber: phoneNumber });
//   item.save().then((result) => {
//     console.log(result);
//   });

//   // Users.find({ phoneNumber: phoneNumber })
//   //   .then((res) => {
//   //     // console.log(res);
//   //     object._id = res;
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
//   // Item.find({ _id: _id })
//   //   .then((res) => {
//   //     // console.log(res);
//   //     object.userId = res;
//   //     console.log(object);
//   //   })
//   //   .catch((er) => {
//   //     console.log(er);
//   //   });
// };
// exports.getCards = async (req, res) => {
//   var object = {
//     id_Item: '',
//     phoneNumber: 0,
//   };
//   var arrOfItems = [];
//   const { phoneNumber } = req.body;
//   // Users.findOne({ phoneNumber: phoneNumber })
//   //   .then((result) => {
//   //     arrOfItems.push(result[0]);
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
//   // Order.find({
//   //   $and: [{ ID_Phone: phoneNumber }, { sell: true }],
//   // }).then((result) => {
//   //   console.log(result, 'if sucess i will fuck you');
//   // });

//   // await Order.find({ phoneNumber: phoneNumber })
//   //   .then(async (result) => {
//   //     console.log('the result length is: ' + result.length);
//   //     await result.forEach(async (ele, index) => {
//   //       await Item.find({ _id: ele.Id_Item }).then(async (result) => {
//   //         console.log('==');
//   //         arrOfItems[index] = result;
//   //       });
//   //     });
//   //     console.log('the arrOfItems length is: ' + arrOfItems.length);
//   //     // console.log(arrOfItems);
//   //     // return arrOfItems;
//   //   })
//   await Order.find({ phoneNumber: phoneNumber })
//     .then(async (result) => {
//       async function x() {
//         console.log('the result length is: ' + result.length);
//         for (let i = 0; i < result.length; i++) {
//           const element = result[i];
//           Item.find({ _id: element.Id_Item }).then(async (result) => {
//             console.log('==');
//             arrOfItems[i] = result;
//           });
//         }

//         // });
//         console.log('the arrOfItems length is: ' + arrOfItems.length);
//         // console.log(arrOfItems);
//         // return arrOfItems;
//       }
//       x();
//     })
//     // .then((arrOfItems) => {
//     //   // console.log('in the then');
//     //   console.log('the arrOfItems length in then is: ' + arrOfItems.length);
//     // })
//     .catch((error) => {
//       console.log(error);
//     });
//   //   .then((res) => {
//   //     // console.log(res);
//   //     object.userId = res;
//   //     console.log(object);
//   //   })
//   //   .catch((er) => {
//   //     console.log(er);
//   //   });
// };
exports.AddToCard = (req, res) => {
  // console.log(req.body, 'id from the click to added to the order scheman !');
  const { _id } = req.body;
  // console.log(_id, 'id from the click to added to the order scheman !');
  Item.find({ _id: _id })
    .then((result) => {
      console.log(result, 'the data found in Item schema that add to card !');
      res.send(result);
    })
    .catch((error) => {
      console.log(
        error,
        'error from posted data to get data from Schema Item '
      );
    });
};
exports.AddToOrder = (req, res) => {
  // phoneNumber: phoneNumber,
  //         type: result.data[0].type,
  //         quantitey: result.data[0].quantitey,
  //         date: new Date(),
  //         price: result.data[0].price,
  // console.log(req.body, 'the data comeing from posted ');
  const { phoneNumber, type, quantitey, date, price } = req.body;
  // console.log(phoneNumber, 'type its for validate');
  var currentOrder = new Order({
    phoneNumber: phoneNumber,
    type: type,
    quantitey: quantitey,
    date: date,
    price: price,
  });
  currentOrder.save().then((result) => {
    // console.log(result);
    console.log(typeof date);
  });
};
exports.Getcards = (req, res) => {
  // console.log(req.body, 'phone from the showOrder Item ');
  const { phoneNumber } = req.body;
  // console.log(phoneNumber, 'phone from the showOrder Item ');
  Order.find({ phoneNumber: phoneNumber }).then((result) => {
    console.log(
      result.length,
      'array of obkect which matches from schema order base on mobile '
    );
    res.send(result);
  });
};
exports.GetName = (req, res) => {
  const { phoneNumber } = req.body;
  Users.find({ phoneNumber: phoneNumber }).then((result) => {
    // console.log(result, 'result from ');
    res.send(result);
  });
};
exports.GetbeforeEdit = (req, res) => {
  const { id_Item } = req.body;
  Item.find({ _id: id_Item })
    .then((result) => {
      // console.log(result, 'the data coming from search');
      res.send(result);
    })
    .catch((error) => {
      console.log(
        error,
        'the error coming from get the data from item to e efited '
      );
    });
};
