package com.syzton.sunread.model.task;

import com.syzton.sunread.model.common.AbstractEntity;
import com.syzton.sunread.model.user.Student;
import com.syzton.sunread.model.user.Teacher;

import javax.persistence.Entity;

/**
 * Created by jerry on 3/28/15.
 */
@Entity
public class Task extends AbstractEntity{

    private Teacher teacher;

    private int targetBookNum;

    private int targetPoint;

    public int getTargetBookNum() {
        return targetBookNum;
    }

    public void setTargetBookNum(int targetBookNum) {
        this.targetBookNum = targetBookNum;
    }

    public int getTargetPoint() {
        return targetPoint;
    }

    public void setTargetPoint(int targetPoint) {
        this.targetPoint = targetPoint;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

}
