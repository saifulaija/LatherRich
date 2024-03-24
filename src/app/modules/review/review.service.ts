

import { Product } from "../products/product.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";




const createReview = async (payload: TReview) => {
    try {
      const productId = payload.productId;
  
      // Create the review
      const createdReview = await Review.create(payload);
  
      // Extract the _id of the created review
      const reviewId = createdReview._id;
  
      // Update the product with the _id of the created review
      await Product.updateOne({ _id: productId }, {
        $push: { reviews: { reviewId: reviewId.toString() } }
      });
  
      return createdReview;
    } catch (error) {
      console.error("Error creating review:", error);
      throw error;
    }
  };
  
  


const getAllReviews=async()=>{
    const result = await Review.find()
    return result
}




const deleteReview = async ( reviewId) => {
    try {

        const reviews=await Review.findById()
        // Find the product by its ID
        const product = await Product.findById(reviews?.productId);
        
        if (!product) {
            throw new Error("Product not found");
        }

        // Find the index of the review in the product's reviews array
        const reviewIndex = product.reviews.findIndex(review => review._id.toString() === reviewId);

        // If review is not found, throw an error
        if (reviewIndex === -1) {
            throw new Error("Review not found");
        }

        // Remove the review from the reviews array
        product.reviews.splice(reviewIndex, 1);

        // Save the updated product document
        await product.save();

        console.log("Review removed from product:", reviewId);
        return { success: true, message: "Review removed from product" };
    } catch (error) {
        console.error("Error deleting review:", error.message);
        throw error; // Propagate the error to the caller
    }
};





  export const reviewServices={
    createReview,
    getAllReviews,
    deleteReview
  }