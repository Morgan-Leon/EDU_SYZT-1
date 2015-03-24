package com.syzton.sunread.dto.organization;

import javax.validation.constraints.NotNull;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.hibernate.validator.constraints.Length;

import com.syzton.sunread.model.organization.EduGroup;

public class SchoolDTO {
	private Long id;
    
	@Length(max = EduGroup.MAX_LENGTH_DESCRIPTION)
    private String description;
	
	@NotNull
	@Length(max = EduGroup.MAX_LENGTH_NAME)
	private String name;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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