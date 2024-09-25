package com.example.backend.Model;

import java.util.Date;

public class Todo {
    private String task;
    private Date createdDate;
    private Long id;
    private String status;

    public Todo(String task, Date createdDate, Long id, String status){
        this.task = task;
        this.createdDate = createdDate;
        this.id = id;
        this.status = status;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
