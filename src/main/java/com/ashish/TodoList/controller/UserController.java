package com.ashish.TodoList.controller;
import com.ashish.TodoList.model.Users;
import com.ashish.TodoList.repository.UserRepository;
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
    @Autowired

    private UserRepository userRepository;
    @RequestMapping(method = RequestMethod.POST, value="/posts")
    public String addPost(@RequestBody String data) throws JsonProcessingException
    {
        System.out.println("a");
        Users user = new ObjectMapper().readValue(data, Users.class);
        userService.addPost(user);
        String response ="{\"success\":true,\"message\":\"Post has been added successfully\"}";
        return response;
    }

    @GetMapping("/search")
    public List<Users> searchUsersByPattern(@RequestParam("keyword") String keyword) {

        return userService.search(keyword);
    }
    @PutMapping("/editUser/{id}")
    public  String updateUser(@PathVariable(value = "id") Integer userId,
                                              @RequestBody String data) throws JsonProcessingException {
        Users userDetails = new ObjectMapper().readValue(data, Users.class);
        userDetails.setId(userId);

        userService.addPost(userDetails);

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

        this.userService.deletePost(id);
        String response="{\"success\":true,\"message\":\"Post has been deleted successfully\"}";
        return response;
    }

}

