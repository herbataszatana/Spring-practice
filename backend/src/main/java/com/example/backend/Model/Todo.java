package com.example.backend.Model;

import java.util.Date;

public class Todo {
    private String task;
    private Date createdDate;
    private boolean completed;
    private Long id;

    public Todo(String task, Date createdDate, boolean completed, Long id){
        this.task = task;
        this.createdDate = createdDate;
        this.completed = completed;
        this.id = id;
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
