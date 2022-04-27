import { Request } from "express";
import { ErrorHandler } from "../../errors";
import { CourseReviewRepository } from "../../repositories";

const updateReviewService = async (req: Request) => {
  try {

    const { id } = req.params;
    const objectCourseReviewRepo = new CourseReviewRepository();
    await objectCourseReviewRepo.updateReview(id,req.validated);
    return await objectCourseReviewRepo.findOneOrFail(id);
        
  } catch (e) {

    throw new ErrorHandler(400,`${e.message}`);
    
        
  }
}
export default updateReviewService;