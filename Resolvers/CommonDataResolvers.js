
const ProductModel = require("../Modal/ProductModel");
const { OrderModel } = require("../Modal/OrderModel")
const UserAuthModal = require("../Modal/UserAuthModal");


const DataForDashborad = async () => {
    try {
        const OrderData = await OrderModel.find()
        const userData = await UserAuthModal.find()
        const ProductData = await ProductModel.find()
        const DashboardData = {
            order: OrderData,
            userData: userData,
            ProductData: ProductData
        }
        return DashboardData

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    DataForDashborad
}