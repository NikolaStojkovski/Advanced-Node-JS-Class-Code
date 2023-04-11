import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class ProductModel {
  static async getAllProducts() {
    const collection = await getDb().collection("products");
    const products = await collection.find().toArray();
    return products;
  }

  static async getProductById(id) {
    const collection = await getDb().collection("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });
    console.log(product);
    return product;
  }

  static async addProduct(product) {
    const collection = await getDb().collection("products");
    const createdProductInfo = await collection.insertOne(product);
    return { id: createdProductInfo.insertedId, ...product };
  }

  static async updateProduct(productId, body) {
    const collection = await getDb().collection("products");
    const response = await collection.updateOne(
      { _id: new ObjectId(productId) },
      { $set: body }
    );
    return response;
  }

  static async deleteProduct(productId) {
    const collection = await getDb().collection("products");
    await collection.deleteOne({ _id: new ObjectId(productId) });
  }

  static async makePurchase(purchase) {
    const product = await this.getProductById(purchase.productId);

    if (!product) throw new Error(`Product with this id does not exist`);

    if (product.stock < purchase.quantity) {
      throw new Error(`Not enought in stock`);
    }

    const collection = getDb().collection("purchases");
    const createdPurchaseResponse = await collection.insertOne(purchase);
    const updatedProduct = {
      stock: product.stock - purchase.quantity,
      purchases: product.purchases + purchase.quantity,
    };
    await this.updateProduct(purchase.productId, updatedProduct);
    return { id: createdPurchaseResponse.insertedId, ...purchase };
  }

  static async updatePurchase(purchaseId, body) {
    const product = await this.getProductById(body.productId);

    if (!product) throw new Error(`Product doesnt exist`);

    if (product.stock < body.quantity) {
      throw new Error(`Not enough in stock`);
    }

    const collection = await getDb().collection("purchases");

    const updatedPurchase = await collection.updateOne(
      { _id: new ObjectId(purchaseId) },
      { $set: body }
    );

    const updatedProduct = {
      stock: product.stock - body.quantity,
      purchases: product.purchases + body.quantity,
    };

    await this.updateProduct(body.product.id, updatedProduct);

    return { id: purchaseId, ...body };
  }
}
