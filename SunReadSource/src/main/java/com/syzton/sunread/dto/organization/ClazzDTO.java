package com.syzton.sunread.dto.organization;

import javax.validation.constraints.NotNull;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.hibernate.validator.constraints.Length;

import com.syzton.sunread.model.organization.Clazz;

public class ClazzDTO {
	private Long id;
    
	@Length(max = Clazz.MAX_LENGTH_DESCRIPTION)
    private String description;
	
	@NotNull
	@Length(max = Clazz.MAX_LENGTH_NAME)
	private String name;
	
	@NotNull
	private int grade;
	
	private String compusName;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public String getCompusName() {
		return compusName;
	}

	public void setCompusName(String compusName) {
		this.compusName = compusName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

}
