import { getRepository, Repository } from 'typeorm';
import Course from '../../entities/Course';
import { ICourseRepo } from './interfaces';

class CourseRepository implements ICourseRepo {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }
}

export default CourseRepository;