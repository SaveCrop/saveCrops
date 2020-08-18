var app = require('express').Router();
const controller = require('./controller');

app.route('/logIn').post(controller.logIn);
app.route('/SignUp').post(controller.SignUp);
app.route('/addItems').post(controller.AddItems);
app.route('/upDate').post(controller.upDate);
app.route('/b').post(controller.b);
app.route('/ShowOrders').post(controller.ShowOrders);
app.route('/filter').post(controller.Filter);
app.route('/delete').delete(controller.Delete);
app.route('/editElement').put(controller.EditEle);
// app.route('/addToCard').post(controller.AddToCard);
// app.route('/getcards').post(controller.getCards);
app.route('/postInOrder').post(controller.AddToCard);
app.route('/postDatainOrder').post(controller.AddToOrder);
// app.route('/getcards').post(controller.Getcards);
app.route('/getcards').post(controller.Getcards);
app.route('/getName').post(controller.GetName);

module.exports = app;
