package com.ashish.TodoList.controller;
import com.ashish.TodoList.model.Users;
import com.ashish.TodoList.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(method = RequestMethod.POST, value="/posts")
    public String addPost(@RequestBody String data) throws JsonProcessingException
    {
        Users user = new ObjectMapper().readValue(data, Users.class);
        userService.addPost(user);
        String response ="{\"success\":true,\"message\":\"Post has been added successfully\"}";
        return response;
    }



    @RequestMapping(method = RequestMethod.GET, value="/posts")
    public List<Users> getPost()
    {
        return userService.getAllPost();
    }
    @DeleteMapping("/posts/{id}")
    public String deletePosts(@PathVariable Integer id)
    {
        System.out.println("ashish");
        this.userService.deletePost(id);
        String response="{\"success\":true,\"message\":\"Post has been deleted successfully\"}";
        return response;
    }




}

