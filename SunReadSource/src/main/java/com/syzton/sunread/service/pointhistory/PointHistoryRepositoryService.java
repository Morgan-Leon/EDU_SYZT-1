package com.syzton.sunread.service.pointhistory;

import java.util.List;

import com.syzton.sunread.exception.common.NotFoundException;
import com.syzton.sunread.model.coinhistory.CoinHistory.CoinType;
import com.syzton.sunread.model.pointhistory.PointHistory;
import com.syzton.sunread.model.pointhistory.PointHistory.PointType;
import com.syzton.sunread.model.user.Student;
import com.syzton.sunread.model.user.UserStatistic;
import com.syzton.sunread.repository.pointhistory.PointHistoryRepository;
import com.syzton.sunread.repository.user.StudentRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author chenty
 *
 */
@Service
public class PointHistoryRepositoryService implements PointHistoryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PointHistoryRepositoryService.class);
    private PointHistoryRepository repository;

    @Autowired
    public PointHistoryRepositoryService(PointHistoryRepository repository) {
        this.repository = repository;
    }

    private StudentRepository studentRepository;

    @Autowired
    public void StudentRepositoryService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    @Override
    public PointHistory add(PointHistory add) {
        LOGGER.debug("Adding a new pointHistory entry with information: {}", add);
        Student student = studentRepository.findOne(add.getUser().getId());
        UserStatistic statistic = student.getStatistic();
        if (add.getPointType() == PointType.IN) {
        	statistic.setPoint( statistic.getPoint() + add.getNum() );
        } else {
        	statistic.setPoint( statistic.getPoint() - add.getNum() );
        }
        studentRepository.save(student);
        return repository.save(add);
    }
    
    @Transactional(rollbackFor = {NotFoundException.class})
    @Override
    public PointHistory deleteById(Long id) throws NotFoundException {
        LOGGER.debug("Deleting a pointHistory entry with id: {}", id);

        PointHistory deleted = findById(id);
        LOGGER.debug("Deleting pointHistory entry: {}", deleted);

        repository.delete(deleted);
        return deleted;
    }

    @Transactional(readOnly = true)
    @Override
    public List<PointHistory> findAll() {
        LOGGER.debug("Finding all pointHistory entries");
        return repository.findAll();
    }

    @Transactional(readOnly = true, rollbackFor = {NotFoundException.class})
    @Override
    public PointHistory findById(Long id) throws NotFoundException {
        LOGGER.debug("Finding a pointHistory entry with id: {}", id);

        PointHistory found = repository.findOne(id);
        LOGGER.debug("Found pointHistory entry: {}", found);

        if (found == null) {
            throw new NotFoundException("No pointHistory entry found with id: " + id);
        }

        return found;
    }

    @Transactional(rollbackFor = {NotFoundException.class})
    @Override
    public PointHistory update(PointHistory update) throws NotFoundException {
        LOGGER.debug("Updating contact with information: {}", update);

        PointHistory model = findById(update.getId());
        LOGGER.debug("Found a pointHistory entry: {}", model);
        model.setPointType(update.getPointType());
        model.setPointFrom(update.getPointFrom());        
        return model;
    }
}
