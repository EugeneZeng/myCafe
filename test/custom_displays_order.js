'use strick'

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    orderSystemWith = require('../lib/orders');

describe("Cusotm displays order", function () {
    beforeEach(function () {
        this.orderDao = {
            byId: sinon.stub()
        };
        this.orderSystem = orderSystemWith(this.orderDao);
    });
    context("Giving that the order is empty" function () {
        beforeEach(function () {
            this.orderId = "some empty order id";
            this.orderDao.byId
                .withArgs(this.orderId)
                .callArgWithAsync(1, null, []);
        
            this.result = orderSystem.display(this.orderId);
        });
        
        it("will show no order items", function () {
            return this.result.then(function (result) {
                expect(result).to.have.property("items")
                    .that.is.empty;
            });
        });
        it("will show 0 as total price", function () {
            return this.result.then(function (result) {
                expect(result).to.have.property("totalPrice"
                    .that.is.equal(0);
            });
        });
        it("will on be possible to add a beverage", function () {
            return this.result.then(function (result) {
                expect(this.result).to.have.property("actions")
                    .that.is.deep.equal([{
                        action: "append-beverage",
                        target: this.orderId,
                        parameters: {
                            beverageRef: null,
                            quantity: 0
                        }
                    }]);
            });
            
        });
    });
    context("Giving that the order contains beverages" function () {
        it("will show one item per beverage");
        it("will show sum of the unit prices as total price");
        it("will be possible to place the order");
        it("will be possible to add a beverage");
        it("will be possible to remove a beverage");
        it("will be possible to change the quantity of beverages");
    });
    context("Giving that the order has pending messages", function () {
        it("will show the pending messages");
        it("will no more pending messages");
    });
    
});

